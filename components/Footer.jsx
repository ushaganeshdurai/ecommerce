import React from 'react'
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai'
import styles from '../Globals.module.css'

const Footer = () => {
  var yr = new Date();
  var year = yr.getFullYear();
  return (
    <div className={styles.footer_container}>
<p>{year} All rights reserved</p>
<p className={styles.icons}>
  <AiFillInstagram />
  <AiOutlineTwitter />
</p>
    </div>
  )
}

export default Footer