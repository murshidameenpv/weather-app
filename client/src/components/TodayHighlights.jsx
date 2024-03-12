import { GiWindSlap } from "react-icons/gi";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWaterDrop } from "react-icons/md";
import { LuWaves } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaTemperatureQuarter } from "react-icons/fa6";
const TodayHighlights = () => {
  return (
    <AnimatePresence>
      <div className="dark:bg-gray bg-slate-500 rounded-lg py-2 px-3 min-w-0 overflow-hidden shadow-lg backdrop-filter backdrop-blur-lg my-5">
        <h2 className="text-sm font-semibold text-left">Today Highlights</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4 px-3">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ ease: "anticipate", duration: "0.3" }}
            className="dark:bg-darkGray rounded-lg px-2 py-3 backdrop-filter backdrop-blur-lg shadow-lg"
          >
            {/* Air Quality Index Card */}
            <div className="flex items-center justify-between">
              <span className="text-xs">Air Quality Index: </span>
              <span className="indicator-item badge badge-secondary">poor</span>
            </div>
            <div className="flex items-center justify-between gap-5 px-3 py-2">
              <GiWindSlap className="text-2xl" />
              <div className="flex flex-col items-center justify-center">
                <h4 className="dark:text-white font-semibold">PM25</h4>
                <span className="dark:text-white font-semibold">600</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="dark:text-white font-semibold">PM25</h4>
                <span className="dark:text-white font-semibold">600</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="dark:text-white font-semibold">S02</h4>
                <span className="dark:text-white font-semibold">29.5</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="dark:text-white font-semibold">NO2</h4>
                <span className="dark:text-white font-semibold">43.2</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="dark:text-white font-semibold">O2</h4>
                <span className="dark:text-white font-semibold">0.150</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ ease: "anticipate", duration: "0.3" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="dark:bg-darkGray rounded-lg px-2 py-3backdrop-filter backdrop-blur-lg shadow-lg"
          >
            {/* Sunrise & Sunset Card */}
            <div className="flex items-center justify-start">
              <span className="text-xs">Sunrise & Sunset </span>
            </div>
            <div className="flex items-center justify-around gap-5 px-3 py-2">
              <div className="flex flex-col items-center justify-between gap-1">
                <span>Sunrise</span>
                <div className="flex items-center justify-between gap-4">
                  <FiSun className="text-5xl" />
                  <h2 className="dark:text-white text-2xl font-medium">
                    6:00 AM
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-1">
                <span>Sunset</span>
                <div className="flex items-center justify-between gap-4">
                  <IoMoonOutline className="text-5xl" />
                  <h2 className="dark:text-white text-2xl font-medium">
                    6:00 AM
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex space-x-4 px-3">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              transition={{ ease: "anticipate", duration: "0.3" }}
              className="flex-1 dark:bg-darkGray rounded-lg px-2 py-3 shadow-lg"
            >
              <span className="text-sm text-white">Humidity</span>
              <div className="flex items-center justify-between space-x-2">
                <MdOutlineWaterDrop className="text-3xl" />
                <span className="text-xl font-bold text-white">73 %</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ ease: "anticipate", duration: "0.3" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="flex-1 dark:bg-darkGray rounded-lg px-2 py-3 shadow-lg"
            >
              <span className="text-sm text-white">Pressure</span>
              <div className="flex items-center justify-between">
                <LuWaves className="text-2xl" />
                <div>
                  <span className="text-xl font-bold dark:text-white">
                    1019
                  </span>
                  <span className="text-xl font-semibold dark:text-white">
                    hPa
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex space-x-4 px-3">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ ease: "anticipate", duration: "0.3" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="flex-1 dark:bg-darkGray rounded-lg p-4 shadow-lg"
            >
              <span className="text-sm dark:text-white">Visibility</span>
              <div className="flex items-center justify-between space-x-2">
                <FaEye className="text-3xl" />
                <span className="text-xl font-bold dark:text-white">
                  2.51 KM
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ ease: "anticipate", duration: "0.3" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="flex-1 dark:bg-darkGray rounded-lg p-4 shadow-lg"
            >
              <span className="text-sm dark:text-white">Pressure</span>
              <div className="flex items-center justify-between">
                <FaTemperatureQuarter className="text-2xl" />
                <span className="text-xl font-semibold dark:text-white">
                  20°C
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TodayHighlights;
