import React from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../utils/config";
import AdminBookingCard from "../../shared/AdminBookings";

const Bookings = () => {
  const { apiData: bookings } = useFetch(`${BASE_URL}/booking`);

  return (
    <div className="py-8 px-8 w-full">
      <div className="flex flex-col gap-5  overflow-x-scroll ">
        <table className=" table-auto gap-4 text-xs md:text-sm border-collapse w-[120%]  border-gray-400 lg:w-full border">
          <thead className="w-full bg-gray-200">
            <tr>
              <th className="tableData">Tur nomi</th>
              <th className="tableData">Foydalanuvchi ismi</th>
              <th className="tableData">Foydalanuvchi ID</th>
              <th className="tableData">Odamlar soni</th>
              <th className="tableData">Telefon</th>
              <th className="tableData">Bron qilingan sana</th>
              <th className="tableData">Bron qilingan vaqt</th>
              <th className="tableData">Narx</th>
              <th className="tableData">Holati</th>
            </tr>
          </thead>
          {bookings?.map((booking) => (
            <AdminBookingCard booking={booking} key={booking._id} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;