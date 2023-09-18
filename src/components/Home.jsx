/* eslint-disable react/no-unescaped-entities */
import HeroImage from '../assets/personal_picture-removebg.png'
import { BsArrowRight } from "react-icons/bs"
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row gap-10'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='font-bold text-4xl sm:text-7xl text-white'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 p-4 text-sm'>I am a dedicated junior full stack developer with proficiency in JavaScript, React.js, Node.js, Express, PostgreSQL,
                    NoSQL databases (e.g., MongoDB), and various programming languages (PHP, C++, Python). Experienced in Git version
                    control and agile methodologies. Passionate about expanding my tech stack, with strong problem-solving skills. Thrive
                    in collaborative environments, creating innovative solutions aligned with business goals and user expectations.
                    I am always eager to expand my skills and contribute to meaningful projects that make a positive impact on the industry, 
                    furthering my career as a software developer.
                </p>
                <div>
                    <button className='group flex flex-row justify-center items-center gap-2 w-fit px-6 py-3 my-2 text-white 
                        bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-xl 
                        rounded-md cursor-pointer'
                        >
                            Resume
                            <span className='group-hover:rotate-90 duration-300'>
                                <BsArrowRight size={20}/>
                            </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="" className='rounded-2xl mx-auto w-2/3 bg-blue-200 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home 