import axios from "axios";
import { useQuery } from "react-query";

export let NamaBioskopList = [
  ["https://maps.app.goo.gl/BxfiKPnUVfRureis5", "Cinepolis, Pejaten Village"],
  ["https://maps.app.goo.gl/91WKX678iM4u6fA68", "CGV, AEON MALL JGC"],
  [
    "https://maps.app.goo.gl/uvQ7VTyJ1vDNwzH8A",
    "Cinema XXI, MALL GRAHA CIJANTUNG",
  ],
  ["https://maps.app.goo.gl/xZuPob129hafPhng6", "Cinepolis, Tamini Square"],
  ["https://maps.app.goo.gl/FnzhLp2NcFCLN6r87", "CGV, Buaran Plaza"],
  ["https://maps.app.goo.gl/ha3suuowj1NFn5fq7", "Cinema XXI, Kuningan City"],
  [
    "https://maps.app.goo.gl/CKaSNuRWfhLotbYy7",
    "Cinepolis, Kalibata City Square",
  ],
  [
    "https://maps.app.goo.gl/q2iKkEAjbtGt6koA8",
    "Cinema XXI, Cityplaza Klender",
  ],
  ["https://maps.app.goo.gl/h2xxLpShuSzTsS9Z8", "CGV, Central Park"],
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
