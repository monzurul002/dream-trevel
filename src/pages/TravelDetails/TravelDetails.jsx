import { Card } from "react-bootstrap";
import star from "../../assets/images//icons/star_1_.png"
const TravelDetails = ({ travel }) => {

    const { title, rating, description, reviewNumber, imgUrl, cost } = travel;


    return (
        <div >

            <Card >
                <div className="row h-25">
                    <div className="col-md-6 ">
                        <Card.Img className="h-100" src={imgUrl} alt="Image" />
                    </div>
                    <div className="col-md-6">
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text className="text-secondary">{(description).slice(0, 50)}</Card.Text>
                            <div>
                                <img width="20" src={star} alt="" />
                                Rating: {rating}</div>
                            <div ><span className="fs-5 "> ${cost}</span> <span className="text-secondary">/night</span> </div>
                        </Card.Body>
                    </div>
                </div>
            </Card>

        </div>
    );
};

export default TravelDetails;