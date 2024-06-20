import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { FaHeadset } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { LiaChartBarSolid } from "react-icons/lia";
import { BiWorld } from "react-icons/bi";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

export const Sidebar = () => {

  const navigate = useNavigate();

  const [selected, setSelected] = useState(false)
  const [showMenu, setShowmenu] = useState(false)

  const logOut = async () => {
    try {
      localStorage.removeItem('authToken');
      await signOut(auth); // Espera a que la operación de cierre de sesión se complete
      navigate("/"); // Navega a la página principal después de cerrar sesión
    } catch (error) {
      console.error(error);
      alert('Error al desconectar el usuario:', error.message);
    }
  };

  return (
    <>
       <div className= {`bg-secondary-100 xl:h[100vh] fixed xl:static w-[80%] md:w[40%] lg:w[30%] xl:w-auto h-full top-0 p-8 flex flex-col justify-between z-50 transition-all ${showMenu ? "left-0" : "-left-full"}` }>
      <div>
        <h1 className='text-center text-white text-2xl '>Admin Module<span className='text-primary text-4xl'>.</span></h1>
        <ul>
          <li>
          <Link to={"/admin"} className='mt-10 flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-secondary-900 transition-colors'><LiaChartBarSolid className='text-primary'/>Analitics</Link>
          </li>
          <li>
          <button onClick={() => setSelected(!selected)} className='w-full flex items-center py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors justify-between'>
            <span className='flex items-center gap-4'><BiWorld className='text-primary'/>Social Media</span>
            <IoIosArrowDropup className={`${!selected && "rotate-180"} transition-all`}/></button>
          <ul className={`${selected ? "max-h-[1000px]" : "max-h-[0px]"} overflow-y-hidden transition-all duration-500`}>
            <li>
              <Link to={"/admin"} className='ml-6 block border-secondary-900 items-center border-l py-2 px-4 gap-4 
              hover:bg-secondary-900 transition-colors relative before:w-3 before:h-3 before:absolute before:rounded-full 
              before:bg-primary before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4'>Facebook</Link>
            </li>
            <li>
              <Link to={"/admin"} className='ml-6 block border-secondary-900 items-center border-l py-2 px-4 gap-4 
              hover:bg-secondary-900 transition-colors relative before:w-3 before:h-3 before:absolute before:rounded-full 
              before:bg-primary before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4'>Instagram</Link>
            </li>
          
          </ul>
          </li>
          <li>
          <Link to={"suport"} className='flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-secondary-900 transition-colors'><FaHeadset className='text-primary'/>Suport</Link>
          </li>
        </ul>
      </div>
      <nav>
      <button onClick={() => logOut()} className='mt-10 flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-secondary-900 transition-colors'><MdOutlineLogout  className='text-primary'/>Log Out</button>
        </nav>
    </div>
    <button onClick={() => setShowmenu(!showMenu)} className='fixed bottom-4 right-4 bg-primary z-50 rounded-full p3 xl:hidden text-black'>
    <IoIosArrowDropdown className='text-primary'/>
    </button>
    </>
    
 
  )
}
