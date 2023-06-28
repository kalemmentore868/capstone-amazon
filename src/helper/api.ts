import axios from "axios";
import { QueryClient } from "react-query";

const apiClient = axios.create({
  baseURL: `https://18.222.121.148/api`,
});

const queryClient = new QueryClient();

export { apiClient, queryClient };
