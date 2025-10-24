import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navbar & Pages
import RoleNavbar from "./Navbar/RoleNavbar";
import CustomerNavbar from "./Navbar/CustomerNavbar";
import ServiceNavbar from "./Navbar/ServiceNavbar";
import AdminNavbar from "./Navbar/AdminNavbar";

import RoleSelection from "./Navbar/RoleSelection";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";

import CustomerLogin from "./Login/CustomerLogin";
import CustomerHome from "./CustomerPages/CustomerHome";
import CustomerBooking from "./CustomerPages/CustomerBookings";
import CustomerFeedback from "./CustomerPages/CustomerFeedback";
import SelectService from "./CustomerPages/SelectService";
import ViewDetails from "./CustomerPages/ViewDetails";
import BookingDetails from "./CustomerPages/BookingDetails";

import ServiceLogin from "./Login/ServiceLogin";
import ServiceDashboard from "./ServicePages/ServiceDashboard";
import ServiceAdd from "./ServicePages/ServiceAdd";
import ServiceBooking from "./ServicePages/ServiceBooking";
import ServiceFeedback from "./ServicePages/ServiceFeedback";

import AdminLogin from "./Login/AdminLogin";
import AdminDashboard from "./AdminPages/AdminDashboard";
import AdminService from "./AdminPages/AdminService";
import AdminBooking from "./AdminPages/AdminBooking";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages with Role Navbar */}
        <Route path="/" element={<RoleNavbar />}>
          <Route index element={<RoleSelection />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Login Pages */}
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/service/login" element={<ServiceLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Customer Pages with Customer Navbar */}
        <Route path="/customer" element={<CustomerNavbar />}>
          <Route path="home" element={<CustomerHome />} />
          <Route path="bookings" element={<CustomerBooking />} />
          <Route path="feedback" element={<CustomerFeedback />} />
          <Route path="select/service" element={<SelectService />} />
          <Route path="view/details" element={<ViewDetails />} />
          <Route path="booking/details" element={<BookingDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Service Pages with Service Navbar */}
        <Route path="/service" element={<ServiceNavbar />}>
          <Route path="dashboard" element={<ServiceDashboard />} />
          <Route path="add" element={<ServiceAdd />} />
          <Route path="booking" element={<ServiceBooking />} />
          <Route path="feedback" element={<ServiceFeedback />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Pages with Admin Navbar */}
        <Route path="/admin" element={<AdminNavbar />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="service" element={<AdminService />} />
          <Route path="bookings" element={<AdminBooking/>} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
