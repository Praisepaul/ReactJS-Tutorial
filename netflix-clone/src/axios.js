import axios from "axios";
import { baseUrl } from "./Components/Constants/constants";

const Instance = axios.create({
    baseURL: baseUrl,
});

export default Instance