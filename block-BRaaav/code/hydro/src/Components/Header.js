
function Header(){
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between ">
        <span className="flex-auto ">
          <a href="#">Hydro</a>
        </span>
        <nav className="flex-auto ">
          <ul className="flex justify-around">
            <li>
              <a href="#">Home</a>
              </li>
            <li>
              <a href="#">About</a>
              </li>
            <li>
              <a href="#">Blog</a>
              </li>
            <li>
              <a href="#">Our Work</a>
              </li>
            <li>
              <a href="#">Contacts</a>
              </li>
          </ul>
        </nav>
        <nav className="flex-auto "> 
          <ul className="flex justify-around">
            <li>
              <a href="#">
                <i class="fab fa-facebook-square"></i>
              </a>
              </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              </li>
            <li>
              <a href="#">
                <button className="border-0 rounded-2xl bg-red-600 text-white px-6 py-2">Sign in/ Join</button>
              </a>
              </li>
          </ul>
        </nav>
      </div>      
    </header>
  )
    
}

export default Header;