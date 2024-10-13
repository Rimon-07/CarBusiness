import React from 'react'

function Navbar() {
  return (
     <>
        <nav className="navbar navbar-expand-lg">
            <div className='container'>
                <a className='navbar-brand' href="#">
                    <img src="public/image/logo.png" alt="" />
                </a>

                <button className=' navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target = "#navbarTogglerDemo02" aria-controls='navbarTogglerDemo02' aria-label="Toggle navigation"> 
                    <span className=' navbar-toggler-icon'></span>
                </button>


                <div className=' collapse navbar-collapse' id='navbarTogglerDemo02'>
                    <ul className='navbar-nav ms-auto gap-3'>
                        <li className='nav-item'>
                            <a className='nav-link font-weight-bold' href="#">Used Cars</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link font-weight-bold' href="#">Auctions</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link font-weight-bold' href="#">New Cars</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link font-weight-bold' href="#">Sell Cars</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link font-weight-bold' href="#">Local Dealers</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link font-weight-bold' href="#">Support</a>
                        </li>
                        <li className='nav-item SignUp'>
                            <a className='nav-link font-weight-bold' href="#"><i className="bi bi-person-fill"></i> <span>Sign Up</span> </a>
                        </li>
    
                    </ul>
                </div>
            </div>
        </nav>
     </>
  )
}

export default Navbar