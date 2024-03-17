import React from 'react'
import styles from '../Globals.module.css'
import Link from 'next/link'
import  {urlFor} from '../lib/client'
const HeroBanner = ({heroBanner}) => {
  return (
    <div className={styles.hero_banner_container}>
      <div>
        <p className={styles.beats_solo}>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText}</h1>
        <img src={urlFor(heroBanner.image)} className={styles.hero_banner_image}/>
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className={styles.selected_image}>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner