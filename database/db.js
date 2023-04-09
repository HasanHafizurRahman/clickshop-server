import mongoose from "mongoose";

export const Connection = async () => {
  const URL =
    "mongodb+srv://hasanshanto922:hasanshanto922@clickshop.p6fzfwb.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connection successfully established to MongoDB");
  } catch (error) {
    console.log("Error while connecting ", error.message);
  }
};

export default Connection;
