import axios from "axios";

export const github_api = axios.create({
  baseURL: "https://api.github.com/search/",
});
