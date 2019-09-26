import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './preview.style.scss';
                       
const ComponentPreview  = ({title,items,restparem})=>{
  console.log(restparem)
return(
 <div className ='conlection-preview'>
 <h1 className='title'>{title.toUpperCase()}</h1>
 <div className ='preview'>
 {restparem.items.filter((item,index)=>index<4)
 .map((item)=>(
<CollectionItem key={item.id} item = {item}/>
 ))
}
 </div>
 </div>
)
}

export default ComponentPreview;