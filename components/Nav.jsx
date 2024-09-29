"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
    //isUserLoggedIn is to bre replaced by actual session data
    //const isUserLoggedIn = true;

    const {data: session} = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropDown, setToggleDropDown] = useState(false);

    //Runs once to get Providers and set providers
    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
        setUpProviders();
    }, [])

  return (
    <nav className="flex-between w-full mb-4 pb-5 pt-3 bg-white sticky top-0 z-40">
        <Link href="/" className="flex gap-2">
            <Image src="/assets/icons/letter-p-256.png" alt="Portfolia Logo" width={30} height={30} className="object-contain"/>
            <p className="logo_text">ORTFOLIA</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            <div className="flex gap-3 md:gap-5">
                <Link className="icon_btn" href="https://www.linkedin.com/in/carlosulayao" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/linkedin.svg" alt="LinkedIn" width={28} height={28}className="mr-3"/>LinkedIn</Link>
                <Link className="icon_btn mr-5" href="https://github.com/csulayao" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/github.svg" alt="Github" width={30} height={30} className="mr-3"/> GitHub</Link>
            </div>
            {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-post" className="indigo_btn">Create Post</Link>
                    <button type="button" onClick={signOut} className="outline_btn">
                        Sign Out
                    </button>

                    <Link href="/profile">
                        <Image src={session?.user.image} width={30} height={30} className="rounded-full mt-2" alt="profile"/>
                    </Link>
                </div>
            ): (
                <>
                    {providers && 
                    Object.values(providers).map((provider) => 
                    (
                        <button  type="button" key={provider.name} onClick={() => signIn(provider.id)} className="indigo_btn">
                                Log In
                        </button>
                    ))}
                
                </>
            )}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
            <div className="flex gap-3 md:gap-5">
                <Link className="" href="https://www.linkedin.com/in/carlosulayao" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/linkedin.svg" alt="LinkedIn" width={30} height={30}/></Link>
                <Link className="mr-5" href="https://github.com/csulayao" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/github.svg" alt="Github" width={30} height={30}/></Link>
            </div>
            {session?.user ? (
                <div className="flex">
                    <Image src={session?.user.image} width={30} height={30} className="rounded-full" alt="profile" onClick={() => setToggleDropDown((prev) => !prev)}/>
                    {toggleDropDown && (
                        <div className="dropdown">
                            <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropDown(false)}>
                            My Profile
                            </Link>
                            <Link href="/create-post" className="dropdown_link" onClick={() => setToggleDropDown(false)}>
                            Create Post
                            </Link>
                            <button type="button" onClick={() =>{
                                setToggleDropDown(false);
                                signOut();
                            }}
                            className="mt-5 w-full indigo_btn">
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ): (
                <>
                {providers &&
                Object.values(providers).map((provider) => 
                (
                <button  type="button" key={provider.name} onClick={() => signIn(provider.id)} className="indigo_btn">
                        Log In
                </button>
                ))}
                </>
            )}
        </div>
    </nav> 
)
}

export default Nav