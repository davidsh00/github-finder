import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});
export const searchUsers = async (search) => {
  const response = await github.get(`/search/users?q=${search}`);
  return response.data.items;
};

export const getUserAndRepos = async (user) => {
  const responseUser = await github.get(`/users/${user}`);
  if (responseUser.status == 404) {
    window.location = "/notfound";
  } else {
    const responseRepos = await github.get(`/users/${user}/repos`);

    return { dataUser: responseUser.data, dataRepos: responseRepos.data };
  }
};
