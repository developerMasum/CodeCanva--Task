import React from "react";
import HomePage from "./components/Banner";
import Navbar from "./components/Navbar";

import ClientCarousel from "./components/ClientProjects";
import AboutMe from "./components/AboutMe";

const Home = () => {
  return (
    <main>
      <div className="bg-gradient-to-br from-blue-900 via-30%  via-gray-900 to-black min-h-screen">
        <Navbar />
        <HomePage />
        <div>
          <ClientCarousel />
        </div>
      </div>
      <AboutMe />
    </main>
  );
};

export default Home;
