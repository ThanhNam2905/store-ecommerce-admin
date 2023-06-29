import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { BiSolidDashboard, BiBox } from "react-icons/bi";
import { BsShop, BsBoxSeam } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const SideBar = () => {

    const classesLink = 'flex items-center gap-2';
    const activeLink = classesLink + ' bg-white text-blue-900 font-bold italic py-3 px-3 rounded-tl-lg rounded-bl-lg pr-0';
    
    const router = useRouter();
    const { pathname } = router;

    return (
        <React.Fragment>
            <aside className='text-white py-4 pl-6'>
                <Link
                    href={"/"}
                    className='flex items-center gap-3 text-lg mt-3 mr-8'>
                    <BsShop 
                        size={30}
                        className='fill-white'
                    />
                    <span>Ecommerce Admin</span>
                </Link>
                {/* Navigation start */}
                <nav className='mt-8 space-y-4'>
                    <Link href={"/"} className={`${pathname === "/" ? activeLink : classesLink}`}>
                        <BiSolidDashboard 
                            size={22}
                        />
                        <span>Dashboard</span>
                    </Link>
                    <Link href={"/products"} className={`${pathname.includes("/products") ? activeLink : classesLink}`}>
                        <BsBoxSeam 
                            size={22}
                        />
                        <span>Products</span>
                    </Link>
                    <Link href={"/orders"} className={`${pathname.includes("/orders") ? activeLink : classesLink}`}>
                        <BiBox
                            size={22}
                        />
                        <span>Orders</span>
                    </Link>
                    <Link href={"/settings"} className={`${pathname.includes("/settings") ? activeLink : classesLink}`}>
                        <FiSettings
                            size={22}
                        />
                        <span>Setting</span>
                    </Link>
                </nav>
                {/* Navigation end */}
            </aside>

        </React.Fragment>
    )
}

export default SideBar