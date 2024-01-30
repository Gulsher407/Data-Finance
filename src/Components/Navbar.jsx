import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navLinks = [
        { id: 'hero', text: 'Home' },
        { id: 'analytics', text: 'Analytics' },
        { id: 'newsletter', text: 'Newsletter' },
        { id: 'cards', text: 'Card' },
        { id: 'footer', text: 'Footer' }
    ];

    const generateNavLink = (link) => (
        <li key={link.id} className='p-4'>
            <Link to={link.id} smooth duration={1000} className="hover:underline">{link.text}</Link>
        </li>
    );

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-4 px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                <a href="/" className="hover:underline">Gulsher..</a>
            </h1>
            <ul className='hidden md:flex cursor-pointer'>
                {navLinks.map(generateNavLink)}
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>
            {nav && (
                <div className='fixed left-0 top-0 w-[40%] border-r border-r-gray-900 h-full bg-black ease-in-out duration-500'>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] mt-5 mr-3 px-4'>Gulsher..</h1>
                    <ul className='uppercase p-3 cursor-pointer'>
                        {navLinks.map(generateNavLink)}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
