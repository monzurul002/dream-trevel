import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png";
import "./NavigationBar.css"
import { Link } from 'react-router-dom';
const NavigationBar1 = () => {

    return (

        <Container className='  ' >
            <Navbar expand="lg" >
                <div className='d-flex flex-grow-1 align-items-center'>
                    <Navbar.Brand href="#home" >
                        <img
                            src={logo}
                            width="90"
                            height="40"
                            className="d-inline-block  align-top white-image"
                            alt="React Bootstrap logo"

                        />
                    </Navbar.Brand>
                </div>

                <div className='fw-3  '>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link className='mx-3 font-weight-bold ' href="#action1">News</Nav.Link>
                            <Nav.Link className='mx-3 ' href="#action2">Destination</Nav.Link>

                            <Nav.Link href="#" className='mx-3 font-weight-bolder ' > Blog </Nav.Link>
                            <Nav.Link href="#" className='mx-3  ' >  Contact </Nav.Link>
                            <Link to="/login" className="btn btn-warning">Login</Link>
                        </Nav>


                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Container>

    );
};

export default NavigationBar1;