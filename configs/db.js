import { mongoose } from "../packages.js";

export const connectDatabase = async () => {
  let finalURI;
  if (process.env.ENVIROMENT === "production") {
    finalURI = process.env.MONGO_URI_PROD;
  } else {
    finalURI = process.env.MONGO_URI_DEV;
  }

  try {
    const connection = await mongoose.connect(finalURI);
    console.log(
      `MongoDB Connected: ${connection.connection.host} To Database: ${connection.connection.db.databaseName} In ${process.env.ENVIROMENT} Mode`
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
