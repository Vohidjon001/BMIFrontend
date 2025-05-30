import React from "react";
import BASE_URL from "../utils/config";
import { toast } from "react-toastify";

const BookingCard = ({ booking }) => {
  const {
    tourName,
    fullName,
    userId,
    phone,
    totalPrice,
    maxGroupSize,
    date,
    createdAt,
    _id,
  } = booking;

  const setCreatedAt = new Date(createdAt);
  const newCreatedAt = setCreatedAt.toDateString(); // Sana qismini matn sifatida olish

  const booked = new Date(date);
  const bookedFor = booked.toDateString(); // Sana qismini matn sifatida olish

  const confirmDelete = async () => {
    const result = window.confirm("Ushbu bron tugallanganmi?");
    if (result) {
      deleteBooking();
    }
  };

  const deleteBooking = async () => {
    try {
      const response = await fetch(`${BASE_URL}/booking/${_id}`, {
        method: "DELETE",
      });
      const { message } = await response.json();

      if (response.ok) {
        // toast.success(message)
        location.reload();
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error("Server javob bermayapti");
    }
  };

  return (
    <>
      <tbody className="rounded overflow-hidden py-8 px-3 border-b-gray-500 border-b-[1px]">
        <tr className="w-full text-center overflow-hidden">
          <td className="">{tourName}</td>
          <td className="">{fullName}</td>
          <td className="">{userId}</td>
          <td className="">{maxGroupSize}</td>
          <td className="">{phone}</td>
          <td className="">{bookedFor}</td>
          <td className="">{newCreatedAt}</td>
          <td className="">{totalPrice} so'm</td>
          <td>
            <button onClick={confirmDelete} className="Redbtn my-2 mx-2">
              Tugallangan
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default BookingCard;