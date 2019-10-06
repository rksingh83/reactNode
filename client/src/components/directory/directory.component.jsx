import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import {connect} from 'react-redux' ;
import {selectSection} from '../../redux/directory/directory-selectors'
const Directory  = ({sections,...restPrpos})=>{
   
   return(
     <div className='directory-menu'>
          {sections.map(({title,id,imageUrl,size})=>
          (
             <MenuItem key={id} title={title}
             imageUrl={imageUrl}
             size ={size}
             subtitle='shopNow' 
             restParam ={restPrpos}

             />
          )
          )}
     </div>             
     )
}
const MapStateToProps = state=>({sections:selectSection(state)})
export default connect(MapStateToProps)(Directory); 
