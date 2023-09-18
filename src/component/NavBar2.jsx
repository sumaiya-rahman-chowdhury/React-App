import React, { useState } from 'react';
import Link from './Link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';


const NavBar2 = () => {
    
    const [open,setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' },
      ];
      
   
      
    return (
        <div>
           <div className='text-xl md:hidden' onClick={()=> setOpen(!open)}>
            {
                open === true ? <GiHamburgerMenu ></GiHamburgerMenu> : <AiFillCloseCircle></AiFillCloseCircle>
            }
           
           </div>
            <ul className='flex flex-wrap'>
            {
                routes.map(route=> <Link key={route.id} route={route}></Link>)
            }
        </ul>
        </div>
    );
};

export default NavBar2;