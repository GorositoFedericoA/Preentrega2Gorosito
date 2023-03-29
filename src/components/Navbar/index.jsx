import React from 'react'
import styles from './Navbar.module.css'
import CartWidget from '../CartWidget'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <ul className={styles.container}>
          <li>
            <NavLink to='/' className={styles.navLink} ><h1 className={styles.title} >MyApp</h1></NavLink>
          </li>
          <li>
            <NavLink to='/productos' className={styles.navLink} ><p>Productos</p></NavLink>
          </li>
          <li>
            <NavLink to="/category/mens-clothing" className={styles.navLink} ><p>Men's clothing</p></NavLink>
          </li>
          <li>
            <NavLink to="/category/jewelery" className={styles.navLink} ><p>Jewelery</p></NavLink>
          </li>
          <li>
            <NavLink to="/category/electronics" className={styles.navLink}><p>Electronics</p></NavLink>
          </li>
          <li>
            <NavLink to="/category/womens-clothing" className={styles.navLink}><p>Women's clothing</p></NavLink>
          </li>
          <li>
            <CartWidget /> 
          </li>
      </ul>
    </>
  )
}

export default Navbar