import React from 'react' ;
import {connect} from 'react-redux' ;
import axios from 'axios' ;
import {selectUser} from '../../redux/user/user.selectors'


   const Orders = ()=>{
   return(
   <div className ='orders'>List</div>
   )               
}
const mapStateToPros = (state)=>({user:selectUser(state)})
export default connect(mapStateToPros)(Orders);