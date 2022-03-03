import {BrowserRouter as Router} from 'react-router-dom'
import Footer from "./component/layout/Footer";
import Main from "./component/layout/Main";
import Navbar from "./component/layout/Navbar";

function App() {
  return <Router>
    <div className="bg-gray-600 w-full h-screen flex flex-col justify-between items-start text-white overflow-hidden">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
    </Router>
  
}

export default App;
