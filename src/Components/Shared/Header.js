import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const headermenu = <>
        <li className='font-bold'><Link to='/honeyNut'>মধুময় বাদাম</Link></li>
        <li className='font-bold'><Link to='/greenCoffee'>গ্রীন কফি</Link></li>
        <li className='font-bold'><Link to='/chiaSeed'>চিয়া সীড</Link></li>
        <li className='font-bold'><Link to='/moringa'>মরিঙ্গা</Link></li>
        
            
         <Link to="/contact" className="btn">যোগাযোগ করুন</Link>
       
    </>

    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                   
                    <Link to="/"><img className='logo-size hidden navbar-start lg:flex' src="https://i.ibb.co/82bZmdT/vitafarm2-removebg-preview.png" alt="" /></Link>
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {headermenu}
                        </ul>
                    </div>
                </div>
                <div className='navbar-end lg:hidden'><Link to="/"><img className='logo-size' src="https://i.ibb.co/82bZmdT/vitafarm2-removebg-preview.png" alt="" /></Link></div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {headermenu}
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Header;