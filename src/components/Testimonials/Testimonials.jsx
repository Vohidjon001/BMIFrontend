import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/images/ava-1.jpg";
import avatar2 from "../../assets/images/ava-2.jpg";
import avatar3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      pic: avatar1,
      name: "John Doe",
      description:
        "StarTour bilan sayohatimiz ajoyib bo'ldi! Tafsilotlarga e'tibor, do'stona yo'lboshchilar va unutilmas tajribalar buni haqiqatan ham alohida qildi. Keyingi sarguzashtni kuta olmayman!",
    },
    {
      pic: avatar2,
      name: "Jane Smith",
      description:
        "StarTour mening kutganlarimdan oshib ketdi. Manzaralardan tortib uchrashuvlargacha har bir lahza zavqli edi. Jamoaning tajribasi va shaxsiy xizmati sayohatni unutilmas qildi.",
    },
    {
      pic: avatar3,
      name: "Chris Johnson",
      description:
        "Men bir nechta agentliklar bilan sayohat qildim, lekin StarTour alohida ajralib turadi. Muammosiz rejalashtirish, bilimdonlik va noyob manzillar ularni boshqalardan ajratib turadi. Dunyoni kashf qilishning ajoyib usuli!",
    },
    {
      pic: avatar1,
      name: "Emily Davis",
      description:
        "StarTour bizning orzu qilgan ta'tilimizni haqiqatga aylantirdi. Sinchkovlik bilan ishlab chiqilgan marshrut, xilma-xil faoliyatlar va samimiy mehmondo'stlik biz abadiy yodda qoladigan tajriba yaratdi. Qattiq tavsiya qilaman!",
    },
    {
      pic: avatar3,
      name: "Alex Turner",
      description:
        "StarTour jamoasiga unutilmas sayohat uchun katta rahmat. Sarguzasht va dam olishning mukammal uyg'unligi edi. Keyingi sayohatimni ular bilan bron qilaman, shubhasiz.",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {testimonialsData.map((data, index) => (
        <div className=" py-4 px-6">
          <p>{data.description}</p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-[75px] h-[55px] rounded-md overflow-hidden">
              <img
                src={data.pic}
                className="w-full h-full object-cover rounded-2"
                alt=""
              />
            </div>
            <div>
              <div>
                <h5 className="mb-0 mt-3">{data.name}</h5>
                <p className="text-GrayColor">Mijoz</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;