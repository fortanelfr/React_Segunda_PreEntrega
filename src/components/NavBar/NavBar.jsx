import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const imgLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzaScDDuOar1sKh2ZBsTg9yCmlj3dkf6cDQ&usqp=CAU";
  return (
    <header>
      <Link to={"/"}>
        <img className="imgLogo" src={imgLogo} alt="Logo Tienda Electronica" />
      </Link>
      <ul>
        <li>
          <NavLink to={`/categoria/2`}>Teclados</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/3`} >Mouses</NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  )
}

export default NavBar