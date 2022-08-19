
const Odyssey = () => {
  return (
    <section className="flex flex-col w-full md:flex-row justify-center bg-black py-16 px-12 md:px-14 lg:px-32 lg:py-32">
        <div className="text-white text-left md:text-right text-2xl w-64 md:mr-24">
            the <span className="text-main"><em>odyssey</em></span>
        </div>
        <div className="flex flex-col w-full max-w-2xl pt-9 pl-12 md:p-0">
            <p className="text-white tracking-wide leading-7 font-extralight mb-5">
                As a junior developer, I spend my time immersing myself in the world of web development. A big part of which includes creating original web apps that challenge me to learn new technologies and solutions - and broadening my understanding of core development concepts and patterns. The web development landscape is ever-changing and keeping up with the latest perpectives and methodologies is a significant aspect of my learning process.
            </p>
            {"\n"}
            <p className="text-white tracking-wide leading-7 font-extralight">
              I'm looking forward to being an active member of a team of passionate developers, in order to have the privilege of soaking up a wealth of knowledge - as well as being able to pass on what I have learnt. I plan on thriving in applying my skills, keen initiatve and perspective on real business objectives.
            </p>
            <a
              href="https://drive.google.com/file/d/1G38l65tPFwnZaqkeoESU14SLYO-333Kb/view?usp=sharing"
              className="text-white mt-4 text-xl tracking-wide font-semibold"
              rel="noreferrer"
              target="_blank"
              
            >
              <em className=" link link-underline">
                view my <span className="text-main"> resume </span>
              </em>
            </a>
        </div>
    </section>
  )
}

export default Odyssey