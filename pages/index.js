import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import logo from '../assets/images/homepage.png'

export default function Home() {
  console.log(logo); 
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Vital Signs Delano" />
        <Image
          src={logo}
          alt="Picture of the author"
        />
        <p className="description">
        </p>
      </main>

      <Footer />
    </div>
  )
}
