import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const headermenu = <>
        <li className='font-bold'><Link to='/nut'>মধুময় বাদাম</Link></li>
        <li className='font-bold'><Link to='/coffee'>গ্রীন কফি</Link></li>
        <li className='font-bold'><Link to='/seed'>চিয়া সীড</Link></li>
    </>

    return (
        <div>
            <div class="navbar bg-base-300">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           {headermenu}
                        </ul>
                    </div>
                    <Link  to="/"><img className='logo-size hidden navbar-start lg:flex' src="https://i.ibb.co/82bZmdT/vitafarm2-removebg-preview.png" alt="" /></Link>
                </div>
                <div className='navbar-center lg:hidden'><Link  to="/"><img className='logo-size' src="https://i.ibb.co/82bZmdT/vitafarm2-removebg-preview.png" alt="" /></Link></div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {headermenu}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn">যোগাযোগ করুন</a>
                </div>
            </div>
        </div>
    );
};

export default Header;