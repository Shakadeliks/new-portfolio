import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lava from "./assets/lava-bg.mp4";


const Hero = () => {

    

  return (
    <header 
        className="relative flex flex-col justify-center h-screen w-screen px-6 md:px-16 lg:px-28 max-w-full overflow-hidden bg-black-500"
    
    >
        
        <nav className="absolute bg-black top-0 left-0 w-full z-30 px-6 py-5 md:px-16 lg:px-28">
            <h1 className="text-white md:text-xl font-semibold tracking-wide">
                "Olwethu <em className="text-main">Shak</em> Matiwana"
            </h1>  
        </nav>

        <div
            className="relative w-max z-30 justify-self-start px-3 py-5 mb-6 bg-mainDark bg-opacity-70"
        >
            <span className="mr-3 cursor-pointer">
                <a href="https://www.linkedin.com/in/olwethu-matiwana-73bb79159/" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon
                        icon={['fab', 'linkedin']} 
                        size="3x"
                        color="white"
                        className="transition ease-in-out duration-300 hover:text-main"            
                    /> 
                </a>
            </span>
            
            <span className="mr-3 cursor-pointer">
                <a href="https://github.com/Shakadeliks" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="3x"
                        color="white"
                        className="transition ease-in-out duration-300 hover:text-main"   
                    />
                </a>
            </span>
            
            <span className="cursor-pointer">
                <a href="mailto:shakurxmatiwana@gmail.com" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon
                        icon="at"
                        size="3x"
                        color="white"
                        className="transition ease-in-out duration-300 hover:text-main"   
                    />
                </a>
            </span>  
            
        </div>
        <div
            className="relative z-30 mx-30 "
        >
            <h1 
                className="text-2xl max-w-xl md:max-w-2xl lg:max-w-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 leading-relaxed font-extrabold text-main bg-black bg-opacity-70 overflow-hidden p-4 tracking-wider"
            >
                
                Hi, my name is Olwethu but you can call me <em>Shak</em>
            </h1>
            <p className="text-md sm:text-lg md:text-xl lg:text-xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-main text-black p-3 bg-opacity-50 tracking-wide leading-normal font-semibold">Walking the path of the modern web developer, armed with nothing but humililty, a desire to learn and a fat sack of killer tunes to dance along the way.</p>
        </div>  
        <video 
            autoPlay loop muted playsInline
            className="absolute top-0 left-0 right-0 z-0 w-full h-full max-w-none object-cover"
        >
            <source src={Lava} type="video/mp4" />
        </video>
        
    </header>
  )
}

export default Hero