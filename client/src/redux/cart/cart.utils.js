export const addQuentyToItem = (cartItems , currentItem)=>{
   const isExist =  cartItems.find(item=>item.id===currentItem.id);

   if(isExist){
    return cartItems.map((item)=>
         (item.id === currentItem.id) ? {...item,quantity:item.quantity+1} :item
        
     )
   }
   return [...cartItems,{...currentItem,quantity:1}];
}

export const removeCartItem = (cartItems,currentItem)=>{
   const itemExist = cartItems.find(item=>item.id === currentItem.id);
   if(itemExist.quantity === 1){
      return cartItems.filter((item)=>item.id !== currentItem.id )
   }
   return cartItems.map((item)=>
   (item.id === currentItem.id) ? {...item,quantity:item.quantity-1} :item
  
)
}