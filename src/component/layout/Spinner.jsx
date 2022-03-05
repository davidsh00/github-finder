import spinner from '../../assets/loading-min.gif'

function Spinner() {
  return (
    <div className='w-[100px] h-[100px] m-auto'><img src={spinner} alt="loading..." className='w-full h-full'/></div>
  )
}

export default Spinner