import Card from "../Card"

const ItemListContainer = ({productos}) => {


  return (
    <div>
      {productos.map((producto)=>(
        <Card producto={producto} key={producto.id} />
      ))}
    </div>
  )
}

export default ItemListContainer