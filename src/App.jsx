import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import PetsPage from './pages/PetsPage';
import Registration from './pages/RegistrationPage';
import Login from './pages/LoginPage';
import { AppContext } from './store/AppContext';
import './app.css';
import Cart from './pages/CartPage';
import Order from './pages/OrderPage';

function App() {
  const { authState, setAuthState } = useContext(AppContext);

  const logout = () => {
    setAuthState(false);
  };
  return (
    <div>
      <header>
        <div className="wrap">
          {authState && <h1>Приветствую вас на сайте!</h1>}
          <p>
            <Link className="link" to="/">
              Главная страница
            </Link>
          </p>
          <p>
            {authState && (
              <Link className="link" to="/favorites">
                Корзина
              </Link>
            )}
          </p>
          <p>
            {authState && (
              <Link className="link" to="/order">
                Оформленные заказы
              </Link>
            )}
          </p>
          <p>
            {!authState && (
              <Link className="link" to="/reg">
                Регестрация
              </Link>
            )}
          </p>
          <p>
            {!authState && (
              <Link className="link" to="/login">
                Войти
              </Link>
            )}
          </p>
          {authState && (
            <button className="link" onClick={() => logout()}>
              Выйти из аккаунта
            </button>
          )}
        </div>
      </header>
      <Routes>
        <Route path="/reg" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PetsPage />} />
        <Route path="/favorites" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
