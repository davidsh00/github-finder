
function Footer() {
  const year=new Date().getFullYear()
  return (
    <footer className="bg-gray-800 shadow-lg w-full p-10 text-gray-300 text-base text-center">
      <p>Copyright &copy; {year} All rights reserved.</p>
    </footer>
  )
}

export default Footer