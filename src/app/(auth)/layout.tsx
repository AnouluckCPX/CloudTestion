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
                    {/* <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div> */}
                    <div className='pt-[3rem] pl-[4rem] absolute flex items-center'>
                        <div className='pr-3'>
                            <Image src='/static/images/landing/home-landing.svg' alt="home-landing" width={20} height={20} />
                        </div>
                        <Link href="/" className="text-white font-bold pt-1">Back Home</Link>
                    </div>

                    {children}

                    {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div> */}
                </div>

            </section>
            <style jsx global>
                {`
                    .login-bg{
                        position: relative;
                        margin: 0;
                        background-size: cover;
                        background-image: url("/static/images/landing/bg-login.png");
                    }
                `}
            </style>
        </>
    )
}

