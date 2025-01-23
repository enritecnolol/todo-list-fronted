import axios from "axios";

export const apiUrl =
  process.env.NEXT_PUBLIC_EXTERNAL_API_URL || "http://localhost:3000/api";

export const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
} as const;

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: DEFAULT_HEADERS,
});

export default apiClient;
