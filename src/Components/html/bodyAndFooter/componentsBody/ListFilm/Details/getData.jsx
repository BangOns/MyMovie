import axios from "axios";
import { useQuery } from "react-query";

export const response1 = (id) => {
  return useQuery(["getData", id], () => {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=df3bdd5a174cac305c5d71d51733fff7`
    );
  });
};
export const responseTv = (id) => {
  return useQuery(["getData", id], () => {
    return axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=df3bdd5a174cac305c5d71d51733fff7&language=en-US`
    );
  });
};

export const response2 = (id) => {
  const dataId = id?.data.imdb_id;
  return useQuery(
    ["getData2", dataId],
    () => {
      return axios.get(`https://www.omdbapi.com/?apikey=b1b4d324&i=${dataId}`);
    },
    {
      enabled: !!dataId,
    }
  );
};
