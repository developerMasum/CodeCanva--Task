import assets from "@/assets";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
const HomePage = () => {
  return (
    <div>
      <section className="text-center py-10 px-4 flex flex-col md:flex-row justify-evenly items-center">
        <div className="text-left max-w-xl mx-auto">
          <p className="text-sm text-blue-300 mb-2">Marketing Tech Expert</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi There!
            <span className="block text-blue-500">Tech Meets Marketing</span>
          </h1>
          <div className="mt-6 flex  flex-row gap-6">
            <button className="bg-blue-500 text-sm md:text-lg text-white px-6 py-2 rounded-md  hover:bg-blue-600">
              Book a Consultancy
            </button>
            <div className="inline-flex items-center text-white">
              <span className="bg-gray-800 p-4 rounded-full mr-4">
                <FaPhone color="blue" />
              </span>
              <div>
                <p>Contact for Project</p>
                <p>1-929-269-1487</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src={assets.images.banner}
            alt="Person"
            className="mx-auto"
            height={700}
            width={700}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
