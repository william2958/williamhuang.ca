const Multer = require('multer');

const MAX_FILE_SIZE = 15;

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: MAX_FILE_SIZE * 1024 * 1024, // no larger than 15mb, you can change as needed.
    },
});

module.exports = {
    multer,
};
