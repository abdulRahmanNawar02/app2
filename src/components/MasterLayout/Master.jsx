import CarShow from "../CarShow/CarShow";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Master() {
  return (
     <>
      <div className="img-bg container-fluid">
         <Navbar />
         <Header />   
         <CarShow />  
      </div>
     </>
  )
}
