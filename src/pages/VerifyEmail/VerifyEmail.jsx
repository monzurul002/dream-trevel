import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    if (user?.emailVerified) {
        return navigate('/')
    }
    return (
        <div>
            <h3 className='text-center text-danger'>Hey{user?.displayName}, please verify email first.</h3>
        </div>
    );
};

export default VerifyEmail;