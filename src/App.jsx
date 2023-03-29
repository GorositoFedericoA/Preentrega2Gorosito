import { Navigate,Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Navbar from './components/Navbar'
import Filter from './components/Filter'



const URL_API = "https://fakestoreapi.com/products";

function App() {

  //++++++++productos++++++++++++
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
      try{
    const res = await axios(URL_API);
    setProductos(res.data);
      }catch(error){
        console.log('ERROR: ' + error)
      } 
  }
  useEffect(() => {
    getProductos();
  }, []);



  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={ <Navigate to='/productos'/> } />
      <Route path='/productos' element={<ItemListContainer productos={productos}/>}/>
      <Route path='/category/mens-clothing' element={<Filter productos={productos} category="men's clothing"/>} />
      <Route path="/category/mens-clothing/:id" element={<ItemDetailContainer />} />
      <Route path='/category/jewelery' element={<Filter productos={productos} category="jewelery"/>} />
      <Route path="/category/jewelery/:id" element={<ItemDetailContainer />} />
      <Route path='/category/electronics' element={<Filter productos={productos} category="electronics"/>} />
      <Route path="/category/electronics/:id" element={<ItemDetailContainer />} />
      <Route path='/category/womens-clothing' element={<Filter productos={productos} category="women's clothing"/>} />
      <Route path="/category/womens-clothing/:id" element={<ItemDetailContainer />} />
      <Route path='/productos/:id' element={<ItemDetailContainer  />} />
    </Routes>
    </>
  )
}

export default App
