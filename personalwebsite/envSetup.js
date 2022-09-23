const fs = require('fs');
const dotenv = require('dotenv');

console.log('node env: ', process.env.NODE_ENV);
if (process.env.NODE_ENV && fs.existsSync(`./.env.${process.env.NODE_ENV}`)) {
    if (process.env.NODE_ENV !== 'test')
        console.log(`Running in ${process.env.NODE_ENV} environment`);
    dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });
} else if (fs.existsSync('./.env')) {
    console.log('No environment set! Running default .env file');
    dotenv.config();
} else {
    console.log('No environment set! Hope you have your environment declared.');
}
