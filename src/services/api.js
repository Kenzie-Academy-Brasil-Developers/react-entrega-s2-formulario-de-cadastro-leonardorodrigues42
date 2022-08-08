import axios from "axios";

const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 2500
})

export default api