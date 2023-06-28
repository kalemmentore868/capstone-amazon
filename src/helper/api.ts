import axios from "axios";
import { QueryClient } from "react-query";

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
});

const queryClient = new QueryClient();

export { apiClient, queryClient };
