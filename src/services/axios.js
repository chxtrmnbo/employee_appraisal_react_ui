import axios from "axios";

const Instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: { Accept: "application/json" },
})
export default Instance;