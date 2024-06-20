import { useState } from "react";
import { RiMailFill, RiLockFill, RiEyeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import google from '../../assets/google.png';

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInput = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredentials.user.emailVerified) throw new Error("Usuario no verificado");
      navigate("/admin/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth min-h-screen flex items-center justify-center p-4">
      <div className='bg-secondary-100 p-8 rounded-xl shadow-xl w-auto lg:w-[450]'>
        <h1 className='text-3xl uppercase font-bold tracking-[5px] text-center text-white mb-8'>Iniciar sesión</h1>
        <form className="mb-8" onSubmit={handleChangeInput}>
          <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-6 text-gray-100'>
            <img src={google} alt="" className='w-4 h-4'/>Ingresar con Google</button>
          <div className="relative mb-4">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2"/>
            <input onChange={(ev) => setEmail(ev.target.value)} type="email" className='pl-8 pr-4 py-3 px-4 bg-secondary-900 w-full outline-none rounded-lg' placeholder='Correo electrónico' required />
          </div>
          <div className="relative">
            <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2"/>
            <input onChange={(ev) => setPassword(ev.target.value)} type={showPassword? "text" : "password"} className=' py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg' placeholder='Contraseña' required />
            <RiEyeFill onClick={() => setShowPassword (!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"/>
          </div>
          <div>
            <button type="submit" className='flex items-center justify-center py-3 px-4 gap-4 font-bold mt-8 bg-primary w-full rounded-lg mb-8 hover:text-gray-100 transition-colors '>Ingresar</button>
          </div>              
        </form>
        <div className="flex flex-col gap-4 items-center">
         <Link to={"/auth/forget-pass"} className="hover:text-primary transition-colors">¿Olvidaste tu contraseña?</Link>
         <span className="flex items-center gap-2">
                 No tienes cuenta?<Link to={"/register"} className="text-primary">Regístrate</Link>
         </span>
        </div>
      </div>
    </div>
  )
}
