import  PropTypes  from "prop-types";
import {Link} from 'react-router-dom'

function UserItem({ user: { avatar_url, login } }) {
  return (
    <div className="card flex p-2 shadow-lg justify-between hover:shadow-xl hover:bg-gray-500 transition-all ">
      <div className="card-avatar">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src={avatar_url} alt="avatar" />{" "}
        </div>
      </div>
      <div className="card-title grow text-center">
       
        <h2 className="font-bold mb-2">{login}</h2>
        <Link to={`/user/${login}`} className="text-sm opacity-40 hover:opacity-60">More Details..</Link>
      </div>
    </div>
  );
}
UserItem.propTypes={
  user : PropTypes.object.isRequired
}

export default UserItem;
