import CurrentWeather from "./CurrentWeather";
import TodayHighlights from "./TodayHighlights";
import TodayWeather from "./TodayWeather";
import Forecast from "./Forecast";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 overflow-hidden h-screen no-scrollbar bg-black">
      <div className="md:w-3/10  md:px-4 flex flex-col items-center justify-center no-scrollbar">
        <CurrentWeather />
        <div className="flex flex-col items-start justify-start mt-4 ml-3">
          <p className="text-white italic font-semibold">5 Days Forecast</p>
          <Forecast />
        </div>
      </div>
      <div className="md:w-7/10 space-y-4 overflow-auto md:px-4 no-scrollbar">
        <TodayHighlights />
        <div className="overflow-x-auto no-scrollbar">
          <TodayWeather />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
