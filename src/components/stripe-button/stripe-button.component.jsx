import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51KbfglSGUnpdS4nMpyIWvt4JNjrzQqMdnSn1rg0bcId9y8jjuvB9u7VsiAqq21OY7VBtFB4RlH5YOLwKFmPcrowI00ZQVAKNM6';

const  onToken = token => {
    console.log(token);
    alert('Payment Successful');
} 

   return (
       <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
       />
   );
};

export default StripeCheckoutButton;