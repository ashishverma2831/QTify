import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend.labs.crio.do";

// export const fetchTopAlbums = async () => {
//   try {
//     const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
//     return response.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const fetchNewAlbums = async () => {
//   try {
//     const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
//     return response.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const fetchSongs = async () => {
//   try {
//     const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
//     return response.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const fetchFilters = async () => {
//   try {
//     const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
//     return response.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

const get = async (path) => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}${path}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchTopAlbums = () => get("/albums/top");
export const fetchNewAlbums = () => get("/albums/new");
export const fetchSongs = () => get("/songs");
export const fetchFilters = () => get("/genres");