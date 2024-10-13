import {Col, Row} from "react-bootstrap";

const bestSellingItems = [
    {
        img : "public/image/best-selling-1.png",
        name : "Volwagen",
        price : "$40k"
    },
    {
        img : "public/image/best-selling-2.png",
        name : " Mercedes",
        price : "$60k"
    },
    {
        img : "public/image/best-selling-3.png",
        name : "Subaru",
        price : "$15k"
    },
    {
        img : "public/image/best-selling-4.png",
        name : "Hyundai",
        price : "$30k"
    },
    {
        img : "public/image/best-selling-1.png",
        name : "Toyota",
        price : "$27k"
    },
    {
        img : "public/image/best-selling-3.png",
        name : "Infiniti",
        price : "$54k"
    } 
 
]

export const BestSelling = () => {
  return (
    <div className='container ' style={{padding : "86px"}}>
        <h1 className='text-center fw-bold'>Treading near you</h1>
        <Row 
        style={{paddingTop: "50px"}}
          
        >
            {bestSellingItems.map(({img , name , price}, i) =>(
                <Col md ={4}  key={i} >
                    <div className="d-flex justify-content-center mb-5   ">
                        <img src={img} alt="Volkswagen Logo" 
                        className='vw-logo w-[100px]  '/>
                        <div >
                            <div className="vw-text  ">{name}</div>
                            <div className="vw-price ">from {price}</div>
                        </div>

                    </div>
                
                </Col>
            ))}

        </Row>
    </div>
  );
};

 