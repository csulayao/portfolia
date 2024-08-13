"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16">
        <Link href="/" className="flex gap-2">
            <Image src="/assets/images/logo.svg" alt="Portfolia Logo" width={30} height={30} className="object-contain"/>
            <p className="logo_text">Portfolia</p>
        </Link>
        {/* Mobile Navigation */}
        <div className="sm:flex hidden">

        </div>
    </nav>    
)
}

export default Nav