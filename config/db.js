const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`Connected to: ${db}`);
  } catch (error) {
    console.log(error);
    //   Fail
    process.exit(1);
  }
};

module.exports = connectDB;
