import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home/page";
import HeaderElem from "./Components/Layout/HeaderElem";
import HeaderBottom from "./Components/Layout/HeaderBottom";
import FooterElem from "./Components/Layout/FooterElem";

function App() {
  return (
    <>
      <HeaderElem />
      <Header />
      <HeaderBottom/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <FooterElem/>
    </>
  );
}

export default App;
