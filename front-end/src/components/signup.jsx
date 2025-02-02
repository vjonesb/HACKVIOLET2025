import { useState, useEffect } from 'react';
import "./signup.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/')
  }

  const userData = {
    email, 
    password,
    username,
  }



  return (
    <div>
      <h1>Submit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSubmit}> Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;