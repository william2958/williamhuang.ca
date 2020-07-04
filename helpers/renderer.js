import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';

import { ServerStyleSheet } from "styled-components";

const sheet = new ServerStyleSheet();

export default (req, store, context) => {
	const content = renderToString(sheet.collectStyles(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				<div>{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
		)
	);
	const styleTags = sheet.getStyleTags();

	return`
    <html>
      <head>
      
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1" />
	
<!--	    <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png">-->
<!--	    <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png">-->
<!--	    <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png">-->
	    <meta name="msapplication-TileColor" content="#da532c">
	    <meta name="theme-color" content="#ffffff">
	    <!--
	      manifest.json provides metadata used when your web app is installed on a
	      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
	    -->
<!--	    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />-->
	    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet">
	    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
	    <!--
	      Notice the use of %PUBLIC_URL% in the tags above.
	      It will be replaced with the URL of the \`public\` folder during the build.
	      Only files inside the \`public\` folder can be referenced from the HTML.
	
	      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
	      work correctly both with client-side routing and a non-root public URL.
	      Learn how to configure a non-root public URL by running \`npm run build\`.
	    -->
	
	    <meta property="og:title" content="Home | William Huang" />
	    <meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />
	    <meta property="description" content="Explore my blog, reviews, guides, and more." />
	    <meta property="og:url" content="https://www.williamhuang.ca" />
	
	    <title>Will H.</title>
	</head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
        ${styleTags}
      </body>
    </html>
  `;
}
