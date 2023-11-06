import RealEstates from "../assets/Picture2.png"
import quizApp from "../assets/quizapp1.png"
import delicousApp from "../assets/delicousApp.png"
import carcoach from "../assets/carcoach.png"
import imageApi from "../assets/image-api.png"
import storefrontApi from "../assets/storefrontapi.png"
import FireGramApp from "../assets/fireGramApp.png"
 
const Portfolio = () => {
    const portfolios =[
        {
            id: 1,
            src: RealEstates,
            demoLink: "https://estate-explorer.vercel.app/",
            codeLink: "https://github.com/MarianWadia/EstateExplorer"
        },
        {
            id: 2,
            src: "https://github.com/MarianWadia/TodoList-Firebase/raw/master/public/imgs/Screenshot%202023-04-23%20003549.png",
            demoLink: "https://todo-app-c5cdd.firebaseapp.com/",
            codeLink: "https://github.com/MarianWadia/TodoList-Firebase"
        },
        {
            id: 3,
            src: quizApp,
            demoLink: "https://leafy-pika-52095f.netlify.app/",
            codeLink: "https://github.com/MarianWadia/QuizApp"
        },
        {
            id: 4,
            src: delicousApp,
            demoLink: "https://delicious-reciepe-app.vercel.app/",
            codeLink: "https://github.com/MarianWadia/Delicious-RecipeApp"
        },
        {
            id: 5,
            src: carcoach,
            demoLink: "https://car-coach-grad-project.vercel.app/",
            codeLink: "https://github.com/MarianWadia/CarCoach-GradProject"
        },
        {
            id: 6,
            src: FireGramApp,
            demoLink: "https://galleryapp-65683.web.app/",
            codeLink: "https://github.com/MarianWadia/FireGramApp"
        },
        {
            id: 7,
            src: imageApi,
            codeLink: "https://github.com/MarianWadia/Udacity-1st-Image-processing-api"
        },
        {
            id: 8,
            src: storefrontApi,
            codeLink: "https://github.com/MarianWadia/Udacity-storefrontApi"
        },
        {
            id: 9,
            src: "https://github.com/MarianWadia/HostingFullstackApp/raw/master/DOCUMENTS/screenshots/circleci-success.png",
            codeLink: "https://github.com/MarianWadia/HostingFullstackApp"
        }
    ]
    const onButtonClick = (pressedLink)=>{
        window.open(pressedLink,'_blank');
    }

  return (
    <div name="portfolio" className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen lg:h-auto sm:h-auto">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
            <div className="pb-8 mt-20">
                <h3 className="border-b-4 font-bold border-gray-500 inline text-4xl">Portfolio</h3>
                <h5 className="py-6">check out some of my work right here</h5>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map((portfolio)=>(
                    <div className="shadow-md shadow-gray-600 rounded-lg" key={portfolio.id}>
                        <img src={portfolio.src} alt="" className="rounded-md duration-500 w-full h-3/4 max-h-fit hover:scale-110"/>
                        <div className="flex items-center justify-between h-1/4">
                        { portfolio.demoLink && (
                            <button onClick= {()=>onButtonClick(portfolio.demoLink)} className="w-1/2 duration-300 hover:bg-slate-800 hover:opacity-80 p-4 rounded-md text-xs md:text-lg">Demo Link</button>
                        )}
                            <button onClick= {()=>onButtonClick(portfolio.codeLink)} className={`${portfolio.demoLink ? "w-1/2 text-xs md:text-lg" : "w-full text-sm md:text-lg "}  hover:bg-slate-800 hover:opacity-80 p-4 rounded-md`}>Source Code</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio