import React,{useRef, useState} from 'react'
import styles from '/Globals.module.css'
import Link from 'next/link'
import { AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineShopping, AiOutlineFileExcel } from 'react-icons/ai'
import toast from 'react-hot-toast'
import {TiDeleteOutline} from 'react-icons/ti'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'

const Cart = () => {
const cartRef = useRef();
const {totalPrice,totalQty,cartItems,setShowCart} = useStateContext();

  return (
    <div ref={cartRef} className={styles.cart_wrapper}>
<div className={styles.cart_container}>
  <button type='button' onClick={()=>setShowCart(false)} className={styles.cart_heading}>
    <AiOutlineLeft /> <span className={styles.heading}>Your cart</span> <span className={styles.cart_num_items} >{totalQty}</span>
  </button>
  {cartItems.length<1 && (
    <div className={styles.empty_cart}>
      <AiOutlineShopping size={150}/>
      <h3>Your shopping bag is empty</h3>
      <Link href="/">
        <button type='button' className={styles.btn} onClick={()=>setShowCart(false)}>Continue shopping</button>
      </Link>
    </div>
  )}
  <div className={styles.product_container}>
    {cartItems.length>=1 && cartItems.map((item)=>(
<div className={styles.product} key={item._id}>
  <img src={urlFor(item?.image[0])}  className={styles.cart_product_image} />
  <div className={styles.item_desc}>
    <div className={`${styles.flex} ${styles.top}`}>
<h5>{item.name}</h5>
<h4>₹{item.price}</h4> {/* if u add $ before you get dollar sign */}
    </div>
    <div className={`${styles.flex}${styles.bottom}`}>
      <div>
        <p className={styles.quantity_desc}></p>
      </div>
    </div>
  </div>
</div>
    ))}
  </div>
</div>
    </div>
  )
}

export default Cart