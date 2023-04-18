import Card from "../Card"
import styles from './itemListContainer.module.css'

const ItemListContainer = ({productos}) => {


  return (
    <div className={styles.container}>
      {productos.map((producto)=>(
        <Card producto={producto} key={producto.id} />
      ))}
    </div>
  )
}

export default ItemListContainer