import axios from "axios";

const Instance = axios.create({
    baseURL: "http://5da6-112-202-254-35.ngrok.io",
    headers: { Accept: "application/json" },
})
export default Instance;
