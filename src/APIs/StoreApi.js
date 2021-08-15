import axios from "axios";

export default axios.create({
  baseURL: "https://my-sneaker-api.herokuapp.com/sneakers",
});