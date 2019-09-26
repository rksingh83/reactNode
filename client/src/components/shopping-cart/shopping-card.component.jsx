import React from 'react' ;
import  './shopping-cart.style.scss' ;
import {ReactComponent as ShoppingCartIcon} from  '../../assets/shopping-bag.svg' ;
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';
import {cartItemCount} from '../../redux/cart/cart.items.select'


const ShoppingCart = ({toggleCartHidden,cartItemCount})=>{
       console.log(toggleCartHidden) 
      return(
    <div className ='cart-icon'onClick = {toggleCartHidden}>
    <ShoppingCartIcon className ='shopping-icon'/>
    <span className ='item-count'>{cartItemCount}</span>
    </div>
)
}
const  mapStateToProps = (state)=>({cartItemCount:cartItemCount(state)})
const mapDispatchToProps = dispatch=>({toggleCartHidden:()=>dispatch(toggleCartHidden())})
export default connect(mapStateToProps,mapDispatchToProps) (ShoppingCart)
       



