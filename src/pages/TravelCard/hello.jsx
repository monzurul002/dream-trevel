import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import TravelDetails from "../TravelDetails/TravelDetails";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
const TravelCard = () => {
    const travelInfo = useLoaderData();
    console.log(travelInfo);

    return (
        <Container >
            <marquee className=" bg-black"> <h2 className="text-warning bg-black">Stays in Cox's Bazar. Get Upto 50% discount!!</h2></marquee>
            <Row>
                <Col>{
                    travelInfo.map(travel => {
                        return <TravelDetails
                            key={travel.id} travel={travel}
                        >

                        </TravelDetails>
                    })
                }</Col>
                <Col>

                </Col>
            </Row>
        </Container>
    );
};

export default TravelCard;