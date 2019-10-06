import React from 'react'
import ComponentPreview from '../previewcomponent/preview.component' ;


import {selectCollections} from '../../redux/shop/shop.selector'
import {connect} from  'react-redux'
import {createStructuredSelector} from 'reselect'


const CollectionOverview  = ({collections})=>{
                  return(<div> 
                  {collections.map(({id,title,...resparem})=><ComponentPreview key={id} title={title}  restparem={resparem}/>)} 
                  </div> ) 
}             
           




const mapStateToProps = createStructuredSelector({
                  collections  :selectCollections
                 })

                 export default connect(mapStateToProps)(CollectionOverview)
                