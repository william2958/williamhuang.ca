import styled from 'styled-components';
import {Link} from "react-router-dom";
import downCaret from "../../assets/svgs/ui/DownCaret.svg";
import {sizes} from "../../styles";

export const NavbarContainer = styled.div`

  background-color: #000 !important;
	//ul {
	//	margin-top: 0;
	//	margin-bottom: 1rem;
	//}
    //
	//ul ul {
	//	margin-bottom: 0;
	//}
    //
	//background-color: #000 !important;
	//
	//position: relative;
	//display: -ms-flexbox;
	//display: flex;
	//-ms-flex-wrap: wrap;
	//flex-wrap: wrap;
	//-ms-flex-align: center;
	//align-items: center;
	//-ms-flex-pack: justify;
	//justify-content: space-between;
	//padding: 0.5rem 1rem;
	//font-family: -apple-system, BlinkMacSystemFont, 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	//
	//.container {
	//	display: -ms-flexbox;
	//	display: flex;
	//	-ms-flex-wrap: wrap;
	//	flex-wrap: wrap;
	//	-ms-flex-align: center;
	//	align-items: center;
	//	-ms-flex-pack: justify;
	//	justify-content: space-between;
	//}
	//
	//.navbar-nav {
	//	display: -ms-flexbox;
	//	display: flex;
	//	-ms-flex-direction: column;
	//	flex-direction: column;
	//	padding-left: 0;
	//	margin-bottom: 0;
	//	list-style: none;
	//}
	//
	//.navbar-nav .nav-link {
	//	padding-right: 0;
	//	padding-left: 0;
	//}
	//
	//.navbar-collapse {
	//	-ms-flex-preferred-size: 100%;
	//	flex-basis: 100%;
	//	-ms-flex-positive: 1;
	//	flex-grow: 1;
	//	-ms-flex-align: center;
	//	align-items: center;
	//}
	//
	//.navbar-toggler {
	//	padding: 0.25rem 0.75rem;
	//	font-size: 1.25rem;
	//	line-height: 1;
	//	background-color: transparent;
	//	border: 1px solid transparent;
	//	border-radius: 0.25rem;
	//}
	//
	//.navbar-toggler:hover, .navbar-toggler:focus {
	//	text-decoration: none;
	//}
	//
	//.navbar-toggler-icon {
	//	display: inline-block;
	//	width: 1.5em;
	//	height: 1.5em;
	//	vertical-align: middle;
	//	content: "";
	//	background: no-repeat center center;
	//	background-size: 100% 100%;
	//}
	//
	//.mr-auto {
	//	margin-right: auto !important;
	//}
	//
	//@media (max-width: 767.98px) {
	//	& > .container {
	//		padding-right: 0;
	//		padding-left: 0;
	//	}
	//}
	//
	//@media (min-width: 768px) {
	//	-ms-flex-flow: row nowrap;
	//	flex-flow: row nowrap;
	//	-ms-flex-pack: start;
	//	justify-content: flex-start;
	//.navbar-nav {
	//	-ms-flex-direction: row;
	//	flex-direction: row;
	//}
	//.navbar-nav .dropdown-menu {
	//	position: absolute;
	//}
	//.navbar-nav .nav-link {
	//	padding-right: 0.5rem;
	//	padding-left: 0.5rem;
	//}
	//& > .container,
	//& > .container-fluid, & > .container-sm, & > .container-md, & > .container-lg, & > .container-xl {
	//	-ms-flex-wrap: nowrap;
	//	flex-wrap: nowrap;
	//}
	//.navbar-collapse {
	//	display: -ms-flexbox !important;
	//	display: flex !important;
	//	-ms-flex-preferred-size: auto;
	//	flex-basis: auto;
	//}
	//.navbar-toggler {
	//	display: none;
	//}
	//}
	//
	//.navbar-nav .nav-link {
	//color: rgba(255, 255, 255, 0.5);
	//}
	//
	//.navbar-nav .nav-link:hover, .navbar-nav .nav-link:focus {
	//	color: rgba(255, 255, 255, 0.75);
	//}
	//
	//.navbar-nav .nav-link.disabled {
	//	color: rgba(255, 255, 255, 0.25);
	//}
	//
	//.navbar-nav .show > .nav-link,
	//.navbar-nav .active > .nav-link,
	//.navbar-nav .nav-link.show,
	//.navbar-nav .nav-link.active {
	//	color: #fff;
	//}
	//
	//.navbar-toggler {
	//	color: rgba(255, 255, 255, 0.5);
	//	border-color: rgba(255, 255, 255, 0.1);
	//}
	//
	//.navbar-text {
	//	color: rgba(255, 255, 255, 0.5);
	//}
	//
	//.navbar-text a {
	//	color: #fff;
	//}
	//
	//.navbar-text a:hover, .navbar-text a:focus {
	//	color: #fff;
	//}
	
	//position: relative;
	//padding-left: 0;
	//padding-right: 0;
	
	.navbar-left {
		margin-left: -1rem;
	}
	.navbar-right {
		margin-right: -1rem;
	}
	
	.navbar-toggler {
		outline: none;
		border: 0;
		padding-right: 0;
	}
	
	.navbar-toggler > .navbar-toggler-icon {
		background-image: url("${downCaret}");
	    transform: rotate(180deg);
	  	transition: transform 0.3s;
	}
	
	.navbar-toggler.collapsed > .navbar-toggler-icon {
		transform: rotate(0deg);
	}
	
	
	@media only screen and (max-width: ${sizes.phone}px) {
		.navbar-right {
			margin-right: 0;
		}
	}
	
`;

export const HeaderWrapper = styled.div`
	
	position: relative;
	padding-left: 0;
	padding-right: 0;
	
	.navbar-left {
		margin-left: -1rem;
	}
	.navbar-right {
		margin-right: -1rem;
	}
	
	.navbar-toggler {
		outline: none;
		border: 0;
	}
	
	// .navbar-toggler > .navbar-toggler-icon {
	// 	background-image: url(${downCaret});
	// 	transform: rotate(180deg);
	// 	transition: transform 0.3s;
	// }
	//
	// .navbar-toggler.collapsed > .navbar-toggler-icon {
	// 	transform: rotate(0deg);
	// }
	
	
	@media only screen and (max-width: ${sizes.phone}px) {
		.navbar-left {
			margin-left: 0;
		}
		.navbar-right {
			margin-right: 0;
		}
	}
	
`;

export const NavBarLink = styled(Link)`

	font-weight: 600;
	font-size: 13px;
	color: #fff !important;
	text-decoration: none !important;
	text-transform: uppercase !important;
	border-bottom: 2px solid transparent;
	border-top: 2px solid transparent;
	padding: 0.5rem 1rem;
	display: block;
	
	&:hover {
		color: #fff;
		border-bottom: 2px solid #fff;
		text-decoration: none;
	}

`;
