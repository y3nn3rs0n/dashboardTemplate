import React, { useState } from 'react'
import { RiMailFill } from "react-icons/ri";
import { Switch } from '@headlessui/react'
import google from '../../assets/google.png';


export const Profile = () => {
    const [selected, setselected] = useState(true)
  return (
    <>
    {/* PROFILE */}
    <div className='bg-secondary-100 p-8 rounded-xl mb-10' >
        <h1 className='text-xl text-gray-100'>Profile</h1>
        <hr className='my-8 border-gray-500/30'/>
        <form>
            <div className='flex items-center mb-8'>
                <div className='w-1/4'>
                    <p>Avatar</p>
                </div>
                <div className='flex-1'>
                    <div className='relative mb-2'>
                        <img className='w-28 h-28 object-cover rounded-lg' src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                        <input id='avatar' className='hidden' type="file"/>
                        <label htmlFor="avatar" 
                        className='p-2 bg-secondary-100 rounded-full hover:cursor-pointer absolute -top-4 left-24'>
                            <RiMailFill/>
                            </label>    
                    </div>
                    <p className='text-gray-500 text-sm'>Allowed file types: png, jpg, jpeg</p>                     
                </div>
            </div>
            <div className='flex flex-col gap-y-2 md:flex-row items-center mb-8'>
                <div className='w-full md:w-1/4'>
                    <p>Nombre Completo<span className='text-red-500'>*</span></p>
                </div>
                <div className='flex-1 flex items-center gap-4'>
                    <div className='w-full'>
                          <input className='w-full  py-2 px-4 outline-none rounded-lg bg-secondary-900' placeholder='Nombre completo'></input>
                    </div>
                    <div className='w-full'>
                    <input className='w-full  py-2 px-4 outline-none rounded-lg bg-secondary-900' placeholder='Apellidos'></input>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-2 md:flex-row md:items-center mb-8'>
                <div className='w-full md:w-1/4'>
                    <p>Empresa<span className='text-red-500'>*</span></p>
                </div>
                <div className='flex-1'>
                    <div className='w-full'>
                          <input className='w-full  py-2 px-4 outline-none rounded-lg bg-secondary-900' placeholder='Nombre completo'></input>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-2 md:flex-row md:items-center mb-8'>
                <div className='w-full md:w-1/4'>
                    <p>Numero de telefono<span className='text-red-500'>*</span></p>
                </div>
                <div className='flex-1'>
                    <div className='w-full'>
                          <input className='w-full  py-2 px-4 outline-none rounded-lg bg-secondary-900' placeholder='Nombre completo'></input>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-2 md:flex-row md:items-center mb-8'>
                <div className='w-full md:w-1/4'>
                    <p>Pais<span className='text-red-500'>*</span></p>
                </div>
                <div className='flex-1'>
                    <select className='w-full py-2 px-4 bg-secondary-900' name="" id="">
                        <option value="Colombia" selected>Colombia</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Argentina">Argentina</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col gap-y-2 md:flex-row md:items-center mb-8'>
                <div className='w-full md:w-1/4'>
                    <p>Ciudad<span className='text-red-500'>*</span></p>
                </div>
                <div className='flex-1'>
                    <select className='w-full py-2 px-4 bg-secondary-900' name="" id="">
                        <option value="ciudad-colombia" selected>ciudad Colombia</option>
                        <option value="ciudad-venezuela">ciudad Venezuela</option>
                        <option value="ciudad-argentina">ciudad Argentina</option>
                    </select>
                </div>
            </div>
        </form>
        <hr className='my-8 border-gray-500/30'/>
        <div className='flex justify-end'>
            <button className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>Guardar</button>
        </div>
    </div>
     {/* Password */}
     <div className='bg-secondary-100 p-8 rounded-xl mb-10' >
        <h1 className='text-xl text-gray-100'>Usuario y contraseña</h1>
        <hr className='my-8 border-gray-500/30'/>
        <form className='mb-8'>
            <div className='flex flex-col md:flex-row md:items-center gap-y-2 justify-between'>
                <div>
                    <h5 className='text-gray-100 text-xl'>Correo electronico</h5>
                    <p className='text-gray-500 text-sm'>Yennerson.olivo@gmail.com</p>
                </div>
                <div>
                <button className='w-full md:w-auto bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>Cambiar Email</button>
                </div>
            </div>
            <hr className='my-8 border-gray-500/10'/>
            <div className='flex md:items-center justify-between'>
                <div>
                    <h5 className='text-gray-100 text-xl'>Password</h5>
                    <p className='text-gray-500 text-sm'>*********</p>
                </div>
                <div>
                <button className='w-full md:w-auto bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>Cambiar Password</button>
                </div>
            </div>
        </form>
        <div className='grid grid-cols-1 md:grid-cols-8 items-center justify-center bg-sky-500/10 p-4 rounded-lg border border-dashed'>
            <div className='flex justify-center'>
                <RiMailFill className='text-4xl text-green-600'/>
            </div>
            <div className='md:col-span-6'>
                <h5 className='text-gray-100 mb-2'>Asegura tu cuenta</h5>
                 <p className='text-gray-500'>Aqui puedes cambiar las credenciales de tu cuenta</p>
            </div>
            <div className='flex justify-center'>
            <button className='w-full md:w-auto bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>Guardar</button>
            </div>
        </div>
       {/*  <hr className='my-8 border-gray-500/30'/>
        <div className='flex justify-end'>
            <button className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>Guardar</button>
        </div> */}
    </div>
    {/* accounts */}
    <div className='bg-secondary-100 p-8 rounded-xl mb-10' >
        <h1 className='text-xl text-gray-100'>Cuentas</h1>
        <hr className='my-8 border-gray-500/30'/>
        <form className='mb-8'>
        <div className='mb-8 flex flex-col md:flex-row gap-4 items-center bg-sky-500/10 p-4 rounded-lg border border-dashed'>
            <div className='flex justify-center'>
                <RiMailFill className='text-4xl text-green-600'/>
            </div>
            <div className='flex-1'>
                 <p className='text-gray-500'>Aqui puedes gestionar tus cuentas</p>
            </div>
        </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                <img src={google} 
          className='w-8 h-8 object-cover'/>
           <div className='flex flex-col gap-y-1'>
                    <h5 className='text-gray-100 text-xl'>Password</h5>
                    <p className='text-gray-500 text-sm'>*********</p>
                </div>
                </div>
                <div>
                <Switch
      checked= {selected}
      onChange={setselected}
      className={`${!selected ? "bg-secondary-900" : "bg-primary" } group relative inline-flex h-6 w-11 items-center rounded-full transition`}
    >
      <span className="size-4 translate-x-1 rounded-full bg-secondary-100 transition group-data-[checked]:translate-x-6 group-data-[checked]:bg-secondary-900" />
    </Switch>
                </div>
            </div>
            <hr className='my-8 border-gray-500/10'/>
            <div className='flex items-center justify-between'>
               
                <div>
                <button className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>Agregar</button>
                </div>
            </div>
        </form>
    </div>
    </>
    
  )
}
