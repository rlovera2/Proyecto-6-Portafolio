// import { NavLink } from "react-router-dom";
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
              {/* <NavLink className="nav-link active" to="/#sec_landing">
                Landing
              </NavLink> */}
              <a href="#sec_landing" className="nav-link active">
                LANDING
              </a>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/#sec_crud">
                Crud
              </NavLink> */}
              <a href="#sec_crud" className="nav-link active">
                CRUD
              </a>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/#sec_dashboard">
                Dashboard
              </NavLink> */}
              <a href="#sec_dashboard" className="nav-link active">
                DASHBOARD
              </a>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/#sec_restaurant">
                Restaurant
              </NavLink> */}
              <a href="#sec_restaurant" className="nav-link active">
                RESTAURANT
              </a>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/#sec_ecommerce">
                Ecommerce
              </NavLink> */}
              <a href="#sec_ecommerce" className="nav-link active">
                ECOMMERCE
              </a>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/#sec_portafolio">
                Ecommerce
              </NavLink> */}
              <a href="#sec_portafolio" className="nav-link active">
                PORTAFOLIO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
