import { NavLink } from "react-router-dom";
//import imgportafolio from "../img/portafolio.png";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg color_fondo_menu"
      data-bs-theme="dark"
    >
      <div className="container" height="auto" width="500px">
        <a className="navbar-brand" href="/">
          {/* <img src={imgportafolio} /> */}
          {/* <font color="#FFFFFF">Portafolio</font> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/landing">
                Landing
              </NavLink>
              {/* <a href="#landing" className="nav-link active">
                Landing
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">
                Crud
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reservaciones">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactenos">
                Restaurant
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactenos">
                Ecommerce
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
