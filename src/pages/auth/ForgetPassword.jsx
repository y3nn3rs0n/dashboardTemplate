import { useState } from "react";
import { RiMailFill, RiLockFill, RiEyeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const ForgetPassword = () => {

  const [showPassword, setshowPassword] = useState(false)


  return (
    <div className="auth min-h-screen flex items-center justify-center p-4">
    <div className='bg-secondary-100 p-8 rounded-xl shadow-xl w-auto lg:w-[450]'>
      <h1 className='text-3xl uppercase font-bold tracking-[5px] text-center text-white mb-8'>Recupera tu contraseña</h1>
      <form className="mb-8" action="">
        <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-6 text-gray-100'>
          <img src='https://c0.klipartz.com/pngpicture/882/225/gratis-png-google-logo-google-logo-google-icono-de-busqueda-google.png' 
          className='w-4 h-4'/>Ingresa con Google</button>
        <div className="relative mb-4">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2"/>
          <input type="email" className='pl-8 pr-4 py-3 px-4 bg-secondary-900 w-full outline-none rounded-lg' 
          placeholder='Correo electronico'
          />
        </div>
        <div className="relative">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2"/>
          <input type= {showPassword ? "text" : "password"} className='mb-4 px-8 py-3 px-4 bg-secondary-900 w-full outline-none rounded-lg' 
          placeholder='Contraseña'
          />
           <RiEyeFill onClick={() => setshowPassword (!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"/>
        </div>
        <div>
          {/* <button type="submit" className="bg-secondary w-full py-3 px-4">     </button>*/}
          <button className='flex items-center justify-center py-3 px-4 gap-4 font-bold bg-primary w-full rounded-lg mb-8 hover:text-gray-100 transition-colors '>Ingresa</button>

      
          </div>              
      </form>
      <div className="flex flex-col gap-4 items-center">
      <span className="flex items-center gap-2">
       ¿ya tienes Cuenta?<Link to={"/auth"} className="text-primary">Ingresa</Link>
       </span>
       <span className="flex items-center gap-2">
               No tienes cuenta?<Link to={"/auth/register"} className="text-primary">Registrate</Link>
       </span>
      </div>
    </div>
    </div>
  )
}


