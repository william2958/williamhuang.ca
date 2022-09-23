const mongoose = require('mongoose');

class MongoManager {
  constructor() {}
  getMongoUrl() {
    if (!process.env.MONGODB_URI) {
      console.error('No mongo uri set!');
    }
    return process.env.MONGODB_URI;
  }
  connect() {
    return mongoose.connect(this.getMongoUrl(), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      // useUnifiedTopology: true,
    });
  }
}

const mongoManager = new MongoManager();

module.exports = { mongoManager };
