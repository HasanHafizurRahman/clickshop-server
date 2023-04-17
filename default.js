// import { products } from "./constants/product.js";
import { products } from "./constants/product.js";
import Product from "./model/productSchema.js";

const DefaultData = async () => {
  // console.log(products);
  try {
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data inserted successfully");
  } catch (error) {
    console.log("Error loading data from server", error.message);
  }
};

export default DefaultData;
