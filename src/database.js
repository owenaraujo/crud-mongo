import mongoose from "mongoose";
import config from "./config/db";
(async () => {
  try {
    const db = await mongoose.connect(
     
      config.mongodb_2, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("conetado a ", db.connection.name);
  } catch (error) {
    console.log(error);
    console.log('base de datos no iniciada')
  }
})();


