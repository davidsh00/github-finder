import{Route,Routes}from 'react-router-dom'
import {GithubProvider} from '../../context/github/GithubContext'
import { AlertProvider } from '../../context/Alert/AlertContext'
import About from '../../pages/About'
import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound'
import User from '../users/User'
import Alert from './Alert'
function Main() {
  return (
    <AlertProvider>
    <main className='w-full overflow-hidden'>
      <GithubProvider>
      <Alert/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/user/:login" element={<User/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </GithubProvider>
    </main>
    </AlertProvider>
  )
}

export default Main