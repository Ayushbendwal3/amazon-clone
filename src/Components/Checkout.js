import React from 'react'
import './css/Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
  const [{ cart }] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
          alt=""
        />
        {cart?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to Cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout
