const gcs = require('@google-cloud/storage')();
const os = require('os');
const path = require('path');
const sharp = require('sharp');

/**
 * Triggered from a change to a Cloud Storage bucket.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.compressUploadedImages = async (event, context) => {

	const imageObject = event;
	const bucket = imageObject.bucket;
	const contentType = imageObject.contentType;
	const filePath = imageObject.name;
	const bucketDir = path.dirname(filePath);
	const fileName = filePath.split('/').pop();

	const destBucket = gcs.bucket(bucket);
	const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
	const metadata = {
		contentType: contentType,
		//'Cache-Control': 'public,max-age=3600',
	};

	if (fileName.includes('resize') || !imageObject.contentType.includes('image')) {
		return;
	}

	await destBucket.file(filePath).download({
		destination: tmpFilePath,
		verify: false
	});

	const sizes = [256, 512, 1024, 2048];

	const uploadPromises = sizes.map(async size => {
		const resizeName = `resize_${size}_${fileName}`;
		const resizePath = path.join(os.tmpdir(), resizeName);

		await sharp(tmpFilePath)
			.resize(size, size, {
				withoutEnlargement: true
			})
			.toFile(resizePath);

		await destBucket.upload(resizePath, {
			destination: path.join(bucketDir, resizeName),
			resumable: false
		});

		return destBucket
			.file(path.join(bucketDir, resizeName))
			.makePublic();
	});

	await Promise.all(uploadPromises);

	return;

};
