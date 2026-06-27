import Axios from "axios";
console.log(import.meta.env);
const axios = Axios.create({

  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  
});

export default axios;