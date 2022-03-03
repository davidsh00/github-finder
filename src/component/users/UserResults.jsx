import {useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import UserContex from "../../context/github/GithubContext";

function UserResults() {
const{loading,users}=useContext(UserContex)

  return loading?<Spinner/>:<div className="overflow-y-auto p-4 h-full w-full">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user)=>{
          return <UserItem key={user.id} user={user}/>
      })}
      </div>
  </div>;
}

export default UserResults;
