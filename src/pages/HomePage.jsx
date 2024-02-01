import portafolio_d from "../img/Portafolio_digital.jpg";
import insigniaDevFullstack from "../img/insignia_dev_fullstack.png";

// import link from "../img/link.png";
// import landing from "../img/landing.jpg";
// import crud from "../img/crud.jpg";
// import dashboard from "../img/dashboard.jpg";
// import restaurant from "../img/restaurant.png";
// import ecommerce from "../img/ecommerce.jpg";
import { consumirApi } from "../components/llamadaAPI";
import Portafolio from "./Portafolio";
import credly2 from "../img/credly2.png";

const HomePage = () => {
  return (
    <>
      {consumirApi}
      <br />
      <main className="contenedor">
        <div>
          <h2>Desarrollo Web</h2>
          <br />
          <img src={credly2} alt="Credly" />
          <a
            href="https://www.credly.com/earner/earned/badge/837642cf-31b5-4780-a619-e2a4348d86eb"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insigniaDevFullstack} />
          </a>
        </div>

        <img src={portafolio_d} className="imagen_principal" />

        <hr className="linea_divisoria" />

        <article className=" texto_Principal">
          &nbsp;&nbsp;Soy un profesional en el área de Informática teniendo como
          destreza principal el manejo eficiente de la información mediante el
          uso del computador haciendo uso tecnologías de software.
          <br />
          <br />
          &nbsp;&nbsp;Con el pasar del tiempo el desarrollo web se a tornado
          esencial y muy determinante para acceder a un mercado globalizado y
          claramente segmentado, donde existen alternativas y productos para
          todos los presupuestos en este sentido la web se a vuelto cada ves mas
          cambiante y madura a continuación alguna de las herramientas que
          podrás encontrar en un sitio web.
        </article>
        <hr className="linea_divisoria" />
        <Portafolio />
      </main>
    </>
  );
};

export default HomePage;
