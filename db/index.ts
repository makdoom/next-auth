import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully 🚀");
    });

    connection.on("error", (error) => {
      console.log(
        `MongoDb connection error, Please make sure MongoDb up and running 🤕. ${error}`
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong while connecting to Mongodb 🤕");
    console.log(error);
  }
};

export default connect;
