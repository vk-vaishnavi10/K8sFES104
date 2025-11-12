import axios from "axios";

const API_BASE_URL = "http://ec2-44-213-63-140.compute-1.amazonaws.com:30083/back1/api/products";

export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductImageUrl = (imagePath) => {
  return `${API_BASE_URL}/images/${imagePath}`;
};
