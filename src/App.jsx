import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
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
import ProductFilters from "./components/product-filters";
import AccountPage from "./Pages/Account/page";
import PersonalData from "./Pages/Account/personal-data/page";
import MyCards from "./Pages/Account/myCards/page";
import Wishlist from "./Pages/Account/wishlist/page";
import WaitingList from "./Pages/Account/waitingList/page";
import MyOffers from "./Pages/Account/myOffers/page";
import ViewedProducts from "./Pages/Account/viewedProd/page";
import MyCoupons from "./Pages/Account/myCoupons/page";
import SellerMessages from "./Pages/Account/sellerMessages/page";
import Cart from "./Components/cart";

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
        <Route path="/product-filters" element={<ProductFilters />} />
        <Route path="/cart" element={<Cart />} />


        <Route path="/account" element={<AccountPage />}>
          <Route path="personal-data" element={<PersonalData />} />
          <Route path="my-cards" element={<MyCards />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="waiting-list" element={<WaitingList />} />
          <Route path="my-offers" element={<MyOffers />} />
          <Route path="viewed-products" element={<ViewedProducts />} />
          <Route path="my-coupons" element={<MyCoupons />} />
          <Route path="seller-messages" element={<SellerMessages />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <FooterElem />
    </>
  );
}

export default App;
