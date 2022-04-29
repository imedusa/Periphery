import React, {useContext, useState} from 'react'
import Items from './Items'
import {Scrollbars} from 'react-custom-scrollbars-2'
import arrow from "../../images/arrow.png"
import cart from "../../images/cart.png"
import dummy from "../../images/dummy.jpg"
// import {products} from "./products"
import { CartContext } from './Cart'

const ContextCart = () => {

    // const [item, setItem] = useState(products);

    const {item, totalItem, totalAmount} = useContext(CartContext);

  return (
    <div>
        <header>
          <div className="continue-shopping">
              <img src = {arrow} alt = "arrow" className = "arrow-icon"/>
              <h3>Continue Shopping</h3>

          </div>
          <div className='cart-icon'>
              <img src = {cart} alt = "cart"/>
              <p>{totalItem}</p>
          </div>
      </header>
      <section className='main-cart-section'>
          <h1>Periphery Shopping Cart</h1>
          <p className='total-items'>You have <span className='total-items-count'>{totalItem}</span> items in your shopping cart.</p>

          <div className='cart-items'>
              <div className='cart-tems-container'>
                  <Scrollbars style={{width: 800, height: 500}}>

                      {
                          item.map((curItem) => {
                              return <Items key = {curItem.album_id}{...curItem}/>
                          })
                      }
                  </Scrollbars>
              </div>
          </div>

        <div>
            <div className='card-total'>
                <h3>Cart Total: <span>Rs.{totalAmount}</span></h3>
                <button>Check Out</button>
            </div>
        </div>

      </section>
    </div>
  )
}

export default ContextCart