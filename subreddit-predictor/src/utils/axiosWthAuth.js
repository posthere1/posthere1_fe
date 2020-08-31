import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseUrl: "https://redditposthere.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};
