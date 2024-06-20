import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';


export const Header = () => {
  return (
    <header className='h-[5vh] border-b border-secondary-100 pb-8 flex items-center justify-end'>
      <nav className='flex items-center gap-x-4 '>
        <Menu menuButton={
          <MenuButton className={"custom-arrow relative items-center gap-x-2 hover:bg-secondary-100 px-4 py-2 rounded-lg transition-colors"}>
            <FaRegBell className='text-primary' />
            <span className='absolute top-0 right-2 box-content bg-primary py-0.5 px-[5px] text-black rounded-full text-[8px] font-bold'>2</span>
          </MenuButton>}
          arrow
          arrowClassName="bg-red-300"
          align='end'
          transition
          menuClassName="bg-secondary-100 p-4">
          <h1 className='text-gray-300 text-center font-medium'>Notificaciones</h1>
          <MenuDivider></MenuDivider>
          <MenuItem className="rounded-lg transition-colors hover:bg-secondary-900 text-gray-300">
            <Link to="/admin/profile" className='flex items-center gap-x-4'>
              <img className='w-4 h-6 object-cover rounded-full'
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
              <div className='flex flex-col text-sm'>
                <span className='text-sm'>yennerson olivo</span>
                <span className='text-xs text-gray-500'>yennerson.olivo@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className={"flex items-center gap-x-2 hover:bg-secondary-100 px-4 py-2 rounded-lg transition-colors"}>
              <img className='w-4 h-6 object-cover rounded-full'
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
              <span>yennerson olivo</span>

              <FaRegUserCircle className='text-primary text-xl' />
            </MenuButton>}
          arrow
          align='center'
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="rounded-lg transition-colors hover:bg-secondary-900 text-gray-300">
            <Link to="/admin/profile" className='flex items-center gap-x-4'>
              <img className='w-4 h-6 object-cover rounded-full'
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
              <div className='flex flex-col text-sm'>
                <span className='text-sm'>yennerson olivo</span>
                <span className='text-xs text-gray-500'>yennerson.olivo@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem className="justify-center rounded-lg transition-colors hover:bg-secondary-900 text-gray-300">
            <Link to="/admin/profile" className='flex items-center gap-x-4'>
              <FaRegUserCircle className='text-primary' />
              <div className='flex flex-col text-sm'>
                <span className='text-sm'>yennerson olivo</span>
              </div>
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  )
}
