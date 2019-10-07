import React from 'react' ;
import StripeCheckout from 'react-stripe-checkout';

const onToken = token=>{
   console.log(token) ;
   alert('Payment Successfull') ;
}
const StripeCheckoutButton =({price})=>{
    const priceForStripe = 100*price ;
    const publishableKey = 'pk_test_hn4aBKvcfuX6oIEu6FrpeaqH00dlS6pSRI' ;
    return(
          <StripeCheckout
          label = 'Pay Now' 
          name ='Jai Hind Pvt'
          billingAddress
          shippingAddress
          image =''
          description = {`Your Total amount $${price}`}
          panelLabel ='Pay Now'
          stripeKey ={publishableKey}
          token ={onToken}
          


          />
    )
}

export default StripeCheckoutButton