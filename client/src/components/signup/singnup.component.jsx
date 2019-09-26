import React from 'react';
import Forminput from '../forminput/forminput.component';
import CustomButton from '../custom-button/custom-button.componenet';
import axios from 'axios'


class SingnUp extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       name:'',
       email:'',
       password:'',
       cnfpass:''

     }
   }
    handleChange = (e)=>{
      const {name,value} =(e.target) ;
      console.log(this)
    
      this.setState({[name]:value}) 
       
   }
   handleSubmit = (e)=>{
     e.preventDefault();
     const {name ,email ,password} = this.state ;
   const  user = {name,email,password}
     axios.post('http://localhost:5000/api/user',user)    
     .then((res)=>console.log(res)) 
       
   }
    ValidateInput = (e)=>{
     console.log(e)
    }

   render(){
    const {name,email,password,cnfpass} =this.state;
   return (
     
     <div className='sign-up'>
     <form onSubmit ={this.handleSubmit}>
        <Forminput label ='Name' value ={name} handleChange={this.handleChange} name='name' type='input'/>
        <Forminput label ='Email' value = {email} handleChange={this.handleChange} type ='email' name='email'/>
        <Forminput label ='Passward' value = {password} handleChange={this.handleChange} type='password' name='password'/>
        <Forminput label ='Confirm-Password' value = {cnfpass} handleChange={this.handleChange} type='password' name='cnfpass'/>
        <div className ='btn-group'>
        <CustomButton>SignUp</CustomButton>
        </div>
     </form>
     </div>
   );
   }

}
export default SingnUp