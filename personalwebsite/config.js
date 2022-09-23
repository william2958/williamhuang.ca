const { Storage } = require('@google-cloud/storage');

const storage = new Storage();

const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

module.exports = {
    config: {
        passport: {
            tokenTime: 2592000, // 60*60*24*30 -> 30 days
            secretAuthToken: process.env.SECRET_TOKEN,
            resetPasswordExpires: 3600000 * 24, // 24 hour
        },
        bucket
    }
};
