import Head from 'next/head'
import React from 'react'
import Banner from '../../components/homepage/components/Banner'
import Cards from '../../components/homepage/components/Cards'
import Footer from '../../components/Footer';
import { H2 } from '../../styles/homepage/styles';

const Homepage = () => {
  /**
   * tags in firebase zetten (pages > profile > components > data)
   * profile update (inclusief banner misschien?)
   * search op tags van foto zoeken
   */
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