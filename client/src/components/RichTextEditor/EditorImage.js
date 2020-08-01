import React, {useState} from 'react';
import posed from 'react-pose';
import styled, { css } from 'styled-components';
import {getImageUrl} from "../../utils/getImageUrl";
import {sizes} from "../../styles";
import SvgIcon from "../SvgIcon";

function _objectWithoutProperties(obj, keys) {
	let target = {};
	for (let i in obj) {
		if (keys.indexOf(i) >= 0)
			continue;
		if (!Object.prototype.hasOwnProperty.call(obj, i))
			continue;
		target[i] = obj[i];
	}
	return target;
}

const Frame = styled(posed.div({
	init: {
		applyAtEnd: { display: 'none' },
		opacity: 0
	},
	zoom: {
		applyAtStart: { display: 'block' },
		opacity: 1
	}
}))`
`;

const FrameCloseButton = styled.div`
	position: fixed;
    top: 24px;
    right: 24px;
    padding: 8px;
    border-radius: 8px;
    background-color: #fff;
    z-index: 1034;
    
    ${({show}) => show ? css`display: block` : css`display: none;`};
    
    & > span > img {
    	cursor: pointer;
    }
    @media only screen and (max-width: ${sizes.tablet}px) {
    	${({show}) => show ? css`display: block` : css`display: none;`};
    }
`;

const transition = {
	duration: 400,
	ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = styled(posed.img({
	init: {
		position: 'absolute',
		width: 'auto',
		height: 'auto',
		transition,
		flip: true,
		top: 0
	},
	zoom: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		transition,
		flip: true
	}
})).attrs(props => {
	let imageSource = '';
	if (typeof window === 'undefined')
		return { src: getImageUrl(props.image, 'medium')}
	const width = window.innerWidth;
	if (width < sizes.phone) {
		imageSource = getImageUrl(props.image, 'small');
	} else if (width > sizes.desktop) {
		if (props.pose === 'zoom')
			imageSource = getImageUrl(props.image, 'large');
		else
			imageSource = getImageUrl(props.image, 'medium');
	} else {
		imageSource = getImageUrl(props.image, 'medium');
	}
	return {
		src: imageSource
	}
})`
`;

const EditorImageWrapper = styled.div`
	
	img {
		cursor: zoom-in;
		display: block;
		max-width: 100%;
		max-height: 100%;
		margin: auto;
	}
	
	img.zoomed {
		cursor: zoom-out;
		z-index: 1032;
	}
	
	.image {
		position: absolute;
		top: 0;
	}
	
	.frame {
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  display: none;
	  background: white;
	  transform: translateZ(0);
	  z-index: 1031;
	}

`;

const ImagePlaceholder = styled.img.attrs(props => ({
	src: getImageUrl(props.image, 'tiny')
}))`
	width: 100%;
	height: auto;
	position: relative;
	opacity: 0;
`;

const ImageComponent = (props) => {

	const [zoomed, setZoomed] = useState(false);
	const [scrollPos, setScrollPos] = useState(0);

	const zoomIn = () => {
		// if (window.innerWidth > sizes.tablet)
		window.addEventListener('scroll', zoomOut);
		setZoomed(true);
	}

	const zoomOut = () => {
		// if (window.innerWidth > sizes.tablet)
		window.removeEventListener('scroll', zoomOut);
		// else {
		// 	document.body.style.top = ``;
		// 	document.body.style.position = '';
		// 	window.scrollTo(0,scrollPos);
		// }
		setZoomed(false);
	}

	const toggleZoom = () => {
		if (window.innerWidth > sizes.tablet)
			zoomed ? zoomOut() : zoomIn();
		else {
			if (!zoomed) {
				zoomIn();
				// setTimeout(() => {
				// 	const scrollY = window.scrollY;
				// 	setScrollPos(scrollY);
				// 	document.body.style.top = `-${scrollY}px`;
				// 	document.body.style.position = 'fixed';
				// }, 400);
			}
		}

	}

	const entity = props.contentState.getEntity(props.block.getEntityAt(0)).getData();
	const otherProps = _objectWithoutProperties(props, ['block', 'className', 'theme']);
	const elemProps = _objectWithoutProperties(otherProps, ['blockProps', 'customStyleMap', 'customStyleFn', 'decorator', 'forceSelection', 'offsetKey', 'selection', 'tree', 'contentState', 'blockStyleFn']);

	const pose = zoomed ? 'zoom' : 'init';

	return (
		<EditorImageWrapper
			{...elemProps}
			onClick={toggleZoom}
		>
			<Frame pose={pose} className="frame" />
			<FrameCloseButton onClick={zoomOut} show={zoomed}>
				<SvgIcon size={18} icon='CloseThin' hover title={'Close'} />
			</FrameCloseButton>
			<Image
				image={entity.src}
				className={`${props.theme.props} ${props.className} image ${zoomed ? 'zoomed' : ''}`}
				pose={pose}
			/>
			<ImagePlaceholder
				image={entity.src}
				className={`${props.theme.props} ${props.className}`} />
		</EditorImageWrapper>
	)
}

export default ImageComponent;
