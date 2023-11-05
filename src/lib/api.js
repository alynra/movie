import axios from "axios";

const apiKey = "b3f18d6cb4b677122743dcaefbbcfdc9";
const baseUrl = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/original";

const apiAxios = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

export default apiAxios;
