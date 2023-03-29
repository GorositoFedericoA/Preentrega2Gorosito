import React from 'react'
import Card from '../Card'

const Filter = ({productos, category}) => {
  return (
    <div>
      {productos.map((producto, id)=>(
        producto.category == category?<Card key={id} producto={producto} />:null
      ))}

    </div>
  )
}

export default Filter