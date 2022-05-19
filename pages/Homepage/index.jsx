import Head from 'next/head'
import React from 'react'
import Banner from './components/Banner'
import Cards from './components/Cards'
import { H2 } from './styles'
import Footer from '../../components/Footer';

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <H2>Get started in 3 easy steps</H2>
      <Cards />
      <Footer />
    </>
  )
}

export default Homepage