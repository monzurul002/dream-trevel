import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import facebook from "../../assets/images/icons/fb.png"
import google from "../../assets/images/icons/google.png"
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useState } from 'react';

const Register = () => {
    const { googleSignIn, emailPasswordCreateUser, userInfoUpdate, emailVerify } = useContext(AuthContext)
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate("/")
                }
            })
            .catch(error => {
                setError(error.message)
            })
    }
    //email password signUp

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const first = form.first.value;
        const last = form.last.value;
        const fullName = first + " " + last;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            return setError("Passowrd doen't match ")
        }


        emailPasswordCreateUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                userInfoUpdate(fullName)
                    .then(() => {
                        navigate("/")
                    })
                    .catch((error) => {
                        console.log(error.message);
                    })

                emailVerify()
                    .then(() => {

                    })
            })
            .catch(error => {
                setError(error.message);
            })

    }



    return (
        <div>
            <div className='w-50 mx-auto   border p-5 '>
                <Form onSubmit={handleCreateUser}>
                    <h2 className='text-center my-2'>Register</h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="first" placeholder="Enter first name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLast">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="last" placeholder="Enter last name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirm" placeholder=" Confirm Password" required />
                    </Form.Group>
                    {/* error show */}
                    <Form.Text className="text-muted text-danger">
                        {error}
                    </Form.Text>
                    <Form.Group className="mb-3 d-lg-flex justify-content-between" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                        <Link>Forgot Password?</Link>
                    </Form.Group>
                    <Button variant="primary" className='w-100 btn my-2 border-0 text-black fw-bold bg-warning' type="submit">
                        Register
                    </Button>
                </Form>
                <div className='text-center'>
                    <p>Have an account? <Link to="/login">Login</Link></p>
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
                <div onClick={handleGoogleSignIn} className='border mt-3 d-flex justify-content-around w-50 mx-auto p-2 rounded-4'>
                    <img src={google} width="30" alt="" />

                    <small className='fw-bold'> Continune with Google</small>

                </div>


            </div>
        </div>
    );
};

export default Register;