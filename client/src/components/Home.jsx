import Footer from "./Footer";
import MainLayout from "./MainLayout";
import TopBar from "./TopBar";

const Home = () => {
 return (
   <div>
     <TopBar />
     <div className="min-h-screen">
      <MainLayout/>
     </div>
     <Footer />
   </div>
 );
}

export default Home