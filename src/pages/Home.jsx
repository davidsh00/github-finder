import React from 'react'
import SearchUser from '../component/users/SearchUser'
import UserResults from '../component/users/UserResults'

function Home() {
if(localStorage.getItem('first')!=='no'){
window.location='/user/github'
localStorage.setItem('first','no')
}

  return (
    <>
      <SearchUser/>
      <UserResults/>
      </>
  )
}

export default Home