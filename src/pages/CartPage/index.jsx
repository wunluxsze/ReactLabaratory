import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import './favorie.css';
import Loading from '../../components/Loading';
import api from '../../api/api';
import { Link } from 'react-router-dom';

function Cart() {
  const { favorites, setFavorites, order, setOrder } = useContext(AppContext);
  function addObj(id) {
    setFavorites(
      favorites.map((item) => {
        if (item.id === id) {
          item.count = ++item.count;
          return item;
        } else {
          return item;
        }
      }),
    );
  }
  function reduce(id) {
    setFavorites(
      favorites.map((item) => {
        if (item.id === id) {
          item.count = --item.count;
          return item;
        } else {
          return item;
        }
      }),
    );
  }
  const deleteObj = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
    api.deleteObj();
  };

  const orderObj = (item) => {
    setOrder([...order, favorites]);
    setFavorites([]);
  };

  return (
    <div className="favorite__wrapper">
      {favorites.map((item, id) => {
        if (item.count <= 0) {
          return null;
        }
        return (
          <div className="like">
            <p className="title">{item.name}</p>
            <p>количество: {item.count}</p>

            <div className="order_wrap">
              <button className="add" onClick={() => addObj(item.id)}>
                +
              </button>
              <button className="reduce" onClick={() => reduce(item.id)}>
                -
              </button>
              <button className="delete" onClick={() => deleteObj(item.id)}>
                Удалить
              </button>
            </div>
          </div>
        );
      })}
      {favorites.length > 0 && (
        <button className="orderObj">
          <Link className="order_link" to="/order" onClick={() => orderObj()}>
            Оформить заказ
          </Link>
        </button>
      )}
    </div>
  );
}

export default Cart;
