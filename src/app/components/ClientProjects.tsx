import assets from "@/assets";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image"; // Import the Next.js Image component

const ClientProjects = () => {
  return (
    <section className="text-white py-20 px-6 text-center">
      <h2 className="text-4xl">Our Clients & Projects</h2>
      <div>
        <Marquee>
          <div className="inline-flex items-center justify-center gap-12 mt-10">
            <Image
              src={assets.marques.marq1}
              alt="Client 1"
              height={100}
              width={100}
            />
            <Image
              src={assets.marques.marq2}
              alt="Client 2"
              height={100}
              width={100}
            />
            <Image
              src={assets.marques.marq3}
              alt="Client 2"
              height={150}
              width={150}
            />
            <Image
              src={assets.marques.marq4}
              alt="Client 2"
              height={150}
              width={150}
            />
            <Image
              src={assets.marques.marq5}
              alt="Client 2"
              height={100}
              width={100}
            />
            <Image
              src={assets.marques.marq1}
              alt="Client 1"
              height={100}
              width={100}
            />
            <Image
              src={assets.marques.marq2}
              alt="Client 1"
              height={100}
              width={100}
            />
            <Image
              src={assets.marques.marq3}
              alt="Client 1"
              height={100}
              width={100}
            />
            <Image
              src={assets.marques.marq4}
              alt="Client 1"
              height={150}
              width={150}
            />
            <Image
              src={assets.marques.marq1}
              alt="Client 1"
              height={100}
              width={100}
            />{" "}
            <Image
              src={assets.marques.marq1}
              alt="Client 1"
              height={100}
              width={100}
            />
            <Image
              src={assets.marques.marq2}
              alt="Client 1"
              height={100}
              width={100}
            />
            <Image
              src={assets.marques.marq2}
              alt="Client 1"
              height={100}
              width={100}
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ClientProjects;
