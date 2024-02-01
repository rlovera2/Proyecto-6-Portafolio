import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

//import AppRouter from "./router/AppRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const App = () => {
  return (
    <>
      <Header title="&nbsp;&nbsp;Portafolio T.S.U. Roberto Lovera" />

      {/* <AppRouter /> */}

      <HomePage />

      <Footer />
    </>
  );
};

export default App;
