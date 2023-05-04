import axios from "axios";
import { useQuery } from "react-query";

export let NamaBioskopList = [
  "Cinepolis, Pejaten Village",
  "CGV, AEON MALL JGC",
  "Cinema XXI, MALL CIJANTUNG",
  "Cinepolis, Tamini Square",
  "CGV, Buaran Plaza",
  "Cinema XXI, Kuningan City",
  "Cinepolis, Kalibata City Square",
  "Cinema XXI, Cityplaza Klender",
  "CGV Central Park",
];
export const response1 = (id) => {
  return useQuery(
    ["getData", id],
    () => {
      return axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=df3bdd5a174cac305c5d71d51733fff7`
      );
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
export const responseTv = (id) => {
  return useQuery(
    ["getData", id],
    () => {
      return axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=df3bdd5a174cac305c5d71d51733fff7&language=en-US`
      );
    },
    {
      refetchOnWindowFocus: false,
    }
  );
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
      refetchOnWindowFocus: false,
    }
  );
};

export const responseOnAir = () => {
  return useQuery(
    ["data-onAir"],
    () => {
      return ~~(Math.random() * NamaBioskopList.length);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
