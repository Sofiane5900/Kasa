import React from "react";
import "../About.css";
import Navbar from "../components/navbar";
import AboutHeader from "../components/aboutheader";
import AboutList from "../components/aboutlist";
import Footer from "../components/footer";


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