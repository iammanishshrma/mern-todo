import axios from "axios";

const baseURL =
    process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_PREFIX;

const apiInstance = axios.create({ baseURL });

export { apiInstance };
