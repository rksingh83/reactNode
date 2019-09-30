import React from 'react';
import './checkout-item.style.scss' ;
import {clearCartItem,addCartItem,removeCartItem} from '../../redux/cart/cart.actions'
import {connect}from 'react-redux' ;

const CheckoutItem = ({cart,clearItem,removeCartItem,addCartItem})=>{              
 const {imageUrl,name,quantity,price}  = cart
  return(
 <div className ='checkout-item'>
 <div className ='image-container'>
 <img src ={imageUrl}></img>
 </div>
 <span className ='name'>{name}</span>
 <span className ='quantity'>
 <div className ='icon' onClick={()=>removeCartItem(cart)}>&#10094;</div>
 <span className ='value'>{quantity}</span>
 <div className ='icon' onClick={()=>addCartItem(cart)}>&#10095;</div>
 </span>
 <span className ='price'>${price}</span>

 <span className ='remove-button' onClick={()=>clearItem(cart)}>&#10008;</span>



 </div>
)};

const mapDispatchToProps = dispatch=>({
 clearItem:item =>dispatch(clearCartItem(item)),
 addCartItem:item =>dispatch(addCartItem(item)),
 removeCartItem:item =>dispatch(removeCartItem(item)),

}
)

export default connect(null,mapDispatchToProps)(CheckoutItem)