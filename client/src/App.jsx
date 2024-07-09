import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./components/Layout.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import ReviewsFormPage from "./pages/ReviewsFormPage.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import BookingFormPage from "./pages/BookingFormPage.jsx";



axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
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
    </UserContextProvider>
  )
}

export default App
