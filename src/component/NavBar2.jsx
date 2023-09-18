import React from 'react';

const NavBar2 = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' },
      ];
      
   
      
    return (
        <div>
            {
                routes.map(route=> <li key={route.id}> <a href={`route.path`}>{route.name}</a> </li>)
            }
        </div>
    );
};

export default NavBar2;