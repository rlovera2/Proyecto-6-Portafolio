import PropTypes from "prop-types";
import fondo1 from "../img/fondo1.jpg";
import linked_azul1 from "../img/linkedin-azul1.png";
import linked_azul2 from "../img/linkedin-azul2.png";
import indeed_azul1 from "../img/indeed-azul1.png";
import indeed_azul2 from "../img/indeed-azul2.png";
import github_azul1 from "../img/github-azul1.png";
import github_azul2 from "../img/github-azul2.png";
import credly2 from "../img/credly2.png";
import credly2_borde_blanco from "../img/credly2_borde_blanco.png";

//import AppRouter from "../router/AppRouter";

const Header = ({ title }) => {
  //************CAMBIANDO IMAGEN PRINCIPAL CUANDO TIENE EL FOCO ***************/
  const cambiarImagenOn = (id, img) => {
    document.getElementById(id).src = img;
  };

  //************CAMBIANDO IMAGEN PRINCIPAL CUANDO PIERDE EL FOCO ***************/
  const cambiarImagenOff = (id, img) => {
    document.getElementById(id).src = img;
  };

  return (
    <header className="contenedor_header">
      <div className="texto_header">
        <br />
        <h2>{title}</h2>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/roberto-lovera-desarrollador-web/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linked_azul1}
            alt="Linked"
            id="img_Linked"
            onMouseOver={() => cambiarImagenOn("img_Linked", linked_azul2)}
            onMouseOut={() => cambiarImagenOff("img_Linked", linked_azul1)}
          />
        </a>{" "}
        <a
          href="https://profile.indeed.com/p/robertol-aey6jec"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={indeed_azul1}
            alt="Indeed"
            id="img_Indeed"
            onMouseOver={() => cambiarImagenOn("img_Indeed", indeed_azul2)}
            onMouseOut={() => cambiarImagenOff("img_Indeed", indeed_azul1)}
          />
        </a>{" "}
        <a
          href="https://github.com/rlovera2?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={github_azul1}
            alt="Github"
            id="img_Github"
            onMouseOver={() => cambiarImagenOn("img_Github", github_azul2)}
            onMouseOut={() => cambiarImagenOff("img_Github", github_azul1)}
          />
        </a>{" "}
        <a
          href="https://www.credly.com/users/roberto-lovera/badges"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={credly2}
            alt="Credly"
            id="img_Credly"
            onMouseOver={() =>
              cambiarImagenOn("img_Credly", credly2_borde_blanco)
            }
            onMouseOut={() => cambiarImagenOff("img_Credly", credly2)}
          />
        </a>
        <br />
        <br />
      </div>
      {/* <AppRouter /> */}
      <div>
        {/* <img src={fondo1} height="88%" width="101%" /> */}
        <img src={fondo1} className="imagen_binaria" />
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
