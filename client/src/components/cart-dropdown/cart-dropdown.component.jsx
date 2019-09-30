import React from 'react';
import {connect} from 'react-redux'
import CustomButtom from '../custom-button/custom-button.componenet';
import './cart-dropdown.style.scss';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import CartItem  from '../cart-item/cart-item.component'
import {withRouter} from 'react-router-dom'

const CartDropdown = ({cartItems,history, dispatch})=>{
  console.log()
 return (
  <div className = 'cart-dropdown'>

  <div className ='cart-items'>{
     
     cartItems.length>0 ? (
    cartItems.map(item=>(<CartItem key ={item.id} item={item}></CartItem>))
     ) :(<span className ='empty-cart'>Your Cart is empty</span>)
  }   </div>
  <CustomButtom onClick ={()=>{history.push('/checkout');
     dispatch(toggleCartHidden())
}}>Go To Checkout</CustomButtom>
  </div>
 )};

const mapStateToProps = ({cart:{cartItems}})=>({cartItems})

export default withRouter(connect(mapStateToProps)(CartDropdown))