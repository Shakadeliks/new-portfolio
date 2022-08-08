
const Odyssey = () => {
  return (
    <section className="flex flex-col w-full md:flex-row justify-center bg-black py-16 px-12 md:px-14 lg:px-32 lg:py-32">
        <div className="text-white text-left md:text-right text-2xl w-64 md:mr-24">
            the <span className="text-main"><em>odyssey</em></span>
        </div>
        <div className="flex flex-col w-full max-w-2xl pt-9 pl-12 md:p-0">
            <p className="text-white tracking-wide leading-7 font-extralight">
                loremEst ex in sit Lorem enim fugiat reprehenderit eu commodo. Est quis commodo consequat exercitation adipisicing. Elit exercitation amet nostrud tempor irure. Mollit cupidatat nostrud nulla consectetur aliquip non ut ipsum. Quis cillum id velit eiusmod velit ut aliqua in elit officia eu do aliqua. Dolor incididunt pariatur cupidatat minim proident velit in consequat. Amet in laborum do laborum.
            </p>
            <a
              href="https://drive.google.com/file/d/1pzxJ2PDaVLTzr142yycviunOROAIuqAy/view?usp=sharing"
              className="text-white mt-4 text-xl tracking-wide font-semibold"
              rel="noreferrer"
              target="_blank"
              
            >
              <em className=" link link-underline">view my <span className="text-main">resume</span></em>
            </a>
        </div>
    </section>
  )
}

export default Odyssey