import axios from "axios";

export const local_api = axios.create({
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  baseURL: "http://localhost:3000/api/",
  responseType: "json",
});
