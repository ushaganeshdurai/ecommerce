import React from 'react'
import Link from 'next/link'
import styles from '../Globals.module.css'
import { AiOutlineShopping } from 'react-icons/ai';
import toast,{Toaster} from 'react-hot-toast';

const Navbar = ({product}) => {
  // const pop =()=>{
  //   toast("success")
  // }
  return (
    <div className={styles.navbar_container}>
      <p className={styles.logo}>
        <Link href="/">
          JSM HEADPOHNES
        </Link>
        {/* <button onClick={pop}> clickme popup </button>
        <Toaster /> */}
        {/* we will need toaster component to see the output even though we ve defined function */}
      </p> 
      <button  type='button' className={styles.cart_icon}>
<AiOutlineShopping />
<span className={styles.cart_item_qty}>1</span>
      </button>
    </div>
  )
}

export default Navbar