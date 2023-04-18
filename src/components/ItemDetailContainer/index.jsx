import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styles from "./itemDetailContainer.module.css";




const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();



  const getProducto = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProducto(data);
      setLoading(false);
    } catch (error) {
      setProducto(null);
      console.log("ERROR: " + error)
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div className={styles.card}>
      
      <div className={styles.img}>
        <img className={styles.img} src={producto.image} />
      </div>

      <div className={styles.content}>
        <h3>{producto.title}</h3>
        <p>{producto.category}</p>
        <p>{producto.description}</p>
        <p>{producto.price}</p>
      </div>
    
    </div>
  );
};

export default ItemDetailContainer;