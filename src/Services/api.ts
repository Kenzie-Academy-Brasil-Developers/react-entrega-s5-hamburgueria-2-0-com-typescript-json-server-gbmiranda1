import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-product-api.herokuapp.com",
});
