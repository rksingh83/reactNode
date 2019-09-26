export const addQuentyToItem = (cartItems , currentItem)=>{
   const isExist =  cartItems.find(item=>item.id===currentItem.id);

   if(isExist){
    return cartItems.map((item)=>
         (item.id === currentItem.id) ? {...item,quantity:item.quantity+1} :item
        
     )
   }
   return [...cartItems,{...currentItem,quantity:1}];
}