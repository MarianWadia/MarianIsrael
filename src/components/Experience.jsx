
const Experience = () => {
    const technologies =[
        {
            id: 1,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 2,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            title: "TypeScript",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            title: "ReactJS",
            style: "shadow-blue-600"
        },
        {
            id: 4,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            title: "NextJS",
            style: "shadow-white"
        },
        {
            id: 5,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            title: "NodeJS",
            style: "shadow-green-500"
        },
        {
            id: 6,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            title: "TailwindCSS",
            style: "shadow-sky-400"
        },
        {
            id: 7,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            title: "PostgreSQL",
            style: "shadow-blue-500"
        },
        {
            id: 8,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            title: "GitHub",
            style: "shadow-gray-400"
        }
    ]
  return (
    <div name="experience" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 mt-20">
                <h3 className="border-b-4 border-gray-500 inline text-4xl font-bold">Experience</h3>
                <h5 className="py-6">These are the Technologies I have worked with...</h5>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0">
                {technologies.map((technology)=>(
                    <div key={technology.id} className={`shadow-md hover:scale-105 duration-500 rounded-lg py-2 ${technology.style}`}>
                        <img src={technology.src} alt="" className="w-20 mx-auto" />
                        <p className="text-center mt-4">{technology.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience