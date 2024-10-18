import assets from "@/assets";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <main className="text-white bg-black flex flex-col md:flex-row justify-center items-center gap-8 p-6 relative">
      <div className="flex-shrink-0 relative">
        <div className="absolute -top-10 md:-top-11">
          <Image
            src={assets.images.banner2}
            alt="banner"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-blue-600 p-4 w-[300px] h-[300px] mt-12 rounded-2xl"></div>
      </div>

      <div className="max-w-xl text-center md:text-left">
        <p className="text-3xl font-bold mb-2">About Me</p>
        <p className="text-2xl font-semibold text-blue-700 mb-4">
          Tech meets Marketing
        </p>
        <p className="mb-4">
          I’m a developer by background who turned into marketing. My
          specialties really shine in the technical side of marketing. I’m a
          good bridge between the marketing & development teams in companies.
        </p>
        <div className="flex  flex-row justify-start items-start gap-6 mb-4">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <p className="text-4xl font-bold">40+</p>
            <p className="text-sm">
              Completed <br /> Projects
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">10+</p>
            <p className="text-sm">
              Satisfied <br /> Clients
            </p>
          </div>
        </div>
        <button className="bg-blue-500 text-sm md:text-lg text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Read More
        </button>
      </div>
    </main>
  );
};

export default AboutMe;
