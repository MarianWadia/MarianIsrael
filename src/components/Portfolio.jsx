import { useState } from "react"

const Portfolio = () => {
    const [link, setLink] = useState('')
    const portfolios =[
        {
            id: 1,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            demoLink: "https://google.com",
            codeLink: "https://google.com"
        },
        {
            id: 2,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            demoLink: "https://google.com",
            codeLink: "https://google.com"
        },
        {
            id: 3,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            demoLink: "https://google.com",
            codeLink: "https://google.com"
        },
        {
            id: 4,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            demoLink: "https://google.com",
            codeLink: "https://google.com"
        },
        {
            id: 5,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            demoLink: "https://google.com",
            codeLink: "https://google.com"
        },
        {
            id: 6,
            src: "https://www.coscreen.co/content/images/size/w600/2021/04/test.jpg",
            demoLink: "https://google.com",
            codeLink: "https://google.com"
        }
    ]
    const onButtonClick = (pressedLink)=>{
        setLink(pressedLink)
        window.open(link,'_blank')
    }

  return (
    <div name="portfolio" className="w-full bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 mt-20">
                <h3 className="border-b-4 border-gray-500 inline text-4xl">Portfolio</h3>
                <h5 className="py-6">check out some of my work right here</h5>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
                {portfolios.map((portfolio)=>(
                    <div className="shadow-md shadow-gray-600 rounded-lg" key={portfolio.id}>
                        <img src={portfolio.src} alt="" 
                            className="rounded-md duration-200 hover:scale-105"/>
                        <div className="flex items-center justify-between">
                            <button onClick= {()=>onButtonClick(portfolio.demoLink)} className="w-1/2 duration-200 hover:bg-slate-500 p-4">Demo Link</button>
                            <button onClick= {()=>onButtonClick(portfolio.codeLink)} className="w-1/2 duration-200 hover:bg-slate-500 p-4">Code</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio