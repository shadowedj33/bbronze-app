import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./reducers/store.js";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./components/Layout.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import axios from "axios";
import ProfilePage from "./pages/ProfilePage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import ReviewsFormPage from "./pages/ReviewsFormPage.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import BookingFormPage from "./pages/BookingFormPage.jsx";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account" element={<ProfilePage />} />
            <Route path="/account/reviews" element={<ReviewsPage />} />
            <Route path="/account/reviews/new" element={<ReviewsFormPage />} />
            <Route path="/account/bookings" element={<BookingsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/new" element={<BookingFormPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
