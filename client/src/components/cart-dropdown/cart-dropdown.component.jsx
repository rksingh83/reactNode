import React from 'react';
import {connect} from 'react-redux'
import CustomButtom from '../custom-button/custom-button.componenet';
import './cart-dropdown.style.scss';

import CartItem  from '../cart-item/cart-item.component'

const CartDropdown = ({cartItems})=>(
  <div className = 'cart-dropdown'>
  <div className ='cart-items'>{
    cartItems.map(item=><CartItem key ={item.id} item={item}></CartItem>)
  }
    </div>
  <CustomButtom>Go To Checkout</CustomButtom>
  </div>
);

const mapStateToProps = ({cart:{cartItems}})=>({cartItems})

export default connect(mapStateToProps)(CartDropdown)