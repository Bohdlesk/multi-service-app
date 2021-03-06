import mongoose from 'mongoose';

let database: mongoose.Connection;

export const connect = (): void => {
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

  database.once('open', async (): Promise<void > => {
    console.log('Connected to database');
  });
  database.on('error', (): void => {
    console.log('Error connecting to database');
  });
};
export const disconnect = (): void => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
  console.log('Mongo disconnected');
};
