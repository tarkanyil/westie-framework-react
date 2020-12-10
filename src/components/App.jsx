import React, { useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";


function App() {
    return (
        <div>
            <Navigation />
            <Intro />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;