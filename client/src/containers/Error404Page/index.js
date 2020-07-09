import React from 'react';
import {Error404Graphic, Error404PageWrapper} from "./styles";
import {H4} from "../../styles/typography/Headers";
import {LeadParagraph} from "../../styles/typography/P";
import Button from "../../components/UI/Button";

const Error404Page = ({ staticContext = {}, history }) => {
	staticContext.notFound = true;
	return <Error404PageWrapper>
		<div className="content">
			<Error404Graphic />
			<H4>Route not found</H4>
			<LeadParagraph>It doesn't seem like we have that page here...</LeadParagraph>
			<Button onClick={() => history.push('/')}>Go Home</Button>
		</div>
	</Error404PageWrapper>
}

export default {
	component: Error404Page
}
