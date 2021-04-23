import mongoose from 'mongoose';
import exp from 'constants';

let database: mongoose.Connection;

export const connect = () => {
  const uri = 'mongodb://localhost:27017/test';
  if (database) {
    return;
  }
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = mongoose.connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });
  database.on('error', () => {
    console.log('Error connecting to database');
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
  console.log('Mongo disconnected');
};
