import locationImg from '../../assignment-images/imges/landing-page/location.png'
import calenderImg from '../../assignment-images/imges/landing-page/calender.png'
import carImg from '../../assignment-images/imges/landing-page/car-icon.png'
import audi from '../../assignment-images/imges/landing-page/audi.png'
import nissan from '../../assignment-images/imges/landing-page/nissan.png'
import volvo from '../../assignment-images/imges/landing-page/volvo.png'
import jaguar from '../../assignment-images/imges/landing-page/jaguar.png'
export default function CarShow() {
  return (
   <>
      <section className="carshow my-5 text-center ">
         <form className="d-flex" role="search">
            <input className="form-control border-2 shadow bg-body-tertiary" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
         </form>
         <button className="btn bg-primary-subtle text-primary my-3 fw-normal">POPULAR RENTAL DEALS</button>
         <h1>Most popular cars rental deals</h1>
         <button className="btn bg-primary-subtle text-primary my-3 fw-normal">HOW IT WORK</button>
         <h1>Most popular cars rental deals</h1>
         <div className="d-flex justify-content-center flex-wrap ">
            <div className="max-w-20 mx-4">
               <img src={locationImg} alt="" />
               <h4 className='py-2'>Choose location</h4>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
            </div>
            <div className="max-w-20 mx-4">
               <img src={calenderImg} alt="" />
               <h4 className='py-2'>Pick-up-today</h4>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
            </div>
            <div className="max-w-20 mx-4">
               <img src={carImg} alt="" />
               <h4 className='py-2'>Book your Car</h4>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
            </div>
         </div>
         <div className="brands my-5 d-flex justify-content-around max-w-75 m-auto ">
            <img src={audi} alt="" />
            <img src={nissan} alt="" />
            <img src={volvo} alt="" />
            <img src={jaguar} alt="" />
         </div>
      </section>
   </>
  )
}
