import React from 'react'
import Header from '../_components/layoutlanding/Header'
import Footer from '../_components/layoutlanding/Footer'

type Props = {
    children: React.ReactNode
}

export default function Home({ children }: Props) {
    return (
        <section>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </section>
    )
}