import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    function closeNav() {
        var cb = document.getElementById('click');
        cb.checked = false;
    }
    return (
        <>
            <nav>
                <div className="logo">Ayurvedic Gyan</div>
                <input type="checkbox" id='click' />
                <label htmlFor="click" className='menu-btn'><i class="bi bi-list"></i></label>
                <ul id='navbar'>
                    <li><Link to='/' onClick={closeNav}>Home</Link></li>
                    <li><Link to='/list' onClick={closeNav}>List</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar