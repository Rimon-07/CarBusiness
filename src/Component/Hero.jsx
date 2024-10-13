import Carousel  from "react-bootstrap/Carousel"

function Hero() {
  return (
     <>
        <Carousel data-bs-theme ="dark" indicators ={false}>
            <Carousel.Item>
                <div className="text-center HeroArea">
                    <p className="BrandColor mt-5">Meet your new car</p>
                    <h1 className=" fw-bold">Honda Civic Type White</h1>
                    <div className="HeroButton">
                        <button className="btn btn-outline-secondary fw-bold me-3">
                            More Details
                        </button>
                        <button className="btn btn-outline-primary fw-bold">
                            Test Drive
                        </button>
                    </div>
                </div>

                <div style={{paddingTop: "91px"}}>
                    <img className="d-block w-100" src="public/image/hero-img.png" alt="" />
                </div>
            </Carousel.Item>


            <Carousel.Item>
                <div className="text-center HeroArea">
                    <p className="BrandColor mt-5">join your new car</p>
                    <h1 className=" fw-bold"> Honda Accord Blue</h1>
                    <div className="HeroButton">
                        <button className="btn btn-outline-secondary fw-bold me-3">
                            More Details
                        </button>
                        <button className="btn btn-outline-primary fw-bold">
                            Test Drive
                        </button>
                    </div>
                </div>

                <div style={{paddingTop: "91px"}}>
                    <img className="d-block w-100  " src="public/image/hero-img-2.png" alt=""  />
                </div>
            </Carousel.Item>


            <Carousel.Item>
                <div className="text-center HeroArea">
                    <p className="BrandColor mt-5">Ride your new car</p>
                    <h1 className=" fw-bold"> Honda City Green</h1>
                    <div className="HeroButton">
                        <button className="btn btn-outline-secondary fw-bold me-3">
                            More Details
                        </button>
                        <button className="btn btn-outline-primary fw-bold">
                            Test Drive
                        </button>
                    </div>
                </div>

                <div style={{paddingTop: "91px"}}>
                    <img className="d-block w-100" src="public/image/hero-img-3.png" alt="" />
                </div>
            </Carousel.Item>
        </Carousel>
     </>
  )
}

export default Hero