// ServicesList.jsx
import React from 'react';
import ServicesCard from './ServicesCard';
import { MdHotel } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoMdBus } from "react-icons/io";

const ServicesList = () => {
  const services = [
    {
      title: 'Sarguzashtli Turlar',
      description: 'Bizning yo‘l-yo‘riqli sarguzashtli turlarimiz bilan hayajonli manzillarni kashf eting.',
      icon: <IoMdBus />,
    },
    {
      title: 'Sayohat Rejalashtirish',
      description: 'Tafsilotlarni bizga topshiring! Biz rejalashtiramiz, siz esa orzu qilgan ta’tilingizdan bahramand bo‘lasiz.',
      icon: <FaPlaneDeparture />,
    },
    {
      title: 'Yuqori Sifatli Turar Joylar',
      description: 'Bizning sinchkovlik bilan tanlangan turar joylarimiz bilan qulaylik va hashamatni his qiling.',
      icon: <MdHotel />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServicesCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;