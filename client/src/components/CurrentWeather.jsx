import { FaSun, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const CurrentWeather = () => {
  return (
    <div className="bg-gray w-64 h-auto rounded-lg px-4 py-2 shadow-lg backdrop-filter backdrop-blur-lg xl:flex">
      <h2 className="text-sm font-bold italic">Now</h2>
      <div className="flex items-center">
        <p className="text-6xl text-white font-extrabold">20°C</p>
        <FaSun className="text-yellow-500 mx-auto text-xl" />
      </div>
      <p className="font-bold">Sunny</p>
      <hr className="my-4" />
      <div className="flex justify-start items-center gap-2">
        <FaCalendarAlt />
        <p>Tuesday, 2 March</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <FaMapMarkerAlt />
        <p>New Delhi, IN</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
