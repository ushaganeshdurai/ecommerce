import React from 'react'
import styles from '../Globals.module.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// same as html head which gives meta data
//in react if we have to pass component inside another component and render it use childrne prop
const Layout = ( {children} ) => {
  return (
    <div className={styles.layout}>
<Head>
  <title>SHOPIFY</title>
</Head>

<header>
  <Navbar />
</header>
<main className={styles.main_container}>
{children}
</main>
<footer>
  <Footer />
</footer>
    </div>
  )
}

export default Layout