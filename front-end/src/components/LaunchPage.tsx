import React from 'react';
import './launch.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function LaunchPage() {
    return (
        <div>
            <h1> EchoSpace</h1>
            <p> a lil world for girls to support girls </p>
            <div className="container">
                <button> Log In </button>
                <button> Signup 
                    <ArrowForwardIcon />
                </button>
            </div> 
        </div>  
    );
}
export default LaunchPage;