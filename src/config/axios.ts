import axios from "axios";
import * as process from "process";
import jsConvert from "js-convert-case";
import { caseConverter } from "@/utils/caseConverter";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "x-api-key": process.env.VUE_APP_API_KEY,
  },
});

axiosInstance.interceptors.response.use((response): any => {
  return caseConverter.serialize(response.data);
});

export { axiosInstance };
