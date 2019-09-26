import {createSelector } from 'reselect';


const selectCart = (state) =>state.cart

export const selectCartItems = createSelector([selectCart],(cart)=>cart.cartItems);

export const cartItemCount = createSelector([selectCartItems],cartItems=>cartItems.reduce((count,cartItem)=>(
                  count+cartItem.quantity)
                  ,0)

                  )