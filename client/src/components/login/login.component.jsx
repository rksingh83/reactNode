import React from 'react';
import FormInput from '../forminput/forminput.component';
import CustomButton from '../custom-button/custom-button.componenet'
import {signInWithGoggle} from '../../firebase/firebase.utilis';
import axios from 'axios';
import {connect} from 'react-redux';
import  {setCurrentUser} from '../../redux/user/user.actions' ;


class Login extends React.Component{
constructor(props){
  super(props);
  console.log('props are here')
   console.log(this.props)
  this.state = {
     email:'',
     password:''
  }

}
handleSubmit =(e)=>{
   e.preventDefault();
   const {email, password} = this.state;
    const auth = {email,password}
   axios.post('/api/auth',auth)
   .then(res=>console.log(this.props.setCurrentUser(res.data)))
   this.setState({email:'',password:''});
}
handleChange =(e)=>{
    
    const {value , name} = e.target;
    this.setState({[name]:value})
}

  render(){
  return(
       <div className ='singn-form'>
            <form onSubmit={this.handleSubmit}>
             <FormInput label='Email' handleChange = {this.handleChange}  name='email' type='email' value ={this.state.email}/>
             
             <FormInput label ='Password' handleChange={this.handleChange} name='password' type='password' value ={this.state.password}/>
             <div className ='buttons'>
             <CustomButton type="submit">SIGN IN</CustomButton>
             <CustomButton onClick={signInWithGoggle} type="submit" signInWithGoggle>SIGN IN With Goggle</CustomButton>
            </div>
            </form>
       </div>                
  );
  }

}

const mapDispatchToProps = dispatch =>({setCurrentUser:user=>dispatch(setCurrentUser(user))})

export default connect(null,mapDispatchToProps)(Login);