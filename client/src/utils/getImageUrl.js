export const getImageUrl = (url, size) => {

	if (!url) {
		return url;
	}

	if (url.includes('resize'))
		return url;

	const imageNameParts = url.split('/');
	const imageName = imageNameParts.pop();

	switch (size) {
		case 'large':
			return `${imageNameParts.join('/')}/resize_2048_${imageName}`;
		case 'medium':
			return `${imageNameParts.join('/')}/resize_1024_${imageName}`;
		case 'small':
			return `${imageNameParts.join('/')}/resize_512_${imageName}`;
		case 'tiny':
			return `${imageNameParts.join('/')}/resize_256_${imageName}`;
		default:
			return url;
	}

};
