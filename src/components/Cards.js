import React from 'react';
import '../sass/style.css';

const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Cena - {price}zł</p>
            <button onClick={()=>handleClick(item)} >Dodaj do koszyka</button>
        </div>
    </div>
  )
}

export default Cards;