import Footer from "./Footer";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

const Home = () => {
 return (
   <div>
     <TopBar />
     <div className="min-h-screen">
       <Outlet />
     </div>
     <Footer />
   </div>
 );
}

export default Home