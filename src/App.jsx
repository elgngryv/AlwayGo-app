import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./Pages/Home/page";
import HeaderElem from "./components/layout/header-elem";
import HeaderBottom from "./components/layout/header-bottom";
import FooterElem from "./components/layout/footer-elem";
import SignUpPage from "./Pages/SignUpPage/page";
import SignInPage from "./Pages/SignInPage/page";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage/page";
import VerifyEmailPage from "./Pages/VerifyEmailPage/page";
import CreateNewPasswordPage from "./Pages/CreateNewPasswordPage/page";
import ProductDetail from "./Pages/ProductDetail/page";

function App() {
  return (
    <>
      <HeaderElem />
      <Header />
      <HeaderBottom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />
        <Route path="/VerifyEmailPage" element={<VerifyEmailPage />} />
        <Route path="/CreateNewPasswordPage" element={<CreateNewPasswordPage />} />
        <Route path="/product-details/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
      <FooterElem />
    </>
  );
}

export default App;
