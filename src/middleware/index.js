
const {
    authenticate,
    generateAccessToken,
} = require('../passport/passport-middleware');

const { multer } = require('./multer');

const { uploadImage } = require('./upload-helpers');

const {
    sendOne,
    sendList,
    sendCreated,
    sendUpdated,
    sendDeleted,
    sendAccepted,
    withoutErrors,
} = require('./requests-helpers');

module.exports = {
    authenticate,
    generateAccessToken,
    multer,
    uploadImage,
    sendOne,
    sendList,
    sendCreated,
    sendUpdated,
    sendDeleted,
    sendAccepted,
    withoutErrors,
};
