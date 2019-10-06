import {createSelector} from 'reselect'

const COLLECTION_ID_MAP ={
hats:1,
sneakers:2,
jackets:3,
womens:4,
mens:5
}
const shopSeledctor =  (state)=> state.shop;

 export const  selectCollections = createSelector([shopSeledctor],(shop)=>shop.collections);

 export const selectCollection =categoryName=>createSelector([selectCollections],(shop)=>shop.find((item)=>
 item.id === COLLECTION_ID_MAP[categoryName])
 ) 