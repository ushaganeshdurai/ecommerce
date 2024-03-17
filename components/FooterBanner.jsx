import React from "react";
import Link from "next/link";
import styles from "../Globals.module.css";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    desc,
    smallText,
    midText,
    buttonText,
    product,
    image,
  },
}) => {
  return (
    <div className={styles.footer_banner_container}>
      <div className={styles.banner_desc}>
        <div className={styles.left}>
        <p>{discount}</p>
          {/* <p>{footerBanner.discount}</p> insted of referencing like this structure the objects from props */}
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className={styles.right}>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className={styles.footer_banner_image} />
      </div>
    </div>
  );
};

export default FooterBanner;
