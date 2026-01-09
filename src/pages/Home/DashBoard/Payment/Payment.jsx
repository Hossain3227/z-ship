import { Elements } from '@stripe/react-stripe-js';
import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import PaymenForm from './PaymenForm';


const stripePromise = loadStripe(import.meta.env.VITE_payment_Key); 
const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymenForm></PaymenForm>
        </Elements>
    );
};

export default Payment;