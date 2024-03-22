import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "../components/NavBar";
// import Portafolio from "../pages/Portafolio";

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            {/* <Route path="/" element={<Portafolio />} /> */}
            {/* <Route path="/#sec_landing" element={<Landing />} /> */}
            {/* <Route path="/#sec_crud" element={<Crud />} /> */}
            {/* <Route path="/#sec_dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/#sec_restaurant" element={<Restaurant />} /> */}
            {/* <Route path="/#sec_ecommerce" element={<Ecommerce />} /> */}
            {/* <Route path="/#sec_portafolio" element={<Portafolio />} /> */}

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
