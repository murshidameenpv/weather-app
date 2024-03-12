import { WiDayCloudy, WiStrongWind } from "react-icons/wi";
import { motion, AnimatePresence } from "framer-motion";
const TodayWeather = () => {
  const weatherData = [
    { time: "9 PM", temperature: 20, windSpeed: 5 },
    { time: "12 AM", temperature: 18, windSpeed: 4 },
    { time: "3 AM", temperature: 16, windSpeed: 3 },
    { time: "6 AM", temperature: 15, windSpeed: 2 },
    { time: "9 AM", temperature: 18, windSpeed: 2 },
    { time: "12 PM", temperature: 22, windSpeed: 3 },
    { time: "3 PM", temperature: 24, windSpeed: 4 },
    { time: "6 PM", temperature: 22, windSpeed: 5 },
  ];

  return (
    <AnimatePresence>
      <div className="bg-gray rounded-lg p-4 backdrop-filter backdrop-blur-lg overflow-x-auto">
        <div className="flex space-x-4">
          {weatherData.map((data, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              key={index}
              className="flex flex-col items-center min-w-[6rem] bg-zinc-600 rounded-lg px-3 py-2 shadow-lg gap-3"
            >
              <span className="text-lg font-medium">{data.time}</span>
              <WiDayCloudy className="text-4xl" />
              <span className="text-xl font-bold text-white">
                {data.temperature}°C
              </span>
            </motion.div>
          ))}
        </div>
        <div className="flex space-x-4 mt-4">
          {weatherData.map((data, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              key={index}
              className="flex flex-col items-center min-w-[6rem] bg-zinc-600 rounded-lg px-3 py-2 shadow-lg gap-3"
            >
              <span className="text-lg font-medium">{data.time}</span>
              <WiStrongWind className="text-2xl" />
              <span className="text-xl font-bold text-white">
                {data.windSpeed} Km/h
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TodayWeather;
