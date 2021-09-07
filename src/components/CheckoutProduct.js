import React from 'react'
import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter"
import { useDispatch } from 'react-redux';
import {addToBasket, removeFromBasket} from "../slices/basketSlice";

function  CheckoutProduct({id, title, price, rating, description, category, image, hasPrime}) {
    const dispatch = useDispatch();
    const addItemToCart = () => {
        const product = {
            id, title, price, rating, description, category, image, hasPrime
        }
        dispatch(addToBasket(product));
    }
    const removeItemFromCart = () => {
        dispatch(removeFromBasket({id}));
    }
    return (
        <div className="grid grid-cols-5">
            <Image src={image}
            height={200}
            width={200}
            objectFit="contain"
            />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency='USD' />
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img src="https://links.papareact.com/fdw"
                        alt=""
                        className="w-12" 
                        loading="lazy"/>
                    <p className="text-xs text-gray-500">FREE 2-day Delivery</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-center">
                <button className="button"
                onClick={addItemToCart}>Add to Cart</button>
                <button className="button"
                onClick={removeItemFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
