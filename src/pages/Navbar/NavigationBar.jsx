import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png";
import "./NavigationBar.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Button } from 'react-bootstrap';
const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    if (user?.emailVerified) {
        alert("wow verified")
    }
    return (

        <Container className=' ' >
            <Navbar expand="lg" className="text-light">
                <div className='d-flex flex-grow-1 align-items-center'>
                    <Navbar.Brand href="#home" >
                        <img
                            src={logo}
                            width="90"
                            height="40"
                            className="d-inline-block  align-top white-image"
                            alt="React Bootstrap logo"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </Navbar.Brand>
                    <Form className=" ms-5">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 text-white"
                            aria-label="Search"
                        />

                    </Form>
                </div>


                <div className='fw-3  '>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link className='mx-3 font-weight-bold text-white' href="#action1">News</Nav.Link>
                            <Nav.Link className='mx-3 text-white' href="#action2">Destination</Nav.Link>

                            <Nav.Link href="#" className='mx-3 font-weight-bolder text-white ' > Blog </Nav.Link>
                            <Nav.Link href="#" className='mx-3 text-white ' >  Contact </Nav.Link>
                            {
                                !user ? <Link to="/login" className="btn btn-warning">Login</Link> : <>
                                    <h6 className='text-danger'>{user?.displayName}</h6>
                                    <Button onClick={logOut} className="btn btn-danger">Logout</Button></>
                            }
                        </Nav>


                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Container>

    );
};

export default NavigationBar;