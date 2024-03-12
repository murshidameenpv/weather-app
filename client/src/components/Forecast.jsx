import { WiDayCloudy } from "react-icons/wi";
import { motion, AnimatePresence } from "framer-motion";

const Forecast = () => {
  const forecastData = [
    { date: "March 2", day: "Thursday", temperature: 7 },
    { date: "March 3", day: "Friday", temperature: 8 },
    { date: "March 4", day: "Saturday", temperature: 9 },
    { date: "March 5", day: "Sunday", temperature: 10 },
    { date: "March 6", day: "Monday", temperature: 11 },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className="dark:bg-gray bg-slate-500 w-64 h-auto my-5 mx-5 rounded-lg px-4 py-2 shadow-lg backdrop-filter backdrop-blur-lg xl:flex"
      >
        {forecastData.map((data, index) => (
          <div key={index} className="flex items-center justify-around py-3">
            <div className="flex gap-2">
              <WiDayCloudy className="text-3xl" />
              <span className="text-sm text-white">{data.temperature}°C</span>
            </div>
            <span className="text-sm text-white">{data.date}</span>
            <span className="text-sm text-white">{data.day}</span>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Forecast;
