import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterImg from "../assets/images/Signup2.png";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../utils/config";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    photo: "",
    role: "user",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message } = await response.json();

      if (response.ok) {
        toast.success(message);
        navigate("/login");
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error("Server javob bermayapti");
    }
  };

  return (
    <div className="min-h-screen md:min-h-[400px] flex items-center justify-center bg-gray-100">
      <div className="bg-white mx-6 p-6 md:p-8 rounded-lg shadow-md w-full max-w-xl m-8 md:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        {/* Ro'yxatdan o'tish Rasmi */}
        <div className="hidden md:block">
          <img
            src={RegisterImg}
            alt="StarTour Logotipi"
            className="mx-auto h-full object-cover"
          />
        </div>

        {/* Ro'yxatdan o'tish Formasi */}
        <div className="flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Ro'yxatdan o'tish
            </h2>
            <p className="text-sm md:text-base text-GrayColor">
              Sayohatingizni boshlash uchun hisob yarating.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
            <div>
              <label
                htmlFor=""
                className="block text-md md:text-lg font-medium text-GrayColor"
              >
                Foydalanuvchi nomi
              </label>
              <input
                type="text"
                name="username"
                placeholder="Foydalanuvchi nomingizni kiriting"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-BaseColor"
                value={formData.username}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-md md:text-lg font-medium text-GrayColor"
              >
                Elektron Pochta
              </label>
              <input
                type="email"
                name="email"
                placeholder="Elektron pochtangizni kiriting"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-BaseColor"
                value={formData.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-md md:text-lg font-medium text-GrayColor"
              >
                Parol
              </label>
              <input
                type="password"
                name="password"
                placeholder="Parolingizni kiriting"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-BaseColor"
                value={formData.password}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full btn my-3"
                disabled={isLoading}
              >
                {isLoading ? "Ro'yxatdan o'tilmoqda..." : "Ro'yxatdan o'tish"}
              </button>
              <p className="text-sm md:text-base text-center">
                Allaqachon hisobingiz bormi?{" "}
                <Link
                  className="text-BaseColor hover:text-BHoverColor"
                  to="/login"
                >
                  Bu yerda kiring
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;