import React from 'react'
import Header from '../components/Header'
import Image from "next/image";
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import Currency from "react-currency-formatter"
import { useSession } from 'next-auth/client';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
    const [session] = useSession();
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);


    //calls backend to create a checkout session
    const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post(`/api/create-checkout-session`, {
        items: items,
        email: session.user.email
    });

    // redirects user to the stripe checkout
    const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id
    });
    if(result.error){
        alert(result.error.message);
    }
    };
    
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">


            <div className="flex-grow m-5 shadow-sm">
                <Image src="https://links.papareact.com/ikj"
                width={1020}
                height={250}
                objectFit="contain" />
                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-3xl border-b pb-4">
                        {items.length === 0 ? "Your Shopping Cart is Empty" : "Your Shopping Cart"}
                    </h1>
                    {items?.map((item, i) => (
                        <CheckoutProduct 
                        key={i}
                        id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                rating={item.rating}
                        />
                    ))}
                </div>
                 </div>


            <div className="flex flex-col flex-grow bg-white p-10 shadow-md" >
                {items.length > 0 && (
                    <>
                    <h2 className="whitespace-nowrap">Subtotal ({items.length} {items.length>1 ? "items" : "item"}): {' '}  
                    <span className="font-bold">
                        <Currency currency="USD" quantity={total} />
                    </span>
                    </h2>
                    <button 
                    onClick={createCheckoutSession}
                    role="link"
                    disabled={!session}
                    className={`button mt-2 ${
                        !session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                        {!session ? "Sign in to checkout" : "Proceed to checkout"}
                        </button>
                    </>
                )}
            </div>

            </main>
        </div>
    )
}

export default Checkout