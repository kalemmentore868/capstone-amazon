import axios from "axios";
const https = require("https");
import { QueryClient } from "react-query";

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}/`,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const queryClient = new QueryClient();

export { apiClient, queryClient };
