import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { AppContext, AppProvider } from '../../store/AppContext';
import { useNavigate } from 'react-router';
import './reg.css';
import uuid from 'react-uuid';

const Registration = () => {
  const { authState, setAuthState, users, setUsers } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setNameError(false);
    setPasswordError(false);
    if (name.length >= 8 && password.length >= 8) {
      navigate('/login');
      setUsers([...users, { id: uuid(), name: name, password: password }]);
    } else {
      if (name.length <= 8) {
        setNameError(true);
      }
      if (password.length <= 8) {
        setPasswordError(true);
      }
    }
  }

  return (
    <div className="register">
      <form action="" className="register__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className={`input ${nameError ? 'error' : ''}`}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {nameError && <p style={{ color: 'red' }}>Длина должна быть больше 8 символов</p>}
        <input
          type="Email"
          placeholder="Email"
          className="input"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={`input ${passwordError ? 'error' : ''}`}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && <p style={{ color: 'red' }}>Длина должна быть больше 8 символов</p>}
        <button type="submit" className="button log">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
