import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const PaymenForm = () => {

    const stripe = useStripe();
  const elements = useElements();
  const [error,setError] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!stripe|| !elements){
            return;
    }
    const card = elements.getElement(CardElement);
    if(!card){
        return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if(error){
        // console.log('error',error);
        setError(error.message);
        
    }
    else{
        setError('');
        console.log('payment method', paymentMethod);
        
    }

  }



    return (
        <div>
            <form onSubmit={handleSubmit} className='space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto'>
            <CardElement className='p-2 border rounded'>
                </CardElement>
                <button
                className='btn btn-primary w-full'
                type='submit' disabled={!stripe}>Pay for parcel pick up</button>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
            
            </form>
        </div>
    );
};

export default PaymenForm;