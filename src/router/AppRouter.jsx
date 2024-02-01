import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "../components/NavBar";
//import rPortafolio from "../pages/Portafolio";
const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          {/* <NavBar /> */}
          <Routes>
            <Route path="/landing" element={<rPortafolio />} />
            {/* <Route path="/menu" element={<Menu />} /> */}
            {/* <Route path="/reservaciones" element={<Reservaciones />} /> */}
            {/* <Route path="/contactenos" element={<Contactenos />} /> */}

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
