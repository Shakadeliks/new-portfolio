import { useState } from "react"

const ProjectCard = ({ name, stack, liveProject, github, description, moreDescription, images}) => {

    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        setReadMore(!readMore);
    }

    return (
        !readMore ? (
            <div className="grid grid-cols-1 mb-5 lg:grid-cols-2 gap-x-5 lg:p-5">
                <div className='text-white text-3xl col-span-1 mb-3'>{name}</div>
                <ul className='col-start-1 flex justify-start max-w-md flex-wrap'>
                    {
                        stack.map((s) => (
                            <li className=' text-black font-semibold bg-main ml-0 my-2 mr-3 px-3 py-1'>{s}</li>
                        ))
                    }
                </ul>
                <div className='col-start-1 col-span-1 flex justify-start mb-7'>
                    <a
                        href={liveProject}
                        className="text-white mt-4 text-xl tracking-wide font-semibold cursor-pointer mr-5"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <em className='link link-underline'>view <span className='text-main'>project</span></em>
                    </a>
                    <a
                        href={github}
                        className="text-white mt-4 text-xl tracking-wide font-semibold cursor-pointer"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <em className='link link-underline'>github <span className='text-main'>repo</span></em>
                    </a>
                </div>
                <p className='text-white col-span-1 col-start-1 max-w-md font-light tracking-wide leading-7'>
                    {description}
                    <span className='text-white tracking-wide leading-7'>...</span>
                </p>
                <div className='relative overflow-hidden h-96 col-start-1 row-start-5 lg:col-start-2 lg:row-start-1 col-span-1 row-span-4 max-w-lg flex flex-col items-center justify-center '>
                    <img
                        src={images[0]}
                        alt=""
                        className='absolute rounded-md border-main border-2 outline-offset-4'
                    />
                </div>
                <button
                    className='bg-mainDark text-white w-32 px-3 py-1 transition-colors duration-150 hover:bg-main hover:text-black'
                    onClick={handleReadMore}
                >
                    see more
                </button>
            </div >
        ) : (
            <div className="flex flex-col justify-center my-10 lg:flex-row gap-10 lg:p-5">
                <div className="min-w-min sm:w-10/12">
                    <div className='text-white text-3xl col-span-1 mb-3'>{name}</div>
                    <ul className='col-start-1 flex justify-start max-w-md flex-wrap'>
                        {
                            stack.map((s) => (
                                <li className=' text-black font-semibold bg-main ml-0 my-2 mr-3 px-3 py-1'>{s}</li>
                            ))
                        }
                    </ul>
                    <div className='col-start-1 col-span-1 flex justify-start mb-7'>
                        <a
                            href={liveProject}
                            className="text-white mt-4 text-xl tracking-wide font-semibold cursor-pointer mr-5"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <em className='link link-underline'>view <span className='text-main'>project</span></em>
                        </a>
                        <a
                            href={github}
                            className="text-white mt-4 text-xl tracking-wide font-semibold cursor-pointer"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <em className='link link-underline'>github <span className='text-main'>repo</span></em>
                        </a>
                    </div>
                    <p className='text-white col-span-1 col-start-1 max-w-fit font-light tracking-wide leading-7 lg:min-w-full'>
                        {description}
                        <br></br>
                        {moreDescription}
                    </p>
                    <button
                        className='bg-mainDark text-white w-32 px-3 py-1 mt-3 transition-colors duration-150 hover:bg-main hover:text-black'
                        onClick={handleReadMore}
                    >
                        see less
                    </button>
                </div>
                <div className="flex flex-col gap-8 items-center">
                    {
                        images.map(img => (
                            <img
                                src={img}
                                alt=''
                                className='rounded-md border-main border-2 h-auto sm:max-w-md'
                            />

                        ))
                    }
                </div>
            </div>
        )    
        
        
    )
}

export default ProjectCard