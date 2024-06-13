import Axios from "axios";

const createAxios = Axios.create({
    baseURL: "https://localhost:7197/api"
})

export default createAxios;