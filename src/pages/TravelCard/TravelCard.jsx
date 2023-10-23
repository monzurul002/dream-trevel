import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import TravelDetails from "../TravelDetails/TravelDetails";
import * as React from 'react';
import Map from 'react-map-gl';

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
                    <Map
                        mapLib={import('mapbox-gl')}
                        initialViewState={{
                            longitude: -100,
                            latitude: 40,
                            zoom: 3.5
                        }}
                        style={{ width: 600, height: 400 }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default TravelCard;





// import { Col, Container, Row } from "react-bootstrap";
// import { useLoaderData } from "react-router-dom";
// import TravelDetails from "../TravelDetails/TravelDetails";
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
// import { Rectangle, useMapEvent } from "react-leaflet";
// import { useCallback, useMemo, useState } from "react";
// import { useEventHandlers } from '@react-leaflet/core'
// // Classes used by Leaflet to position controls
// const POSITION_CLASSES = {
//     bottomleft: 'leaflet-bottom leaflet-left',
//     bottomright: 'leaflet-bottom leaflet-right',
//     topleft: 'leaflet-top leaflet-left',
//     topright: 'leaflet-top leaflet-right',
// }

// const BOUNDS_STYLE = { weight: 1 }

// function MinimapBounds({ parentMap, zoom }) {
//     const minimap = useMap()

//     // Clicking a point on the minimap sets the parent's map center
//     const onClick = useCallback(
//         (e) => {
//             parentMap.setView(e.latlng, parentMap.getZoom())
//         },
//         [parentMap],
//     )
//     useMapEvent('click', onClick)

//     // Keep track of bounds in state to trigger renders
//     const [bounds, setBounds] = useState(parentMap.getBounds())
//     const onChange = useCallback(() => {
//         setBounds(parentMap.getBounds())
//         // Update the minimap's view to match the parent map's center and zoom
//         minimap.setView(parentMap.getCenter(), zoom)
//     }, [minimap, parentMap, zoom])

//     // Listen to events on the parent map
//     const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])
//     useEventHandlers({ instance: parentMap }, handlers)

//     return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
// }

// function MinimapControl({ position, zoom }) {
//     const parentMap = useMap()
//     const mapZoom = zoom || 0

//     // Memoize the minimap so it's not affected by position changes
//     const minimap = useMemo(
//         () => (
//             <MapContainer
//                 style={{ height: 10, width: 10 }}
//                 center={parentMap.getCenter()}
//                 zoom={mapZoom}
//                 dragging={false}
//                 doubleClickZoom={false}
//                 scrollWheelZoom={false}
//                 attributionControl={false}
//                 zoomControl={false}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
//             </MapContainer>
//         ),
//         [],
//     )

//     // const positionClass =
//     //     (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright
//     // return (
//     //     <div className={positionClass}>
//     //         <div className="leaflet-control leaflet-bar">{minimap}</div>
//     //     </div>
//     // )
// }

// function ReactControlExample() {
//     return (
//         <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false}>
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <MinimapControl position="topright" />
//         </MapContainer>
//     )
// }






// const TravelCard = () => {
//     const travelInfo = useLoaderData();


//     return (
//         <Container >
//             <marquee className=" bg-black"> <h2 className="text-warning bg-black">Stays in Cox's Bazar. Get Upto 50% discount!!</h2></marquee>
//             <Row>
//                 <Col>{
//                     travelInfo.map(travel => {
//                         return <TravelDetails
//                             key={travel.id} travel={travel}
//                         >

//                         </TravelDetails>
//                     })
//                 }</Col>
//                 <Col>
//                     <ReactControlExample />
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default TravelCard;