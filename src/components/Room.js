import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/house-1.jpg';
import { memo } from 'react';
const Room = memo(({ house }) => {
  const { name, slug, images, price } = house;
  return (
    <article className="house">
      <div className="img-container">
        <img
          className="houseImg"
          src={images[0] || defaultImg}
          alt="single house"
        />
        <div className="price-top">
          <h6>£{price}</h6>
          <p>asking price</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary house-link">
          features
        </Link>
      </div>
      <p className="house-info">{name}</p>
    </article>
  );
});

export default Room;
