import React from "react";
import bannerImage from "../assets/bannerImage.jpeg";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative w-full h-[80vh] flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100"
    >
      {/* Background image */}
      <img
        src={bannerImage}
        alt="Cancer Awareness Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        loading="lazy"
        decoding="async"
      />

      {/* Overlay content */}
      <div className="relative text-center text-white px-6 z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          Together We Fight Cancer
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mx-auto mb-6 drop-shadow-md">
          Spreading hope, raising awareness, and supporting those battling
          cancer — because no one should fight alone.
        </p>
        <a
          href="#contact"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300"
        >
          Get Involved
        </a>
      </div>

      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  );
};

export default Banner;
