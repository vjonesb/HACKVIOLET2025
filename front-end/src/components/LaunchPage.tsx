import React from 'react';
import './launch.css';

function LaunchPage() {
    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate('/signup')
    }

    return (
        <div>
            <h1> EchoSpace</h1>
            <p> a world for girls to support girls </p>
            <div className="container">
                <button> Log In </button>
                <button> Signup →
                    <ArrowForwardIcon />
                </button>
            </div> 
        </div>  
    );
}
export default LaunchPage;