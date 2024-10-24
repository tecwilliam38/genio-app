import axios from "axios";

const DEfaultURL = "http://192.168.1.67:3000";
// const DEfaultURL = "http://192.168.1.65:3000";
// https://genio-api-william-ferreira-da-silvas-projects.vercel.app/
// baseURL: "http://192.168.1.66:3000",
const api = axios.create({
     baseURL:DEfaultURL,
});

export default api;
