export default function Navbar() {
  return (
     <>
          <section className="navbar navbar-expand-lg .bg-transparent pt-4">
               <div className="container">
                    <a className="navbar-brand me-5 pe-5" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <div className="d-flex justifiy-contetn-around w-100 m-auto">
                              <ul className="navbar-nav ps-5 me-auto mb-2 mb-lg-0">
                                   <li className="nav-item mx-2">
                                        <a className="nav-link active" aria-current="page" href="#">Become a rental</a>
                                   </li>
                                   <li className="nav-item mx-2">
                                        <a className="nav-link active" aria-current="page" href="#">rental details</a>
                                   </li>
                                   <li className="nav-item mx-2">
                                        <a className="nav-link active" aria-current="page" href="#">How it works</a>
                                   </li>
                                   <li className="nav-item mx-2">
                                        <a className="nav-link active" aria-current="page" href="#">why choose us</a>
                                   </li>
                              </ul>
                              <ul className="navbar-nav ps-5 me-auto mb-2 mb-lg-0">
                                   <li className="nav-item mx-2">
                                        <button className="btn btn-transparent">Sign in</button>
                                   </li>       
                                   <li className="nav-item mx-2">
                                        <button className="btn btn-primary">Sign up</button>
                                   </li>       
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     </>
  )
}
