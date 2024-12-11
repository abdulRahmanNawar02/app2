import CarShow from "../CarShow/CarShow";
import Footer from "../Footer/footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Master() {
  return (
     <>
      <div className="img-bg container-fluid">
         <Navbar />
         <Header />   
         <CarShow /> 
         <Footer /> 
      </div>
     </>
  )
}
