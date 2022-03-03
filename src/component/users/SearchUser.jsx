import {useState,useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/Alert/AlertContext'

function SearchUser() {
    const[text,setText]=useState("")
    const {users,searchUsers,clearUsers}=useContext(GithubContext)
    const {setAlert}=useContext(AlertContext)
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();

      if(text===""){
        setAlert('type something...','error')
      }else{
       searchUsers(text)
      setText("")
      }
    }
    const handleClear=()=>{
      clearUsers()
    }
  return (
    <div className="container p-4 flex sm:flex-col items-center gap-x-8 gap-y-4 sm:items-start">
      <form onSubmit={handleSubmit}>
        <div className="relative rounded overflow-hidden">
          <input type="text" className="w-full py-2 px-2 border-0 pr-16 text-black" value={text} onChange={handleChange} placeholder="search"/>
          <button type="submit " className="absolute right-0 bg-gray-700 px-4 py-2">Go</button>
        </div>
      </form>
      {users.length>0 &&(<h4 className="bg-gray-800 rounded px-4 py-2 cursor-pointer hover:bg-gray-700" onClick={handleClear}>Clear</h4>)}
    </div>
  );
}

export default SearchUser;
