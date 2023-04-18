import { Link } from 'react-router-dom'
import React from 'react'
import styles from './card.module.css'

const Card = ({producto}) => {
  return (
    <Link className={styles.link} to={`${producto.id}`}>

    <div className={styles.card}>
      <div className={styles.img}>
        <img className={styles.img} src={producto.image} />
      </div>
      <div className={styles.content}>
        <h3>{producto.title}</h3>
        <p className={styles.price}>${producto.price}</p>
      </div>
    </div>

    </Link>
  
  )
}

export default Card