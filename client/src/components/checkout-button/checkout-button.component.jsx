import React from 'react' ;
import StripeCheckout from 'react-stripe-checkout';
import  {clearCart} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'

class StripeCheckoutButton extends React.Component{
     constructor(props){
       super(props)
       console.log(this.props)
       this.state ={
         price:this.props.price,
         history:this.props.history,
         clear:this.props.clearCart
       }
       console.log('')
     }
    
     onToken = token=>{
        console.log(token) ;
        alert('Payment Successfull') ;
        this.state.clear()
        this.state.history.push('/')
     }
    render(){
    const  priceForStripe = 100*this.state.price ;
    const {price} = this.state
    const  publishableKey = 'pk_test_hn4aBKvcfuX6oIEu6FrpeaqH00dlS6pSRI' ;
      console.log()
    return(
          <StripeCheckout
          label = 'Pay Now' 
          name ='Developer Point'
          billingAddress
          shippingAddress
          image =''
          description = {`Your Total amount ${price }`}
          panelLabel ='Pay Now'
          stripeKey ={publishableKey}
          token ={this.onToken}
          />
    )
    }
}
const mapDispatchToProps = dispatch=>({clearCart:()=>dispatch(clearCart())})
export default connect(null,mapDispatchToProps)(StripeCheckoutButton)