import axios from "axios";
import configDevops from "./config";

// para buscar canciones relacionadas
const platziMusicService = axios.create({
  baseURL: configDevops.apiUrl,
});

const trackService = {};

trackService.search = (q) => {
  const type = "track";

  return platziMusicService
    .get("/search/", {
      params: { q, type },
    })
    .then((res) => res.data);
};

trackService.getById = function (id) {
  return platziMusicService.get(`/tracks/${id}`).then((res) => res.data);
};

export default trackService;
