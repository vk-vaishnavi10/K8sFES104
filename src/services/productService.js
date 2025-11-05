import axios from "axios";

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://backend:8080/back1/api/products"
    : "http://localhost:30081/back1/api/products";

// 🛒 Fetch products by category
export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data; // Return products array
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

// 🖼️ Get product image URL
export const getProductImageUrl = (imagePath) => {
  return `${API_BASE_URL}/images/${imagePath}`;
};
