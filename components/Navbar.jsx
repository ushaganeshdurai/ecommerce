import React from "react";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import styles from "../Globals.module.css";
import { AiOutlineShopping } from "react-icons/ai";
import  Cart  from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = ({ product }) => {
  // const pop =()=>{
  //   toast("success")
  // }
  const { showCart, setShowCart, totalQty } = useStateContext();

  return (
    <div className={styles.navbar_container}>
      <button
          className={styles.btn}
          onClick={() => {
            location.href = '/api/auth/signout'; // Redirect to the signout URL
          }}
        >
          Sign out <FaSignOutAlt />
        </button>
      <button
        type="button"
        onClick={() => setShowCart(true)}
        className={styles.cart_icon}
      >
        <AiOutlineShopping />
        <span className={styles.cart_item_qty}>{totalQty}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
