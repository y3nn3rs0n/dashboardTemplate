import { useState } from "react";
import { RiMailFill, RiLockFill, RiEyeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import "firebase/auth";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import google from '../../assets/google.png';

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      if (!userCredentials.user) {
        throw new Error("error al crear usuario")}
      await setDoc(doc(db, "users", userCredentials.user.uid), {
      username: userCredentials.user.uid,
      email: email
      })
      await sendEmailVerification(userCredentials.user)
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth min-h-screen flex items-center justify-center p-4">
      <div className='bg-secondary-100 p-8 rounded-xl shadow-xl w-auto lg:w-[450]'>
        <h1 className='text-3xl uppercase font-bold tracking-[5px] text-center text-white mb-8'>Regístrate</h1>
        <form className="mb-8">
          <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-6 text-gray-100' type="button">
            <img src={google} className='w-4 h-4' alt="Google Logo" />
            Ingresa con Google
          </button>
          <div className="relative mb-4">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input onChange={(ev) => {
                setEmail(ev.target.value);
              }}  type="email" className='pl-8 pr-4 py-3 px-4 bg-secondary-900 w-full outline-none rounded-lg' placeholder='Correo electrónico' required />
               
          </div>
          <div className="relative">
            <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input onChange={(ev) => setPassword(ev.target.value)} type={showPassword ? "text" : "password"} className='pl-8 pr-4 py-3 px-4 bg-secondary-900 w-full outline-none rounded-lg' placeholder='Contraseña' required />
            <RiEyeFill onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
          </div>
          <div>
            <button onClick={handleSubmit} type="submit" className='flex items-center justify-center py-3 px-4 gap-4 font-bold mt-8 bg-primary w-full rounded-lg mb-8 hover:text-gray-100 transition-colors '>Registrarse</button>
          </div>
        </form>
        <div className="flex flex-col gap-4 items-center">
          <span className="flex items-center gap-2">
            ¿Ya tienes cuenta? <Link to={"/"} className="text-primary">Ingresa</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
