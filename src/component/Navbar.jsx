import React from 'react'
import  Earth from '../assets/earth.png'
import Mercury from '../assets/mercury.png'
import Veneus from '../assets/venus.png'
import Marse from '../assets/mars.png'
import Jupiter from '../assets/jupiter.png'
import Saturn from '../assets/saturn.png'
import Uranus from '../assets/uranus.png'
import Neptune from '../assets/neptune.png'
import  {NavLink} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
    <NavLink to='/mer'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
     <img src={Mercury} alt="" />
     </NavLink>
    <NavLink to='/ven'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
     <img src={Veneus} alt="" />
     </NavLink>
    <NavLink to='/ear'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
     <img src={Earth} alt="" />
     </NavLink>
    <NavLink to='/mar'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
     <img src={Marse} alt="" />
     </NavLink>
    <NavLink to='/jup'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
     <img src={Jupiter} alt="" />
     </NavLink>
    <NavLink to='/sat'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
     <img src={Saturn} alt="" />
     </NavLink>
    <NavLink to='/ura'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
     <img src={Uranus} alt="" />
     </NavLink>
    <NavLink to='/nep'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
     <img src={Neptune} alt="" />
     </NavLink>
     </nav>
     </>
  )
}

export default Navbar