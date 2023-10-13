import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <>
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='bg-gray-500 w-36 h-12 flex justify-center items-center px-4 ml-[-100px] 
                hover:rounded-md duration-300 hover:ml-[-10px]'>
                <a href="https://www.linkedin.com/in/marian-wadia-205605219/" target="_blank" 
                    className='flex flex-row justify-between items-center text-white w-full' rel="noreferrer"
                >
                    <span className='font-bold'>LinkedIn</span>
                    <FaLinkedin size={25}/>
                </a>
            </li>
            <li className='bg-gray-500 w-36 h-12 flex justify-center items-center px-4 ml-[-100px] 
                hover:rounded-md duration-300 hover:ml-[-10px]'>
                <a href="https://github.com/MarianWadia" target="_blank" className='flex flex-row justify-between items-center text-white w-full' rel="noreferrer">
                    <span className='font-bold'>GitHub</span>
                    <FaGithub size={25}/>
                </a>
            </li>
            <li className='bg-gray-500 w-36 h-12 flex justify-center items-center px-4 ml-[-100px] 
                hover:rounded-md duration-300 hover:ml-[-10px]'>
                <a href='mailto:marianwadia55@gmail.com' className='flex flex-row justify-between items-center text-white w-full'>
                    <span className='font-bold'>Email</span>
                    <HiOutlineMail size={25}/>
                </a>
            </li>
            <li className='bg-gray-500 w-36 h-12 flex justify-center items-center px-4 ml-[-100px] 
                hover:rounded-md duration-300 hover:ml-[-10px]'>
                <a href='/MarianWadia_/MarianWadia.pdf' download={true} className='flex flex-row justify-between items-center text-white w-full'>
                    <span className='font-bold'>Resume</span>
                    <BsFillPersonLinesFill size={25}/>
                </a>
            </li>
        </ul>
    </div>

    {/* Mobile Screen devices  */}
    <div className='lg:hidden mx-auto mt-3'>
    <ul className='flex flex-row items-center justify-center'>
        <li className='bg-gray-500 w-12 h-12 flex justify-center items-center  
            rounded-2xl p-2 m-5 hover:opacity-80 duration-300'>
            <a href="https://www.linkedin.com/in/marian-wadia-205605219/" target="_blank" 
                className='flex flex-row justify-between items-center text-white w-full' rel="noreferrer"
            >
                <FaLinkedin size={50}/>
            </a>
        </li>
        <li className='bg-gray-500 w-12 h-12 flex justify-center items-center  
            rounded-2xl p-2 m-5 hover:opacity-80 duration-300'>
            <a href="https://github.com/MarianWadia" target="_blank" className='flex flex-row justify-between items-center text-white w-full' rel="noreferrer">
                <FaGithub size={50}/>
            </a>
        </li>
        <li className='bg-gray-500 w-12 h-12 flex justify-center items-center  
            rounded-2xl p-2 m-5 hover:opacity-80 duration-300'>
            <a href='mailto:marianwadia55@gmail.com' className='flex flex-row justify-between items-center text-white w-full'>
                <HiOutlineMail size={50}/>
            </a>
        </li>
        <li className='bg-gray-500 w-12 h-12 flex justify-center items-center  
            rounded-2xl p-2 m-5 hover:opacity-80 duration-300'>
            <a href='/MarianWadia_/MarianWadia.pdf' download={true} className='flex flex-row justify-between items-center text-white w-full'>
                <BsFillPersonLinesFill size={50}/>
            </a>
        </li>
    </ul>
</div> 
</>

  )
}

export default SocialLinks