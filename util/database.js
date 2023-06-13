import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://admin:pass1234@nextjscrud.y3nr9if.mongodb.net/?retryWrites=true&w=majority';
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.MODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(uri, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}

export { connectDB }