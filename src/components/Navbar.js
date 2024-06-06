import React from 'react';
import '../sass/style.css';
import cart from'../photos/cart.png';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                Powrót
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <img className='imgr' src={cart}/>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;