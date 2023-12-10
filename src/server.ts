import config from './config';
import mongoose from 'mongoose';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.mongodb_uri as string);

    app.listen(config.port, () => {
      console.log(`running on ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
