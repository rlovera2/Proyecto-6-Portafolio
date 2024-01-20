import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//import NavBar from "../components/NavBar";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <div className="container">
          {/* <HomePage /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
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
