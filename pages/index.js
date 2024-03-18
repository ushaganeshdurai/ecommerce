import React from "react";
import { client } from "../lib/client.js";
import styles from "../Globals.module.css";
import { Product, FooterBanner, HeroBanner } from "../components";
const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}
      <div className={styles.products_heading}>
        <h2>Best Selling products</h2>
        <p>speaker of many variations</p>
      </div>
      <div className={styles.products_container}>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type =="product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};

export default Home;
//key = content of the component