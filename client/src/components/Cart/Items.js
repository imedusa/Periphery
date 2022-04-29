import React, { useContext } from 'react'
import dummy from "../../images/dummy.jpg"
import { CartContext } from './Cart';


const Items = ({album_id, album_name, artist, img_url, price, alb_type, quantity}) => {

    const {removeItem, increment, decrement} = useContext(CartContext);

  return (
    <>
    <div className='items-info'>
    <div className='product-img'>
        <img src = {img_url}></img>
    </div>
    <div className='title'>
        <h2>{artist}</h2>
        <p>{album_name}</p>
    </div>
    <div className='add-minus-quantity'>
        <i className = "fas fa-minus" onClick = {() => decrement(album_id)}></i>
        <input type = "text" placeholder = {quantity}/>
        <i className = "fas fa-plus add" onClick = {() => increment(album_id)}></i>
    </div>

    <div className='price'>
        <h3>Rs.{price} ({alb_type}) per piece</h3>
    </div>

    <div className='remove-item'>
        <i className = "fas fa-trash-alt remove" 
        onClick = {() => removeItem(album_id)}></i>
    </div>
</div>
<hr/>
    </>
  )
}

export default Items