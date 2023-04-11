import axios from 'axios';
const API_URL = 'https://prettyjanesalon.onrender.com/api/products/';

const uploadImage = async (imageInfo) => {
  const response = await axios.post(API_URL + '/upload', imageInfo);
  return response.data;
};

const loadImage = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

const deleteProduct = async (productId) => {
  const response = await axios.delete(API_URL + productId)
  return response.data
}


const productService = {
    uploadImage,
    loadImage,
    deleteProduct
}


export default productService
