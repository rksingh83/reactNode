import React from 'react';

import './App.css';
import HomePage from './homepage.component';
import {Switch,Route,Redirect} from 'react-router-dom';
import   './homepage.style.scss';
import Shop from './components/shop/shop.component'
import Header from './components/header/header.component';
import LoginPage from './components/login/login.page';
import {auth,createUserProfleDocument} from './firebase/firebase.utilis';
import CheckOut from './pages/checkout/checkout.component'
  
import {connect} from 'react-redux'
class App extends React.Component{
 //#endregio
 constructor(){
   super();
   this.state={
     currentUser:''
   }
 }

 unsubscribeAuth = null;

 componentDidMount(){
  //  this.unsubscribeAuth = auth.onAuthStateChanged(async authUser=>{
  //    if(authUser){
  // const userRef =  await createUserProfleDocument(authUser);
  // userRef.onSnapshot((snapshot)=>{
  //   console.log(snapshot.data());
  //   this.setState({
  //     currentUser:{
  //       // id:snapshot.id,
  //       // ...snapshot.data()
  //     }
  //   })
  // })
  //    }
  //  })
 }


  render(){
  return (
    <div className="App">
    <Header/>
    <Switch>
    <Route exact path ='/' component={HomePage}/>
    <Route path ='/shop' component ={Shop}/>
    <Route  exact path ='/checkout' component ={CheckOut}/>
    <Route  exact path ='/login' render ={()=>(this.props.currentUser ? (<Redirect to ='/'/>):(<LoginPage/>))}/>
    </Switch>

    </div>
  );
  }
}

const mapStateToProps = ({user})=>({
   currentUser :user.currentUser
})
export default  connect(mapStateToProps)(App);
