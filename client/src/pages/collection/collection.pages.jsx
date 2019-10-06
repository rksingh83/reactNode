import React from  'react' ;
import {selectCollection} from '../../redux/shop/shop.selector' ;
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import  './collection.page.style.scss' ;
const collectionPage  = ({collection})=>{
    console.log('page+++++',collection)
return(
<div className ="collection-page">            
{collection.items.map(item=><CollectionItem item={item}/>)}
</div> 
)
}

const mapStateToProps = (state,ownProps)=>({
   collection :selectCollection(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(collectionPage)