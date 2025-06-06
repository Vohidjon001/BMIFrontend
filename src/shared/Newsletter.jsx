import React, { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Yangiliklar xatiga obuna bo‘ldingiz");
    // Add your logic here for handling the subscription (e.g., sending the email to your server)
    console.log(`Obuna bo‘lgan email: ${email}`);
    // Reset the email input after submission
    setEmail("");
  };

  return (
    <div>
      <div className="newsletter-container p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">
          Yangiliklar xatiga obuna bo‘ling
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-gray-200 font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Emailingizni kiriting"
            value={email}
            onChange={handleInputChange}
            required
            className="px-4 py-2 border text-black border-gray-300 rounded-md mb-4 focus:outline-none focus:border-BaseColor"
          />
          <button type="submit" className="btn">
            Obuna bo‘lish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;