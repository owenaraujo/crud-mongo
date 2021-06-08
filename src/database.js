import mongoose from "mongoose";
import config from "./config/db";
(async () => {
  try {
    const db = await mongoose.connect(
     
      `mongodb+srv://owenaraujo20:<password>@inventario.6bs3b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("conetado a ", db.connection.name);
  } catch (error) {
    console.log('base de datos no iniciada')
  }
})();


