import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export function GithubProvider({ children }) {
  const initialState = {
    users: [],
    user:{},
    repos:[],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (search) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?q=${search}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };


  const getUser = async (user) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${user}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if(response.status==404){window.location='/notfound'}else{
    const data= await response.json();
    dispatch({
      type: "GET_USER",
      payload: data,
    });

  }
  };
  const getRepos = async (user) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${user}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data= await response.json();
    dispatch({
      type: "GET_REPOS",
      payload:data,
    });
  };
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user:state.user,
        repos:state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext;
