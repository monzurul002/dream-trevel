import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "react-google-flight-datepicker/dist/main.css";
import {
    RangeDatePicker
} from "react-google-flight-datepicker";
import { Link } from "react-router-dom";
const Booking = () => {
    return (
        <div>
            <Container className="text-white py-5">
                <Row>
                    <Col className="col-5">

                        <h1>COXS BAZAR</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa neque ullam hic atque quia tempore magni ducimus? Natus, deleniti enim excepturi quod repellat nostrum maiores sit voluptatum velit deserunt eaque consequatur libero rerum earum similique porro soluta culpa. Quod illo a corrupti nulla non porro voluptas dicta iste consequuntur rerum?</p>
                        <Button variant="btn btn-warning">Booking</Button>
                    </Col>
                    <Col className="col-7 ">
                        <div className="mx-5 bg-info p-3 w-75">
                            <Form.Label className="font-weight-bold" htmlFor="inputPassword5">From</Form.Label>
                            <Form.Control type="text" className="py-3" placeholder="Normal text" />
                            <Form.Label htmlFor="inputPassword5">Destianation</Form.Label>
                            <Form.Control type="text" className="py-3 mb-3" placeholder="Normal text" />
                            <RangeDatePicker
                                startDate={new Date(2023, 0, 1)}
                                endDate={new Date(2024, 1, 1)}

                            />
                            <Link className="btn btn-warning w-100 font-weight-bold py-3 my-3"  >Start Booking</Link>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Booking;