import axios from "axios";

const Instance = axios.create({

    baseURL: "http://f12e-112-202-254-35.ngrok.io",

    headers: { Accept: "application/json" },
})

export default Instance;
