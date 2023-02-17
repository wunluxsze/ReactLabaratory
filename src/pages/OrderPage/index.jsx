import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import './order.css';

function Order() {
  const { order, setOrder } = useContext(AppContext);
  console.log(order);
  return (
    <div className="order__wrapper">
      {order.map((item) => {
        return (
          <div className="order">
            <h2>Заказ оформлен</h2>
            {item.map((itm) => {
              return (
                <>
                  <p className="title">Имя: {itm.name}</p>
                  <p className="count">количество: {itm.count}</p>
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Order;
