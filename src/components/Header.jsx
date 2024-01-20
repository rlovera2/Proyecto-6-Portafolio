import PropTypes from "prop-types";
import fondo1 from "../img/fondo1.jpg";
import linked from "../img/LinkedIn_Logo.png";
import indeed from "../img/indeed-share-image.png";
import github from "../img/github-logo-git-hub.jpg";

const Header = ({ title }) => {
  return (
    <header className="row col contenedor_header">
      <div className="texto_header">
        <br />
        <h2>{title}</h2>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/roberto-lovera-desarrollador-web/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linked} />
        </a>{" "}
        <a
          href="https://profile.indeed.com/p/robertol-aey6jec"
          target="_blank"
          rel="noreferrer"
        >
          <img src={indeed} />
        </a>{" "}
        <a
          href="https://github.com/rlovera2?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} />
        </a>
        <br />
        <br />
      </div>
      <div>
        <img src={fondo1} height="88%" width="100%" />
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
