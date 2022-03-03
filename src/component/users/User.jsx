import { useEffect, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { Link, useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import UserRepos from "./UserRepos";

function User() {
  const params = useParams();
  const { user, getUser, loading, getRepos, repos } = useContext(GithubContext);
  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);
  const {
    avatar_url,
    name,
    login,
    bio,
    followers,
    html_url,
    following,
    public_repos,
  } = user;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="h-full overflow-auto">
      <div className="p-4 max-w-[1280px] mx-auto">
        <Link to="/">
          <button className="hover:bg-white hover:text-black p-2 border border-gray-500">
            Back to Search
          </button>
        </Link>
      </div>

      <div className="p-4 mx-auto max-w-[1280px] flex gap-4 flex-col md:flex-row ">
        <div className=" mx-auto md:mx-0 rounded-full md:rounded-md overflow-hidden relative w-96 h-96 shrink-0 group">
          <img src={avatar_url} alt="user-profile" className="w-full h-full" />
          <div className="profile-content top-0 bottom-0 p-4 md:group-hover:opacity-100 opacity-0 transition-all bg-black left-0 right-0 absolute bg-opacity-50 flex justify-end flex-col">
            <h2>{name}</h2>
            <h4>{login}</h4>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-bold">{login}</h2>
            <h4 className="opacity-80 text-[.7rem]">{name}</h4>
          </div>

          <p>{bio}</p>
          <a href={html_url} rel="noreferrer" target="_blank">
            <button className="border p-2 text-sm active:opacity-50 transition-all rounded  hover:bg-white hover:text-black">
              Visit Github Page
            </button>
          </a>
          <ul className="stats ">
            <li className="">
              <div>Followers</div>
              <div>{followers}</div>
            </li>
            <li className="">
              <div>Following</div>
              <div>{following}</div>
            </li>
            <li className="">
              <div>Public Repos</div>
              <div>{public_repos}</div>
            </li>
          </ul>
          <div className="border border-gray-400 p-2">
            <div className="font-bold mb-2">Last Repos</div>
            <div className="stats hovereffect flex-wrap gap-2">
              {repos.length > 0 &&
                repos.map((item) => <UserRepos repo={item} key={item.id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
