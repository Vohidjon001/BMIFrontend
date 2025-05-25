import React from "react";
import ImagesGallery from "../components/Gallery/Gallery";

const About = () => {
  return (
    <section>
      {/* {Galereya Bo'limi Boshlanadi} */}
      <section className="py-8 text-center px-6 md:px-12">
        <h1 className="text-[40px] font-bold">
          Bizning <span className="text-BaseColor">Galereyamiz</span>
        </h1>
        <p className="text-lg leading-8 mb-8 text-gray-800">
          "StarTourning sarguzashtlaridan suratlarni ko'ring, galereyamizda sayohat mo'jizalarini kashf eting."
        </p>
        <ImagesGallery />
      </section>
      {/* {Galereya Bo'limi Tugaydi} */}
    </section>
  );
};

export default About;