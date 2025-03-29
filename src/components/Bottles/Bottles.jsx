import React, { useState } from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css'
import { addToStoreCart } from '../../utilities/utilities';
const Bottles = ({bottlesPromise}) => {
    const bottles=use(bottlesPromise);
    const [cart,setCart]=useState([]);

    const handleCart=(bottle)=>{
        console.log('card click',bottle);
        const newCart=[...cart,bottle];
        setCart(newCart);
        // Save to local storage
        addToStoreCart(bottle.id);
    }

    return (
        <div>
            <h1>Number of Bottles= {bottles.length}</h1>
            <h4>Added to Cart: {cart.length}</h4>
            <div className='container'>
            {
                bottles.map(bottle=> <Bottle 
                    bottle={bottle}
                    handleCart={handleCart}
                    key={bottle.id}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;