import React from 'react';
import './launch.css';
import { useNavigate } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function LaunchPage() {
    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate('/signup')
    }

    return (
        <div>
            <h1> EchoSpace</h1>
            <p> a lil world for girls to support girls </p>
            <div className="container">
                <button> Log In </button>
                <button onClick={handleSignupClick}> Signup 
                    <ArrowForwardIcon />
                </button>
            </div> 
        </div>  
    );
}
export default LaunchPage;