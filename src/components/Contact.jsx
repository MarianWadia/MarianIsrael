/* eslint-disable react/no-unescaped-entities */

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen lg:h-auto sm:h-auto">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 mt-20">
                <h3 className="border-b-4 border-gray-500 inline text-4xl font-bold">Contact Me</h3>
                <h5 className="py-6">Submit the form below to get in touch with me...</h5>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/4ab813c5-50cf-4813-afb8-4d10a9f709b5" method="post" className="flex flex-col w-full md:w-1/2 gap-4">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter Your Name" 
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />

                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Enter Your Email"  
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />

                    <textarea 
                        name="message" 
                        rows={10}
                        placeholder="Enter Your Message Here"  
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
                    </textarea>
                    <button className="text-white 
                        bg-gradient-to-b from-cyan-500 to-blue-500 px-3 sm:px-6 py-3 my-8 mx-auto flex items-center 
                        rounded-md hover:scale-110 duration-300">Let's Talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact