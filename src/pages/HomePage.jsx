import portafolio_d from "../img/Portafolio_digital.jpg";
// import link from "../img/link.png";
// import landing from "../img/landing.jpg";
// import crud from "../img/crud.jpg";
// import dashboard from "../img/dashboard.jpg";
// import restaurant from "../img/restaurant.png";
// import ecommerce from "../img/ecommerce.jpg";
// import { consumirApi } from "../components/llamadaAPI";
import Portafolio from "./Portafolio";

const HomePage = () => {
  return (
    <>
      {/* {consumirApi} */}
      <br />
      <main className="contenedor">
        <h2>Desarrollo Web</h2>

        <img src={portafolio_d} className="imagen_principal" />

        <hr className="linea_divisoria" />

        <article className="card texto_Principal">
          &nbsp;&nbsp;Soy un profecional en el área de Informática teniendo como
          destreza principal el manejo eficiente de la información mediante el
          uso del computador haciando uso tecnologias de software.
          <br />
          Con el pasar del tiempo el desarrollo web se a tornado esencial y muy
          determinante para acceder a un mercado globalizado y claramente
          segmentado, donde existen alternativas y productos para todos los
          presupuestos en este sentido la web se a vuelto cada ves mas cambiante
          y madura a continuacion alguna de las herramientas que podras
          encontrar en un sitio web.
        </article>
        <Portafolio />
      </main>
    </>
  );
};

export default HomePage;
