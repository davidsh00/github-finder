function UserRepos({repo}) {
    const{name,html_url}=repo
  return (
    <div><a href={html_url} target="_blank" >{name}</a></div>
  )
}

export default UserRepos