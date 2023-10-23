/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/Sajek.png"
import img2 from "../../assets/images/Sreemongol.png"
import img3 from "../../assets/images/sundorbon.png"
import "./Home.css"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <Container className="text-white py-5">
            <Row>
                <Col className="col-5">
                    <h1>COX'S BAZAR</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa neque ullam hic atque quia tempore magni ducimus? Natus, deleniti enim excepturi quod repellat nostrum maiores sit voluptatum velit deserunt eaque consequatur libero rerum earum similique porro soluta culpa. Quod illo a corrupti nulla non porro voluptas dicta iste consequuntur rerum?</p>
                    <Button variant="btn btn-warning"><Link className="btn" to="/booking">Booking</Link></Button>
                </Col>
                <Col className="col-7~">
                    <Row>
                        <Col>
                            <div className="image-container">
                                <img src={img1} className="w-100" alt="" />
                                <h3 className="font-weight-bold image-text">Saint Martin</h3>
                            </div>

                        </Col>
                        <Col> <div className="image-container">
                            <img src={img2} className="w-100" alt="" />
                            <h3 className="font-weight-bold image-text">Maldiv</h3>
                        </div>
                        </Col>
                        <Col><div className="image-container">
                            <img src={img3} className="w-100" alt="" />
                            <h3 className="font-weight-bold image-text">Sajek</h3>
                        </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
};

export default Header;