import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './preview.style.scss';
import selectSection from '../../redux/directory/directory-selectors'    ;
import {connect}   from 'react-redux'    ;
//import {select}              
const ComponentPreview  = ({title,items,restparem})=>{
 
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