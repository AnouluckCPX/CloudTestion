"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = { children: React.ReactNode; }

export default function AuthLayout({ children }: Props) {
    return (
        <>
            <section>
                <div className="relative isolate px-6 login-bg h-screen">
                    <div className='pt-[3rem] pl-[4rem] absolute flex items-center'>
                        <div className='pr-3'>
                            <Image src='/static/images/landing/home-landing.svg' alt="home-landing" width={20} height={20} />
                        </div>
                        <Link href="/" className="text-white font-bold pt-1">Back Home</Link>
                    </div>
                    {children}
                </div>
            </section>
            <style jsx global>
                {`
                    .login-bg{
                        min-height: 100vh;
                        position: relative;
                        margin: 0;
                        background-size: cover;
                        background-image: url("/static/images/landing/bg-login.jpg");
                    }
                `}
            </style>
        </>
    )
}

