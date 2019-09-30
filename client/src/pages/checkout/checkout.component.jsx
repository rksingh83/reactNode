import React from 'react';
import './checkout.style.scss'
import {connect} from 'react-redux'
//import {calculateTotalPrice}  from '../../redux/cart/cart.items.select' ;
import {selectCartItems,calculateTotalPrice} from '../../redux/cart/cart.items.select'
import {createStructuredSelector } from 'reselect'
import CartItem from '../../components/cart-item/cart-item.component';
import CheckoutItem from  '../../components/checkout-item/checkout-item.component'  



const CheckOut = ({cartItems,totalPrice})=>(

   <div className ='cart-page'>
   <div className ="checkout-header">
   <div className ='header-block'>
   <span>Product</span>
   </div>
   
   <div className ='header-block'>
   <span>Description</span>
   </div>

   <div className ='header-block'>
   <span>Quantity</span>
   </div>

   
   <div className ='header-block'>
   <span>Price</span>
   </div>


   <div className ='header-block'>
   <span>Remove</span>
   </div>

   

   </div>
   {cartItems.map(item=><CheckoutItem key={item.id} cart={item}/>)}

   
   </div>
)

const mapStateToProps =  createStructuredSelector({
   cartItems :selectCartItems,
   totalPrice :calculateTotalPrice
})


export default connect(mapStateToProps)(CheckOut);