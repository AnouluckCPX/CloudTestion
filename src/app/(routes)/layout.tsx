import React from 'react'
import Header from '../_components/layoutlanding/Header'

type Props = {
    children: React.ReactNode
}

export default function Home({ children }: Props) {
    return (
        <section>
            <Header />
            <div className='mt-5'>
                {children}
            </div>
        </section>
    )
}