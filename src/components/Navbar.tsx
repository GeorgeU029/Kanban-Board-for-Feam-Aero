import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import './style.css'

import itLogo from '../images/itLogo.png'


const searchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const search = [
        // I will the actual data from the database later
        { id: 1, name: "IT", imagePath: itLogo, description: "Information Technology" },
        { id: 2, name: "HR", imagePath: itLogo, description: "Human Resources" },
        { id: 3, name: "Finance", imagePath: itLogo, description: "Finance Department" },
        { id: 4, name: "Engineering", imagePath: itLogo, description: "Engineering Department" },
    ]
}


const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <AiOutlineMenu />
            <img src="../images/feamAeroLogo.png" alt="Feam Aero logo" className='logo' />
            
        </div>
    </div>
  )
}

export default Navbar