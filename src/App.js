import React from "react";
import Header from "./components/header";
import GenerateReport from "./components/generateReport";
import Login from "./components/login";
import Footer from "./components/footer";
import Registration from "./components/registration";
import Aboutus from "./components/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/contactUs";

function App() {

  return (
    <>
      <Router>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<GenerateReport />} />
            <Route path="/generateReport" element={<GenerateReport />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;