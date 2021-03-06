import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';
import { Helmet } from 'react-helmet';

import { ServerStyleSheet } from "styled-components";

const baseStyles = `
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

`;

export default (req, store, context) => {
	let content;
	let styleTags;
	const sheet = new ServerStyleSheet();
	try {
		content = renderToString(sheet.collectStyles(
			<Provider store={store}>
				<StaticRouter location={req.path} context={context}>
					<div>{renderRoutes(Routes)}</div>
				</StaticRouter>
			</Provider>
			)
		);
		styleTags = sheet.getStyleTags();
	} finally {
		sheet.seal()
	}

	const helmet = Helmet.renderStatic();

	return`
    <html>
      <head>
      
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1" />
	
	    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	    <meta name="msapplication-TileColor" content="#da532c">
	    <meta name="theme-color" content="#ffffff">
	    <!--
	      manifest.json provides metadata used when your web app is installed on a
	      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
	    -->
<!--	    <link rel="manifest" href="public/manifest.json" />-->
	    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet">
	    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
	
		${helmet.title.toString()}
		${helmet.meta.toString()}
	    
	    <style>
			   ${baseStyles} 
		</style>
        ${styleTags}
	
	    <title>Will H.</title>
	</head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}
