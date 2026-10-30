import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";

import AboutUs from "./Aboutus";
import Services from "./Services";
import Collections from "./Collections";
import Contact from "./Contact";
import SignIn from "./Signin";
import SignUp from "./Signup";

const Home = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;