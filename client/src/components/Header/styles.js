import styled from 'styled-components';
import {Link} from "react-router-dom";
import downCaret from "../../assets/svgs/ui/DownCaret.svg";
import {sizes} from "../../styles";

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
	
	.navbar-toggler > .navbar-toggler-icon {
		background-image: url(${downCaret});
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

export const NavBarLink = styled(Link)`

	font-weight: 600;
    font-size: 13px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
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
