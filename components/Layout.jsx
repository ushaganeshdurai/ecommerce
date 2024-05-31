import React from 'react'
import styles from '../Globals.module.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Login from './Login'
import Footer from '../components/Footer'
import { useCustomSession } from './Login'
// same as html head which gives meta data
//in react if we have to pass component inside another component and render it use children prop
const Layout = ( {children} ) => {
const {session}=useCustomSession();
  return (
    <div className={styles.layout}>
<Head>
  <title>SHOPIFY</title>
</Head>
{!session?(
  <Login />
):(
<>
  <header>
  <Navbar />
</header>
<main className={styles.main_container}>
{children}
</main>
<footer>
  <Footer />
</footer>
</>
)}
    </div>
  )
}

export default Layout