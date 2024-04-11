import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Layout() {
    return (
        <>
            <div className='contain'>
                <h1>O l <b className='bold'>i v i</b> n e  <b className='bold'>!</b></h1>
                <ul className='navigation'>

                    <li>
                        <Link className='links' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='links' to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className='links' to='/portifolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link className='links' to='/resume'>Resume</Link>
                    </li>
                    <li>
                        <Link className='links' to='/articles'>Articles</Link>
                    </li>
                    <li>
                        <Link className='links' to='/contact'>Contact</Link>
                    </li>
                </ul>

            </div>
            <Outlet />
        </>

    );
}

export default Layout