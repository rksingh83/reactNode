import SHOP_DATA from './shop.data';
import React from  'react' ;
import ComponentPreview from '../previewcomponent/preview.component'



class Shop extends  React.Component{
   constructor(props){
    super(props);
    this.state ={
       collection :SHOP_DATA
    }
   } 
   render() {
    const items = this.state.collection;
     return(
        <div >
          {items.map(({id,title,...resparem})=><ComponentPreview key={id} title={title}  restparem={resparem}/>)}                
        </div>               
     )
   }             
}

export default Shop;