import React, { useState } from 'react';
import { projects } from './ProjectData';
import ProjectCard from "./ProjectCard";

const Projects = () => {
    

    
    

    return (
        <section className='justify-center w-full bg-black py-16 px-12 md:px-14 lg:px-32 lg:py-32'>
            <div className=' project__title text-white mb-5 text-left lg:text-right text-2xl md:mb-14'>
                my <span className='text-main'><em>projects</em></span>
            </div>
            {
                projects.map(( p ) => (
                    <ProjectCard
                        key={p.id}
                        name={p.name}
                        stack={p.stack}
                        liveProject={p.liveProject}
                        github={p.github}
                        description={p.description}
                        moreDescription={p.moreDescription}
                        images={p.images}
                    />
                ))
            }
        </section>
    
    )
}

export default Projects;