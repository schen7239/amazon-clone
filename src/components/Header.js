import React from 'react'
import Image from "next/image";
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client"
import {useRouter, } from "next/router";
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image 
            onClick={()=>router.push('/')}
            className="cursor-pointer"
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            />
            </div>
            <div className="hidden sm:flex h-10 items-center bg-yellow-400 hover:bg-yellow-500 rounded-md flex-grow cursor-pointer">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none px-4" />
                <SearchIcon className="h-12 p-4" />
            </div>

            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div className="link"
                onClick={!session ? signIn : signOut}
                >
                    <p>
                        {session ? `Hello, ${session.user.name}` : 'Hello, Sign In'}
                    </p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>
                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                <div onClick={() => router.push('/checkout')} className="relative link flex items-center">
                    <span className="absolute top-0 right-0 md:right-8 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">{items.length}</span>
                    <ShoppingCartIcon className="h-10"
                    
                    />
                    <p className="font-extrabold md:text-sm hidden md:inline">Cart</p>
                </div>
            </div>
            </div>
            
            <div className="flex items-center p-2 pl-6 space-x-3 bg-amazon_blue-light text-white text-sm h-12">
                <p className="flex items-center hover-border">
                <MenuIcon className="h-6 mr-1" />All
                </p>
                <p className="hover-border">Prime Video</p>
                <p className="hover-border">Amazon Business</p>
                <p className="hover-border">Today's Deals</p>
                <p className="hidden hover-border lg:inline-flex">Electronics</p>
                <p className="hidden hover-border lg:inline-flex">Food & Grocery</p>
                <p className="hidden hover-border lg:inline-flex">Prime</p>
                <p className="hidden hover-border lg:inline-flex">Buy Again</p>
                <p className="hidden hover-border lg:inline-flex">Shopper Toolkit</p>
                <p className="hidden hover-border lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
