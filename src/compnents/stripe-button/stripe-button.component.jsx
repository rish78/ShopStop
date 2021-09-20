import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss'


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JbozjSDzj93c1wat2Xm9BV6kmHj0FXIl4S2tUkkzNg47GXA0MIUN47Uswa4Kma5b6eyWhLayOe1UjlLXRp694PV00MOBDxD6K'

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='ShopStop'
            billingAddress
            shippingAddress
            image ='https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token= {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;