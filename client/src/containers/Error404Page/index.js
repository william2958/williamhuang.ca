import React from 'react';
import {Error404PageWrapper} from "./styles";

const Error404Page = ({ staticContext = {} }) => {
	staticContext.notFound = true;
	return <Error404PageWrapper>
		Route not found
	</Error404PageWrapper>
}

export default {
	component: Error404Page
}
