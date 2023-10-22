// import nextjs from "../assets/nextjs.jpg"
const Experience = () => {
    const technologies =[
        {
            id: 1,
            src: "https://th.bing.com/th/id/R.04c5f18749c6a1c64b65f6d8f26d7b53?rik=EJMkD%2f1AqNvvQQ&pid=ImgRaw&r=0",
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 2,
            src: "https://th.bing.com/th/id/OIP.hqYnvXqWahIvRBZKsrRF5wHaHa?pid=ImgDet&rs=1",
            title: "TypeScript",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: "https://th.bing.com/th/id/R.c3ba82a536fe4983dad4c06b578dcd5d?rik=F2s%2bS%2fWmkU2dew&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f584830f5cef1014c0b5e4aa1.png&ehk=nr30%2foGRF6ObcWbuK6%2b%2bzHxe3w8Jb0cawQ6zBp1sH3E%3d&risl=&pid=ImgRaw&r=0",
            title: "ReactJS",
            style: "shadow-blue-600"
        },
        {
            id: 4,
            src: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/f6Qt8KO1SLih4Fj63w7u_DIFc2C0QeiDwUdfRMygI_React_Native_101.png",
            title: "ReactNative",
            style: "shadow-sky-400"
        },
        {
            id: 4,
            src: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3244252/nextjs-icon-md.png",
            title: "NextJS",
            style: "shadow-white"
        },
        {
            id: 4,
            src: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png",
            title: "Angular",
            style: "shadow-red-600"
        },
        {
            id: 5,
            src: "https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png",
            title: "NodeJS",
            style: "shadow-green-500"
        },
        {
            id: 6,
            src: "https://files.raycast.com/sjxs3pxsc6k63ju0fzv8l3cu4v90",
            title: "TailwindCSS",
            style: "shadow-sky-400"
        },
        {
            id: 7,
            src: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png",
            title: "MongoDB",
            style: "shadow-green-400"
        },
        {
            id: 8,
            src: "https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png",
            title: "PostgreSQL",
            style: "shadow-blue-500"
        },
        {
            id: 9,
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Logo_jasmine.svg/800px-Logo_jasmine.svg.png",
            title: "Jasmine",
            style: "shadow-violet-400"
        }

    ]
  return (
    <div name="experience" className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen lg:h-auto sm:h-auto">
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