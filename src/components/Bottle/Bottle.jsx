import React from 'react';
import './bottle.css'
const Bottle = ({bottle,handleCart}) => {
    const {img,name,price,seller,stock,ratingsCount}=bottle;
    // console.log(bottle);
    return (
        <div className='card size'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <strong>Seller: {seller}</strong>
            <br />
            <span>In Stock: {stock}</span>
            <p>5 star rating: {ratingsCount}</p>
            <button onClick={()=>handleCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;