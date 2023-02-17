import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { AppContext, AppProvider } from '../../store/AppContext';
import './login.css';

const Login = () => {
  const { authState, setAuthState, users } = useContext(AppContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setPasswordError(false);
    setLoginError(false);
    if (name.length >= 8 && password.length >= 8) {
      let user = users.find((x) => x.name === name);
      console.log(user);
      if (user !== undefined && user.password === password) {
        setAuthState(true);
        navigate('/');
      } else {
        setLoginError(true);
      }
    } else {
      if (name.length <= 8) {
        setNameError(true);
      }
      if (password.length <= 8) {
        setPasswordError(true);
      }
    }
  };

  return (
    <div className="login">
      <form action="" className="login__form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          className={`input ${nameError ? 'error' : ''}`}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {nameError && <p style={{ color: 'red' }}>Поле введено не верно</p>}
        <input
          type="password"
          placeholder="Password"
          className={`input ${passwordError ? 'error' : ''}`}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && <p style={{ color: 'red' }}>Поле введено не верно</p>}
        {loginError && <p style={{ color: 'red' }}>Имя или пароль неправильны</p>}
        <button type="submit" className="button log">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
