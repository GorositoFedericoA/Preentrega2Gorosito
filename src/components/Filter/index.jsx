import React from 'react'
import Card from '../Card'
import styles from './filter.module.css'

const Filter = ({productos, category}) => {
  return (
    <div className={styles.container}>
      {productos.map((producto, id)=>(
        producto.category == category?<Card key={id} producto={producto} />:null
      ))}

    </div>
  )
}

export default Filter