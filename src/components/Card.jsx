import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { RiMoneyDollarCircleLine, RiMailFill } from "react-icons/ri";
import { MdCurrencyExchange } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from "react-router-dom";

export const Card = (props) => {
    const { ticket, totalTickets, text } = props;

    let status = "";
    let icon = null;

    switch (ticket) {
        case "pending":
            status = "bg-pink-500";
            icon = <CgSandClock className=" text-pink-500 text-3xl" />;
            break;
        case "return":
            status = "bg-blue-500";
            icon = <MdCurrencyExchange className="text-blue-500 text-3xl" />;
            break;
        case "cancel":
            status = "bg-red-500";
            icon = <ImCancelCircle className="text-red-500 text-3xl" />;
            break;
        case "sold":
            status = "bg-green-500";
            icon = <RiMoneyDollarCircleLine className="text-green-500 text-3xl" />;
            break;
        default:
            // En caso de ticket desconocido, puedes manejarlo aquí
            break;
    }

    return (
        <div className={`bg-secondary-100 p-8 rounded-xl ${status}`}>
            <div className="flex items-center justify-between mb-4">
                {icon}
                <Menu
                    menuButton={
                        <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-900 px-4 py-2 rounded-lg transition-colors">
                            <IoIosArrowDropdown className='text-primary text-xl' />
                        </MenuButton>
                    }
                    arrow
                    align='end'
                    transition
                    menuClassName="bg-secondary-100 p-4"
                >
                    <MenuItem className="rounded-lg transition-colors hover:bg-secondary-900 text-gray-300">
                        <div className='flex flex-col text-sm'>
                            <span className='text-sm'>Opciones</span>
                        </div>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem className="justify-center rounded-lg transition-colors hover:bg-secondary-900 text-gray-300">
                        <Link to="/profile" className='flex items-center gap-x-4'>
                            <IoIosArrowDropdown className='text-primary' />
                            <div className='flex flex-col text-sm'>
                                <span className='text-sm'>Opcion 1</span>
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem className="justify-center rounded-lg transition-colors hover:bg-secondary-900 text-gray-300">
                        <Link to="/profile" className='flex items-center gap-x-4'>
                            <IoIosArrowDropdown className='text-primary' />
                            <div className='flex flex-col text-sm'>
                                <span className='text-sm'>Opcion 2</span>
                            </div>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
            {/* Número de tickets */}
            <div className="text-2xl text-white font-bold">
                <h1 className="mb-4">{totalTickets}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Card;
