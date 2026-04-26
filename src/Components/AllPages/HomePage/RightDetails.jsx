import React from 'react';
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

import image1 from '@/assets/swimming.png';
import Image from 'next/image';
import Image2 from '@/assets/class.png';
import Image3 from '@/assets/playground.png';
import image4 from '@/assets/bg.png';

const RightDetails = () => {
  return (
    <aside className="flex flex-col gap-8 p-4 max-w-[300px]">
      {/* Login Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Login With</h2>
        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-center gap-2 border border-blue-400 text-blue-500 py-2 rounded-md hover:bg-blue-50 transition">
            <FaGoogle /> Login with Google
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-800 text-gray-800 py-2 rounded-md hover:bg-gray-100 transition">
            <FaGithub /> Login with Github
          </button>
        </div>
      </section>

      {/* Social Links Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Find Us On</h2>
        <div className="flex flex-col border border-[#ddd] rounded-md overflow-hidden">
          <a
            href="#"
            className="flex items-center gap-3 p-4 border-b border-[#ddd]  hover:bg-gray-50 transition"
          >
            <span className="bg-gray-100 p-2 rounded-full text-blue-700">
              <FaFacebookF />
            </span>
            <span className="text-gray-600 font-medium">Facebook</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-4 border-b border-[#ddd]  hover:bg-gray-50 transition"
          >
            <span className="bg-gray-100 p-2 rounded-full text-blue-400">
              <FaTwitter />
            </span>
            <span className="text-gray-600 font-medium">Twitter</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-4 hover:bg-gray-50 transition"
          >
            <span className="bg-gray-100 p-2 rounded-full text-pink-500">
              <FaInstagram />
            </span>
            <span className="text-gray-600 font-medium">Instagram</span>
          </a>
        </div>
      </section>

      {/* Q-Zone Section */}
      <section className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-bold mb-6">Q-Zone</h2>
        <div className="flex flex-col gap-6">
          <div className="bg-white p-2 shadow-sm rounded">
            <Image
              width={200}
              height={200}
              src={image1}
              alt="Swimming"
              className="w-full h-auto rounded"
            />
            <p className="text-center font-semibold mt-2">Swimming</p>
          </div>
          <div className="bg-white p-2 shadow-sm rounded">
            <Image
              width={200}
              height={200}
              src={Image2}
              alt="Swimming"
              className="w-full h-auto rounded"
            />
            <p className="text-center font-semibold mt-2">Class</p>
          </div>
          <div className="bg-white p-2 shadow-sm rounded">
            <Image
              width={200}
              height={200}
              src={Image3}
              alt="Swimming"
              className="w-full h-auto rounded"
            />
            <p className="text-center font-semibold mt-2">Play Ground</p>
          </div>
        </div>
      </section>

      {/* Ad/Promo Banner Section */}
      {/* <section className="">
        <Image src={image4} alt="bg-image" width={400} height={400} />
      </section> */}
    </aside>
  );
};

export default RightDetails;
