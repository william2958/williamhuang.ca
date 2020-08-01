import React from 'react';
import {HeaderWrapper, NavbarContainer, NavBarLink} from "./styles";

const Header = ({ sticky }) => {

	return (
		<NavbarContainer className={
			"navbar navbar-expand-md navbar-dark bg-dark" +
			(sticky ? " sticky-top" : ' fixed-top')
		}>
			<HeaderWrapper className="container">
				<NavBarLink to="/" className="navbar-left">William Huang</NavBarLink>
				<button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
						aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
							<NavBarLink to="/projects">Projects</NavBarLink>
						</li>
						<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
							<NavBarLink to="/bookReviews">Find a Book</NavBarLink>
						</li>
						<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
							<NavBarLink to="/monthlyFives">The Monthly 5</NavBarLink>
						</li>
						<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
							<NavBarLink to="/guides">Guides</NavBarLink>
						</li>
						{/*<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">*/}
						{/*	<NavBarLink to="/bookReviews">Blog</NavBarLink>*/}
						{/*</li>*/}
					</ul>
					<ul className="navbar-nav navbar-right">
						<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
							<NavBarLink to="/blog">Blog</NavBarLink>
						</li>
					</ul>
				</div>
			</HeaderWrapper>
		</NavbarContainer>
	)

};

export default Header;
