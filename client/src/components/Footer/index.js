import React from 'react';
import SvgIcon from "../SvgIcon";
import {H3, H5} from "../../styles/typography/Headers";
import {BodyParagraph} from "../../styles/typography/P";
import {FooterLink, FooterLinksColumn, FooterSocialIcons, FooterWrapper, InternalFooterLink} from "./styles";
import {withRouter} from "react-router-dom";

const Footer = ({ history }) => {

	return (
		<FooterWrapper>
			<div className="container">
				<div className="row footerInfoRow">
					<div className="col-sm-8">
						<H3 color="highlight" onClick={() => history.push('/')}>Will's Blog</H3>
						<BodyParagraph color="highlight">
							A Brain Dump
						</BodyParagraph>

						<FooterSocialIcons>
							<SvgIcon size={24} icon='Github' hover title={'Github'}
							         onClick={() => window.open("https://github.com/william2958", "_blank")}/>
							<SvgIcon size={24} icon='Twitter' hover title={'Twitter'}
									onClick={() => window.open("https://twitter.com/_willhuang", "_blank")}/>
							{/*<SvgIcon size={24} icon='Medium' />*/}
							<SvgIcon size={24} icon='AngelList' hover title={'AngelList'}
							         onClick={() => window.open("https://angel.co/u/william-huang-18", "_blank")}/>
							<SvgIcon size={24} icon='LinkedIn' hover title={'LinkedIn'}
							         onClick={() => window.open("https://www.linkedin.com/in/william-h-902213139/", "_blank")}/>
						</FooterSocialIcons>
					</div>
					<FooterLinksColumn className="col-sm-2">
						<H5 color="highlight">
							Explore
						</H5>
						<InternalFooterLink to="/monthlyBullets" className="footerLink">Monthly Bullets</InternalFooterLink>

						{/*<h4 className="footerTitle">*/}
						{/*	Admin*/}
						{/*</h4>*/}
						{/*<Link to="/adminLogin" className="footerLink highlight">Login</Link>*/}
					</FooterLinksColumn>
					<FooterLinksColumn className="col-sm-2">
						<H5 color="highlight">
							Contact
						</H5>
						<FooterLink
							href="mailto: william2958@gmail.com">
							Email Me
						</FooterLink>
						<hr/>
						<H5 color="highlight">
							My Resume
						</H5>
						<FooterLink
							href="https://storage.googleapis.com/global-resources/resume/WilliamHuang_FullStackDeveloper.pdf"
							highlight
							download
							target="_blank"
							rel="noopener noreferrer"
						>Download</FooterLink>
					</FooterLinksColumn>
				</div>
				<div className="row">
					<div className="col-sm-12 terms">
						<div />
						{/*<h5>TERMS AND CONDITIONS</h5>*/}
						<h5>&copy; {new Date().getFullYear()} - WILLIAMHUANG.CA</h5>
						{/*<h5>WILLIAMHUANG.CA</h5>*/}
					</div>
				</div>
			</div>
		</FooterWrapper>
	)

};

export default withRouter(Footer);
