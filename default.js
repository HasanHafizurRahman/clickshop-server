import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData = () => {
  Product.insertMany(products);
  try {
  } catch (error) {
    console.log("Error loading data from server", error.message);
  }
};
