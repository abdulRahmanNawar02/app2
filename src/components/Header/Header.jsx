import headerImg from '../../assignment-images/imges/landing-page/car 2 1.png'
import './header.css'
export default function Header() {
  return (
   <>
      <section className=" my-5 row align-items-center justify-content-between m-auto">
         <div className="col-3  ms-5 ps-5">
            <h1 className="fw-bold ">Find, book and rent a car <span className='text-primary'>Easily</span></h1>
            <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
         </div>
         <div className="col-6">
            <img className='w-100' src={headerImg} alt="" />
         </div>     
      </section>
   </>
  )
}
