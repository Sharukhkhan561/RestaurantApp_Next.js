import React,{useState} from 'react'
import Home from "../pages/Home/Home"
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from "react-icons/ai";
import "./Layout.css"
import Menus from "../Menus/Menu"

const Layout = () => {
    const[toggle,setToggle]= useState(true);

    const handleToggle=()=>{
        console.log("toggle click")
        setToggle(!toggle)
    }
  return (
    <>
    <div className='sidear-section'>
          {/* Condiotional rendering className */}

        <div className={toggle?'sidebar-toggle sidebar':'sidebar'}>
            <div className='sidebar-toggle-icons'>
                <p onClick={handleToggle}>
            {
                toggle ?
                (<AiOutlineDoubleLeft size={30}/>) :
                (<AiOutlineDoubleRight size={30}/> )
                
            }
                </p>
            </div>
            <Menus toggle={toggle}/>
        </div>
        <div className='container'>
            <Home/>
        </div>
    </div>
    </>
  )
}

export default Layout