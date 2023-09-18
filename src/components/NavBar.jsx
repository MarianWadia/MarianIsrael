import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [navLinks, setNavLinks] = useState(false)
    const [hidden, setHidden] = useState(false);
    const links = [
        {
            id: 1,
            text: "home",
        },
        {
            id: 2,
            text: "about",
        },
        {
            id: 3,
            text: "portfolio",
        },
        {
            id: 4,
            text: "experience",
        },
        {
            id: 5,
            text: "contact",
        }
    ]
    const onNavClickMobile = () => {
        setNavLinks(false);
        setNav(!nav);
      }
    
  return (
    <div className='flex justify-between fixed h-20 items-center w-full text-white bg-black px-4'>
        <div>
            <h1 className='text-4xl font-signature font-light ml-2 md:text-5xl '>Marian Israel</h1>
        </div>
        <ul className='hidden md:flex gap-4 '>
            {links.map(link =>
                <li key={link.id} className='cursor-pointer capitalize text-gray-500 font-medium hover:scale-105 duration-200'>
                    <Link to={link.text} smooth duration={500}>{link.text}</Link>
                </li>
            )}
        </ul>

        <div onClick={()=>setNav(!nav)} className='md:hidden lg:hidden text-gray-500 pr-4 z-10 cursor-pointer'>
            {!nav ? (
                    <FaBars size={20} onClick={()=>setNavLinks(true)}/> 
                ) : (
                    <FaTimes size={20} onClick={()=>setNavLinks(false)}/>
            )}
        </div>
        {navLinks&&(
            <ul className={`md:hidden lg:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full 
                h-screen bg-gradient-to-b from-black to-gray-800 gap-20`}>
                {links.map(link =>
                    <li key={link.id} className='cursor-pointer capitalize text-gray-500 text-4xl 
                    font-medium hover:scale-105 duration-200 w-full text-center'
                    >
                        <Link to={link.text} smooth duration={500} onClick={onNavClickMobile}>{link.text}</Link>
                    </li>
                )}
            </ul>
        )}
        
    </div>
  )
}

export default NavBar