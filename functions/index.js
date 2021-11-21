const admin = require('firebase-admin');
const serviceAccount = require('./library-of-millie-firebase-adminsdk-iyo4m-c82de7f60f.json');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require('./api'),
};
