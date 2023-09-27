import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import Logo from '@components/Logo'
import HomePage from '../assets/images/homepage.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Logo />
        <p className="description">
        </p>
      </main>

      <Footer />
    </div>
  )
}
