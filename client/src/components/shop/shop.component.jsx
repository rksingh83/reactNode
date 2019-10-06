
import React from  'react' ;
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {Route} from 'react-router-dom'
import collectionPage  from '../../pages/collection/collection.pages'

const Shop = ({match})=>{
{console.log(match)}
return(
   <div>
<Route exact path ={`${match.path}`} component={CollectionOverview}/>
<Route exact path ={`${match.path}/:category`} component={collectionPage}/>
</div>
)
}        
   
         

export default Shop;