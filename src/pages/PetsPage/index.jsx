import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import api from '../../api/api';
import { AppContext, AppProvider } from '../../store/AppContext';
import './index.css';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

function PhotosPage() {
  const params = useParams();
  const { albums, setAlbums } = useContext(AppContext);
  const [photo, setPhoto] = useState(null);
  const { favorites, setFavorites } = useContext(AppContext);
  const { authState, setAuthState } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const res = await api.getPhotos(params.id);
      setPhoto(res);
      console.log(res);
    };
    fetch().finally(() => {
      setLoading(false);
    });
  }, []);

  const handleAddProductToCart = (item) => {
    console.log(item);
    let prod = {
      id: item.id,
      name: item.name,
      count: 1,
    };
    setFavorites([...favorites, prod]);
    const newCart = favorites.map((el) => {
      if (el.id === item.id) {
        let prodNew = {
          id: item.id,
          name: item.name,
          count: el.count + 1,
        };
        setFavorites(favorites.map((x) => (x.id === el.id ? prodNew : x)));
        console.log(prodNew);
      } else {
        console.log('uvcgdyvgwd hjyfgvhjgjug');
      }
    });
    // console.log(newCart);
  };

  if (loading || photo == null) {
    return <Loading />;
  }
  return (
    <div>
      {photo.map((item) => (
        <div className="wrapper">
          <p className="title">{item.name}</p>
          {authState && (
            <button className="button" onClick={() => handleAddProductToCart(item)}>
              Добавить в корзину
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default PhotosPage;
