import axios from "axios";
const BASE_URL = "https://localhost:7006/api/";
const api = axios.create({
    baseURL:BASE_URL,
  //  headers: {"Authorization":"..."}
});
export default api;