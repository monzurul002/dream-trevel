import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import facebook from "../../assets/images/icons/fb.png"
import google from "../../assets/images/icons/google.png"
const Login = () => {
    return (
        <div className='w-50 mx-auto   border p-5 '>
            <Form>
                <h2 className='text-center my-2'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Form.Group className="mb-3 d-lg-flex justify-content-between" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                    <Link>Forgot Password?</Link>
                </Form.Group>
                <Button variant="primary" className='w-100 btn my-2 border-0 text-black fw-bold bg-warning' type="submit">
                    Login
                </Button>
            </Form>
            <div className='text-center'>
                <p>Don't have an account? <Link to="/register">Create an account.</Link></p>
            </div >
            <div className=' d-flex'>
                <div className='w-50 border-top mt-4'>

                </div>

                <small className='fs-2 text-secondary mx-2 mb-5 d-block'>or</small>
                <div className='w-50 border-top mt-4 '>

                </div>
            </div>
            <div className='border d-flex justify-content-around w-50 mx-auto p-2 rounded-2'>
                <img src={facebook} width="30" alt="" />

                <small className='fw-bold'> Continune with facebook</small>

            </div>
            <div className='border mt-3 d-flex justify-content-around w-50 mx-auto p-2 rounded-4'>
                <img src={google} width="30" alt="" />

                <small className='fw-bold'> Continune with Google</small>

            </div>


        </div>


    );
};

export default Login;