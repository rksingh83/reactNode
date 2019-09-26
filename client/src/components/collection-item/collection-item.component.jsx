import React from 'react';
import './collection-item.style.scss';
import '../previewcomponent/preview.style.scss';
import CustomButton from '../custom-button/custom-button.componenet'
import {connect} from 'react-redux';
import {addCartItem} from '../../redux/cart/cart.actions'
const CollectionItem = (props)=>{
   console.log('prps')
   console.log(props)
  const {name,imageUrl, price} = props.item  ;
   return(
<div className="collection-item">
<div className ="image" style={{backgroundImage:`url(${imageUrl})`}}></div>
<div className  ="collection-footer">
<span className ='name'>{name}</span>
<span className ='price'>${price}</span>
</div>
<CustomButton onClick ={()=>props.addCartItem(props.item)} inverted> Add To Cart</CustomButton>
</div>
   )
}
const mapDispatchToProps = dispatch=>({
   addToCart:(item)=>dispatch(addCartItem(item))
})
export default connect(null,{addCartItem})(CollectionItem );