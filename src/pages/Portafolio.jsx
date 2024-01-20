import link from "../img/link.png";
import landing from "../img/landing.jpg";
import crud from "../img/crud.jpg";
import dashboard from "../img/dashboard.jpg";
import restaurant from "../img/restaurant.png";
import ecommerce from "../img/ecommerce.jpg";
import github2 from "../img/github-logo.png";

const Portafolio = () => {
  return (
    <>
      <article className="contenedor">
        {/* ************************* LANDING *********************************** */}

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
        <br />

        {/* ************************* CRUD *********************************** */}

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
        <br />

        {/* ************************* DASHBOARD *********************************** */}

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
            <p className="card-text">
              <img src={link} alt="Imagen link" /> &nbsp;
              <a
                href="https://rlovera2.github.io/proyecto3-Dashboard-App/"
                target="_blank"
                rel="noreferrer"
              >
                https://rlovera2.github.io/proyecto3-Dashboard-App/
              </a>
            </p>
          </div>
        </div>
        <br />

        {/* ************************* RESTAURANT *********************************** */}

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
            <p className="card-text">
              <img src={link} alt="Imagen link" /> &nbsp;
              <a
                href="https://proyecto-4-restaurant-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://proyecto-4-restaurant-app.netlify.app/
              </a>
            </p>
          </div>
        </div>
        <br />
        {/* ************************* ECOMMERCE *********************************** */}

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
              Una página donde se puede realizar compras en línea, podras ver el
              detalle una lista de productos y el detalle de producto en
              específico, adicionalmente podras registarte y agregar o eliminar
              productos al carrito de compras.
            </p>
            <p className="card-text">
              <img src={link} alt="Imagen link" /> &nbsp;
              <a
                href="https://proyecto-5-ap-de-comercio-electronico.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://proyecto-5-ap-de-comercio-electronico.netlify.app/
              </a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Portafolio;
