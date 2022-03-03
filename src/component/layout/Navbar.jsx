import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-lg w-full p-4 text-gray-300 text-base">
        <div className="container flex justify-between m-auto">
        <div className="">
        <FaGithub size={28} className={"mr-2 inline"}/>
        <span className="align-middle font-bold">Github-Finder</span>
        </div>

        <div className='flex gap-3 items-center text-white'>
        <Link to="/" className='btn   px-2 py-1 rounded hover:bg-gray-600'>Home</Link>
        <Link to="/about" className='btn   px-2 py-1 rounded hover:bg-gray-600'>About</Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar