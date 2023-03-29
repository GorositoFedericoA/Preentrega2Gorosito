import React from 'react'
import styles from './card.module.css'
import { Link } from 'react-router-dom'

const Card = ({producto}) => {
  return (
    <Link to={`${producto.id}`}>
    <div className={styles.container}>
      <div className={styles.card}>
      <h3>{producto.title}</h3>
      <img className={styles.img} src={producto.image} />
      <p>{producto.price}</p>
      </div>
    </div>
    </Link>
  
  )
}

export default Card