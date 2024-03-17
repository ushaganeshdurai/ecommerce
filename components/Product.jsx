import React from 'react'
import Link from 'next/link'
import styles from '../Globals.module.css'
import { urlFor } from '../lib/client'

const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className={styles.product_card}>
          <img src={urlFor(image && image[0])} 
            width={250} height={250} className='product_image'
          />
          <p className='product_name'>{name}</p>
          <p className='product_price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product