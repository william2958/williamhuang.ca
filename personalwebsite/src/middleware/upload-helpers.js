const uploadImage = ({ }, { bucket }) => async (req, res, next) => {

    // Make sure there's a file included
    if (!req.file) {
        return res.status(400).send({
            message: 'No file uploaded!',
        });
    }

    if (!req.body.path) {
        return res.status(401).send({
            message: 'Uploads to the root directory are forbidden',
        });
    }

    try {
        // Get a reference to the bucket file, and make sure to save in the right directory
        const formattedPath = req.body.path.replace(/ /g, '_');
        let formattedName;
        if (req.file.originalname) {
            formattedName = req.file.originalname.replace(/ /g, '_');
        } else {
            formattedName = 'unnamed_file'
        }
        const blob = bucket.file(
            formattedPath + Date.now() + '_' + formattedName,
        );
        // Start the upload
        const blobStream = await blob.createWriteStream({
            metadata: {
                contentType: req.file.mimetype,
            },
        });

        blobStream.on('error', err => {
            console.error('There was an error uploading that file: ', err);
            return res.status(400).send({
                message: 'Could not upload that file',
            });
        });

        blobStream.on('finish', () => {
            // The public URL can be used to access the file via HTTP.
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

            // Make the image public to the web
            blob.makePublic().then(() => {
                req.imageURL = publicUrl;
                next();
                // res.status(200).send({
                //   message: `Success!\n Image uploaded to ${publicUrl}`,
                //   url: publicUrl
                // });
            });
        });

        blobStream.end(req.file.buffer);
    } catch (e) {
        res.status(400).send({
            message: 'There was an error uploading that file',
            error: e,
        });
    }
};

module.exports = { uploadImage };
