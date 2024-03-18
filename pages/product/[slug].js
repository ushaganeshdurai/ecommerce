// [] it means dynamic
import { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { useStateContext } from "/context/StateContext";
import Product from "/components/Product.jsx";
import React from "react";
import { urlFor } from "../../lib/client.js";
import { client } from "../../lib/client.js";
import styles from "/Globals.module.css";
// Corrected import path

const ProductDetails = ({ product, products }) => {
  const image = product?.image && product.image[0];
  const name = product?.name ?? "Product Name"; // Provide a default value
  const details = product?.details ?? "Details not available";
  const price = product?.price ?? "Price not available";
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty ,onAdd} = useStateContext();

  return (
    <div>
      <div className={styles.product_detail_container}>
        <div>
          <div className={styles.image_container}>
            <img
              className={styles.product_detail_image}
              src={image ? urlFor(image).url() : ""}
              alt=""
            />
            {/* Added nullish coalescing for image */}
          </div>
          {/* <div className={styles.small_images_container}>
            {image.map((item,i)=>{
                <img src={urlFor(item)} onMouseEnter={()=>setIndex(i)} className={i===index?`${styles.small_image}`:`${styles.small_image}`} />
            })}
          </div>  */}
          <div className={styles.product_detail_desc}>
            <h1>{name}</h1>
            <div className={styles.reviews}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className={styles.price}>${price}</p>
          <div className={styles.quantity}>
            <h3>Quantity:</h3>
            <p className={styles.quantity_desc}>
              <span onClick={decQty} className={styles.minus}>
                <AiOutlineMinus />
              </span>
              <span className={styles.num}>{qty}</span>
              <span onClick={incQty} className={styles.plus}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className={styles.buttons}>
            <button
              type="button"
              onClick={() => onAdd(product, qty)}
              className={styles.add_to_cart}
            >
              Add to cart
            </button>
            <button
              type="button"
              onClick={""}
              className={styles.buy_now}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
      <div className={styles.maylike_products_wrapper}>
        <h2>You may also like</h2>
        <div className={styles.marquee}>
          <div
            className={`${styles.track} ${styles.maylike_products_container}`}
          >
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  // Extract slugs from products
  const productSlugs = products.map((product) => product.slug.current);

  return {
    paths: productSlugs.map((slug) => ({ params: { slug } })),
    fallback: true, // Adjust as needed
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "product"&&slug.current=='${slug}'][0]`;
  const productsQuery = '*[_type=="product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  return {
    props: { product, products },
  };
}

export default ProductDetails;
