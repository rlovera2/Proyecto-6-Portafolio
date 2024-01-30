import link from "../img/link.png";
import landing from "../img/landing.png";
import crud from "../img/crud.jpg";
import dashboard from "../img/dashboard.jpg";
import restaurant from "../img/restaurant.png";
import ecommerce from "../img/ecommerce.jpg";
import github2 from "../img/github-logo.png";
import html5 from "../img/html5.png";
import css3 from "../img/css3.png";
import js from "../img/js.png";
import nodejs from "../img/nodejs_1.png";
import reactjs from "../img/reactjs.png";
import express from "../img/express.png";
import firebase from "../img/firebase-1.png";
import mongodb from "../img/mongodb.png";

const Portafolio = () => {
  return (
    <>
      <article className="contenedor">
        {/* ************************* LANDING *********************************** */}
        <a name="landing">
          <div className="card contenedor_img_portafolio">
            <a
              href="https://rlovera2.github.io/proyecto1-Landing-de-Venta/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={landing}
                className="card-img-top imagen_portafolio"
                alt="Landing Page"
              />
            </a>

            <div className="card-body fondo_card">
              <h5 className="card-title">Landing Page</h5>
              <p className="card-text">
                Una página sencilla para promocionar un producto en línea.
              </p>
              <b>Teconlogías usadas:</b>
              <br />
              <br />
              <img src={html5} alt="HTML5" />
              <img src={css3} alt="CSS3" />
              <img src={js} alt="JS" />
              <br />
              <br />
              <p className="card-text">
                <table>
                  <tr>
                    <td>
                      <img src={link} alt="Imagen link" /> &nbsp;
                    </td>
                    <td>
                      <a
                        href="https://rlovera2.github.io/proyecto1-Landing-de-Venta/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://rlovera2.github.io/proyecto1-Landing-de-Venta/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={github2} alt="Imagen github" /> &nbsp;
                    </td>
                    <td>
                      <a
                        href="https://github.com/rlovera2/proyecto1-Landing-de-Venta"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://github.com/rlovera2/proyecto1-Landing-de-Venta
                      </a>
                    </td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
        </a>
        {/* ************************* CRUD *********************************** */}

        <a name="crud">
          <div className="card contenedor_img_portafolio">
            <a
              href="https://rlovera2.github.io/proyecto2-CRUD.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={crud}
                className="card-img-top imagen_portafolio"
                alt="CRUD Page"
              />
            </a>

            <div className="card-body fondo_card">
              <h5 className="card-title">CRUD App</h5>
              <p className="card-text">
                Una página donde puedes crear, leer, actualizar y eliminar datos
                almacenados de forma local. <br /> [ Create - Read - Update -
                Delete / <br />
                CRUD ].
              </p>
              <b>Teconlogías usadas:</b>
              <br />
              <br />
              <img src={html5} alt="HTML5" />
              <img src={css3} alt="CSS3" />
              <img src={js} alt="JS" />
              <br />
              <br />

              <p className="card-text">
                <table>
                  <tr>
                    <td>
                      <img src={link} alt="Imagen link" /> &nbsp;
                    </td>
                    <td>
                      <a
                        href="https://rlovera2.github.io/proyecto2-CRUD.github.io/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://rlovera2.github.io/proyecto2-CRUD.github.io/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={github2} alt="Imagen github" /> &nbsp;
                    </td>
                    <td>
                      <a
                        href="https://github.com/rlovera2/proyecto2-CRUD.github.io"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://github.com/rlovera2/proyecto2-CRUD.github.io
                      </a>
                    </td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
        </a>
        {/* ************************* DASHBOARD *********************************** */}
        <a name="dashboard">
          <div className="card contenedor_img_portafolio">
            <a
              href="https://rlovera2.github.io/proyecto3-Dashboard-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={dashboard}
                className="card-img-top imagen_portafolio"
                alt="Dashboard Page"
              />
            </a>

            <div className="card-body fondo_card">
              <h5 className="card-title">Dashboard App</h5>
              <p className="card-text">
                Una página donde se puede generar un gráfico basado en una tabla
                de datos definida descargados de un API.
              </p>
              <b>Teconlogías usadas:</b>
              <br />
              <br />
              <img src={html5} alt="HTML5" />
              <img src={css3} alt="CSS3" />
              <img src={js} alt="JS" />
              <img src={nodejs} alt="NodeJS" />
              <br />
              <br />

              <p className="card-text">
                <table>
                  <tr>
                    <td>
                      <img src={link} alt="Imagen link" /> &nbsp;
                    </td>
                    <td>
                      <a
                        href="https://rlovera2.github.io/proyecto3-Dashboard-App/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://rlovera2.github.io/proyecto3-Dashboard-App/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={github2} alt="Imagen github" /> &nbsp;
                    </td>
                    <td>
                      <a
                        href="https://github.com/rlovera2/proyecto3-Dashboard-App"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://github.com/rlovera2/proyecto3-Dashboard-App
                      </a>
                    </td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
        </a>
        {/* ************************* RESTAURANT *********************************** */}
        <a name="restaurant">
          <div className="card contenedor_img_portafolio">
            <a
              href="https://proyecto-4-restaurant-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={restaurant}
                className="card-img-top imagen_portafolio"
                alt="Restaurant-App Page"
              />
            </a>

            <div className="card-body fondo_card">
              <h5 className="card-title">Restaurant App</h5>
              <p className="card-text">
                Una página donde se puede ver el variado y rico menú, tambien
                podras crear, leer, modificar y eliminar reservaciones en línea
                muy bien detallada, adicionalmente podras crear un registro para
                que consultes dudas y te puedan contactar en el momento más
                oportuno.
              </p>

              <b>Teconlogías usadas:</b>
              <br />
              <br />
              <img src={html5} alt="HTML5" />
              <img src={css3} alt="CSS3" />
              <img src={js} alt="JS" />
              <img src={nodejs} alt="NodeJS" />
              <img src={reactjs} alt="ReactJS" />
              <img src={firebase} alt="Firebase" />

              <br />

              <p className="card-text">
                <table>
                  <tr>
                    <td>
                      <img src={link} alt="Imagen link" /> &nbsp;
                    </td>
                    <td>
                      <a
                        href="https://proyecto-4-restaurant-app.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://proyecto-4-restaurant-app.netlify.app/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={github2} alt="Imagen github" /> &nbsp;
                    </td>
                    <td>
                      <a
                        href="https://github.com/rlovera2/proyecto-4-Restaurant-App"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://github.com/rlovera2/proyecto-4-Restaurant-App
                      </a>
                    </td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
        </a>
        {/* ************************* ECOMMERCE *********************************** */}
        <a name="ecommerce">
          <div className="card contenedor_img_portafolio">
            <a
              href="https://proyecto-5-ap-de-comercio-electronico.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ecommerce}
                className="card-img-top imagen_portafolio"
                alt="Ecommerce-App Page"
              />
            </a>

            <div className="card-body fondo_card">
              <h5 className="card-title">Ecommerce App</h5>
              <p className="card-text">
                Una página donde se puede realizar compras en línea, podras ver
                el detalle una lista de productos y el detalle de producto en
                específico, adicionalmente podras registarte y agregar o
                eliminar productos al carrito de compras.
              </p>
              <b>Teconlogías usadas:</b>
              <br />
              <br />
              <img src={html5} alt="HTML5" />
              <img src={css3} alt="CSS3" />
              <img src={js} alt="JS" />
              <img src={nodejs} alt="NodeJS" />
              <img src={reactjs} alt="ReactJS" />
              <img src={express} alt="Express" />
              &nbsp;
              <img src={mongodb} alt="mongoDB" />
              <br />
              <br />
              <p className="card-text">
                <table>
                  <tr>
                    <td>
                      <img src={link} alt="Imagen link" /> &nbsp;
                    </td>
                    <td>
                      <a
                        href="https://proyecto-5-ap-de-comercio-electronico.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://proyecto-5-ap-de-comercio-electronico.netlify.app/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={github2} alt="Imagen github" /> &nbsp;
                    </td>
                    <td>
                      <a
                        href="https://github.com/rlovera2/proyecto-5-Aplicacion-de-Comercio-Electronico-FrontEnd"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://github.com/rlovera2/proyecto-5-Aplicacion-de-Comercio-Electronico-FrontEnd
                      </a>
                    </td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
        </a>
      </article>
    </>
  );
};

export default Portafolio;
