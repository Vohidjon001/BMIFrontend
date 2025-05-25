import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";

const UpdateTours = ({ tour, id }) => {
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    city: "",
    desc: "",
    address: "",
    price: 0,
    maxGroupSize: 1,
    photo: "",
    distance: 0,
    featured: false,
  });

  useEffect(() => {
    if (tour) {
      const {
        title,
        city,
        desc,
        address,
        price,
        maxGroupSize,
        photo,
        distance,
        featured,
      } = tour || {};

      setFormData((prevData) => ({
        ...prevData,
        title: title || "",
        city: city || "",
        desc: desc || "",
        address: address || "",
        price: price || 0,
        maxGroupSize: maxGroupSize || 1,
        photo: photo || "",
        distance: distance || 0,
        featured: featured || false,
      }));
    }
  }, [tour]);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/tour/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const { message } = await response.json();

      if (response.ok) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error("Server javob bermayapti");
    }
  };

  return (
    <div className="min-h-screen md:min-h-[400px] flex items-center justify-center bg-gray-100">
      <div className="bg-white mx-6 p-6 md:p-8 rounded-lg text-center shadow-md w-full max-w-2xl m-8 md:max-w-[90%] ">
        <div className="flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Turni yangilash
            </h2>
            <p className="text-sm md:text-base text-GrayColor">
              Yangi tur yaratish uchun barcha maydonlarni to‘ldiring.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
            <div className="md:grid grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor=""
                  className="block text-md md:text-lg font-medium text-GrayColor"
                >
                  Sarlavha
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Tur nomini kiriting"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
                  value={formData.title}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-md md:text-lg font-medium text-GrayColor"
                >
                  Shahar
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Shahar nomini kiriting"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
                  value={formData.city}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="md:grid grid-cols-3 gap-8">
              <div>
                <label
                  htmlFor=""
                  className="block text-md md:text-lg font-medium text-GrayColor"
                >
                  Narx
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Narxni kiriting"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
                  value={formData.price}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-md md:text-lg font-medium text-GrayColor"
                >
                  Maksimal odamlar
                </label>
                <input
                  type="number"
                  name="maxGroupSize"
                  placeholder="Sayohat uchun maksimal odamlar sonini kiriting"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
                  value={formData.maxGroupSize}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-md md:text-lg font-medium text-GrayColor"
                >
                  Masofa
                </label>
                <input
                  type="number"
                  name="distance"
                  placeholder="Umumiy masofani kiriting"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
                  value={formData.distance}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-md md:text-lg font-medium text-GrayColor"
              >
                Manzil
              </label>
              <input
                type="text"
                name="address"
                placeholder="Manzilni kiriting"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
                value={formData.address}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-md md:text-lg font-medium text-GrayColor"
              >
                Tavsif
              </label>
              <input
                type="text"
                name="desc"
                placeholder="Tavsifni kiriting"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
                value={formData.desc}
                onChange={handleInput}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-md md:text-lg font-medium text-GrayColor"
              >
                Rasm URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Rasm URL manzilini kiriting"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
                value={formData.photo}
                onChange={handleInput}
                required
              />
            </div>

            <div className="flex items-center justify-between mb-3">
              <label
                htmlFor=""
                className="text-TextColor text-[15px] font-semibold leading-7 px-4"
              >
                Tanlangan
                <select
                  name="featured"
                  value={formData.featured}
                  onChange={handleInput}
                  className="text-TextColor text-[15px] leading-7 px-4 py-3 focus:outline-none"
                >
                  <option value="false">Yo‘q</option>
                  <option value="true">Ha</option>
                </select>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full Bluebtn my-3"
                disabled={isLoading}
              >
                {isLoading ? "Yangilanmoqda..." : "Yangilash"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTours;