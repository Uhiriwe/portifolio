import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Layout() {
    return (
        <>
            <div className='contain fixed w-full top-0 left-0'>
                <h1>O l <b className='bold'>i v i</b> n e  <b className='bold'>!</b></h1>
                <ul className='navigation'>

                    <li>
                        <a className='links' href='/'>Home</a>
                    </li>
                    <li>
                        <a className='links' href='#about'>About</a>
                    </li>
                    <li>
                        <a className='links' href='#portifolio'>Portfolio</a>
                    </li>
                    <li>
                        <a className='links' href='#resume'>Resume</a>
                    </li>
                    <li>
                        <a className='links' href='#articles'>Articles</a>
                    </li>
                    <li>
                        <a className='links' href='#contact'>Contact</a>
                    </li>
                </ul>

            </div>
            <Outlet />
        </>

    );
}

export default Layout