import React from "react";
import Navbar from "../components/Navbar/navbar.jsx";
import AboutHeader from "../components/Aboutheader/aboutheader.jsx";
import AboutList from "../components/Aboutlist/aboutlist.jsx";
import Footer from "../components/Footer/footer.jsx";


const About = () => {
    return (
        <div>
        <Navbar />
        <AboutHeader/>
        <AboutList />
        <Footer />
        </div>
    );
    }

    export default About;