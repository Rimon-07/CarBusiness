import { Button, Card, Col, Row } from "react-bootstrap";


const trendings = [
  {
    img: "public/image/trending-card-img1.png",
    title: "Used 2019 Audi S4 Premium Plus",
    miles: "11 475",
    transmission: "AWD",
    cylinders: "4-Cylinder Turbo",
    price: "$41,400",
  },
  {
    img: "public/image/trending-card-img2.png",
    title: "2013 Subaru Forester Premium Plus",
    miles: "40 475",
    transmission: "AWD",
    cylinders: "4-Cylinder Turbo",
    price: "$22,500",
  },
  {
    img: "public/image/trending-card-img3.png",
    title: "Used 2010 BMW X3 Sport package",
    miles: "20 850",
    transmission: "RWD",
    cylinders: "4-Cylinder",
    price: "$39,200",
  },
];

export const Trending = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      <h1 className="fw-bold text-center">Trending near you</h1>

      <Row
        style={{ paddingTop: "54px" }}
        className="d-flex justify-content-center"
      >
        {trendings.map(
          ({ img, title, cylinders, miles, price, transmission }, i) => (
            <Col md={4} key={i}>
              <Card style={{ width: "25rem", border: "none" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="opacity-50">{miles} Miles</Card.Text>
                  <Card.Text className="opacity-50">
                    {cylinders} . {transmission}
                  </Card.Text>
                  <div className="d-flex flex-row gap-3">
                    <Button variant="" className="fw-bold btn-outline-primary">
                      {price}
                    </Button>
                    <Button variant="" className="fw-bold  btn-outline-secondary ">
                      Bestseller
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};