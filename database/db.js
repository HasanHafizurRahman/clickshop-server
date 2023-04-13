import mongoose from "mongoose";
// import { ServerApiVersion } from "mongodb";

export const Connection = async () => {
  const URL =
    "mongodb+srv://hasanshanto922:hasanshanto922@clickshop.p6fzfwb.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, {
      serverApi: "1",
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
