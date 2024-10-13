import { Col , Row } from "react-bootstrap"

const reviews = [
    {
        img : "public/image/review-1.png",
        content : "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",

        user : {
            img : "public/image/avatar-1.png",
            name : "Hironaka Hiroe",
            position : "Chief Editio",
            stars : 4.91,
            total : "(98)",
        },
    }, 
    {
        img : "public/image/review-2.png",
        content : "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",

        user : {
            img : "public/image/avatar-2.png",
            name : "Debashis Bhuiyan",
            position : "News Editorhh",
            stars : 4.65,
            total : "(93)",
        },
    }, 
    {
        img : "public/image/review-3.png",
        content : "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",

        user : {
            img : "public/image/avatar-3.png",
            name : "Lew Silvertonh",
            position : "Chief Editio",
            stars : 4.55,
            total : "(32)",
        },
    } 
]
 

 export const Reviews = () => {
  return (
    <div style={{paddingTop : "20px"}} className='container'> 
        <h1 className=' text-center fw-bold mb-5'>Recent Reviews</h1>

        <Row>
            {reviews.map(({img , content , name , user},i)=>(
                <Col key={i} md={4}>
                    <div className="card border-0" style={{width: "25rem"}}>
                        <img src={img} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title fw-bolder">{name}</h5>
                            <p className="card-text opacity-50">{content}</p>
                            <div className="d-flex align-items-center mt-3">

                                <img src={user.img} className="rounded-circle me-3"
                                style={{width: "50px" , height : "50px"}} alt="" />
                                
                                <div className="flex-grow-1">
                                     <h6 className="mb-0 fw-bold">{user.name}</h6>
                                     <small className="text-muted">{user.position}</small>
                                </div>
                                
                                <div className="d-flex align-items-center ms-auto">
                                  <span className="text-warning fw-bold">⭐</span>
                                   <span className="ms-1 fw-bold">{user.stars}</span>
                                   <span className="ms-2 text-muted">{user.total}</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                </Col>
            ))}
        </Row>
    </div>
  )
}

 