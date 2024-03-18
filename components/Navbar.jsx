import React from 'react'
import Link from 'next/link'
import styles from '../Globals.module.css'
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = ({product}) => {
  return (
    <div className={styles.navbar_container}>
      <p className={styles.logo}>
        <Link href="/">
          JSM HEADPOHNES
        </Link>
      </p> 
      <button onClick="" type='button' className={styles.cart_icon}>
<AiOutlineShopping />
<span className={styles.cart_item_qty}>1</span>
      </button>
    </div>
  )
}

export default Navbar