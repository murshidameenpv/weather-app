import { FaSun, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const CurrentWeather = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className="dark:bg-gray bg-slate-500 w-64 h-auto rounded-lg px-4 py-2 shadow-lg backdrop-filter backdrop-blur-lg xl:flex"
      >
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
      </motion.div>
    </AnimatePresence>
  );
};

export default CurrentWeather;
