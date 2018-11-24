const mongoose = require('mongoose');

module.exports = () => {
  let uri = process.env.MONGODB_URI || 'mongodb://web:G8Ld"<t]8Sgu(,=P@ds235732.mlab.com:35732/lootto';
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true
  };
  mongoose.Promise = Promise;
  mongoose.connect(uri, options);

  const db = mongoose.connection;
  return new Promise((resolve, reject) => {
    db.once('connected', () => resolve(db));
    db.on('error', reject);
  });
};
