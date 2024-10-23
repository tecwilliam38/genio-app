import axios from "axios";

const DEfaultURL = "http://192.168.1.65:3000";

const api = axios.create({
     baseURL: DEfaultURL,
});

export default api;
