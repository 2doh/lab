import axios from "axios";

export const getDummy = async () => {
  try {
    const res = await axios.get(`https://dummyjson.com/products`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
