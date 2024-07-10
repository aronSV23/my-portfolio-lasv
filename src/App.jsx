import { useState } from 'react'
import closeBtn from '/icon-menu-close.svg'
import menu from '/icon-menu.svg'

function App() {
  const [menuClicked, setMenuClicked] = useState(true)

  const handleClick = () => {
    setMenuClicked(prevState => !prevState)
  }

  return (
    <div className={`min-h-screen min-w-screen`}>
      <header className="fixed flex top-0 z-50 w-screen  bg-[#e4e4e7]/30 backdrop-blur-md px-4 py-3 ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold" >
            <img src="/code.svg" alt="logo" className="h-6 w-6" />
            <span className="text-2xl font-bold text-primary" >
              Portfolio
            </span>
          </div>
          <div className='w-full' >
            <nav className={`${menuClicked ? 'hidden' : ''} absolute z-40 top-0 right-0 flex flex-col gap-3 bg-white w-[256px] h-screen p-[24px] md:w-full md:static md:bg-inherit items-center md:h-12 space-x-6  md:flex md:flex-row md:justify-center text-sm font-medium `}>
              <div className={`${menuClicked ? 'hidden' : ''} md:hidden w-full px-4 flex place-content-end`}>
                <img className='w-4 h-4 mb-[87px] cursor-pointer ' src={closeBtn} onClick={handleClick} alt="close button" />
              </div>
              <a
                href="#home"
                className="rounded-md px-2 py-2"
              >
                Home
              </a>
              <a
                href="#skills"
                className="rounded-md px-2 py-2"
              >
                Skills
              </a>
              <a
                href="#education"
                className="rounded-md px-2 py-2"
              >
                Education
              </a>
              <a
                href="#projects"
                className="rounded-md px-2 py-2"
              >
                Projects
              </a>
              <a
                href="#about"
                className="rounded-md px-2 py-2"
              >
                About
              </a>
              <a
                href="mailto:aronsotomarino@gmail.com"
                className="rounded-md px-2 py-2"
              >
                Contact
              </a>
            </nav>
            <div className='w-full flex justify-end place-content-end px-4'>
              <img className={`${menuClicked ? '' : 'hidden'} w-4 h-3  cursor-pointer md:hidden`} src={menu} onClick={handleClick} alt="open menu button" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="home" className="w-screen font-Onest py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#fee2e2]">
          <div className="w-full px-4 text-center justify-center content-center md:px-6 pt-24 space-y-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold md:text-6xl">Hi, I am Aaron.</h1>
                <h2 className='font-bold text-3xl md:text-4xl text-[#404040]'>Welcome to my Portfolio</h2>
                <p className="mt-4 text-base mx-12 md:text-lg">I am a dedicated Full Stack Developer. Passionate about creating exceptional user experiences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#projects"
                  className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow-lg transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-white border-[1px] bg-[#f1f5f9] hover:bg-white/50"
                >
                  View Projects
                </a>
                <a
                  href="mailto:aronsotomarino@gmail.com"
                  className="inline-flex h-10 items-center justify-center rounded-md border  px-8 text-sm font-medium shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-[#020617] text-white hover:bg-opacity-80"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="py-20 bg-gradient-to-t from-[#f5f5f5]"
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold">Skills & Knowledge</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg p-6 shadow-xl bg-white">
                <h3 className="mb-4 text-xl font-bold">Frontend Development</h3>
                <ul className="space-y-2">
                  <li>HTML, CSS, JavaScript, Bootstrap</li>
                  <li>React.js, Tailwind CSS</li>
                  <li>React Router 6, Responsive Design</li>
                </ul>
              </div>
              <div className="rounded-lg p-6 shadow-xl bg-white">
                <h3 className="mb-4 text-xl font-bold">Backend Development</h3>
                <ul className="space-y-2">
                  <li>Node.js, Express.js</li>
                  <li>MongoDB, MySQL</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div className="rounded-lg p-6 shadow-xl bg-white">
                <h3 className="mb-4 text-xl font-bold">Other Skills</h3>
                <ul className="space-y-2">
                  <li>Git, GitHub</li>
                  <li>Intermediate-Advanced English</li>
                  <li>Native Spanish language</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          id="education"
          className="py-20 bg-[#f4f4f5] bg-gradient-to-r from-[#fafafa] to-[#f5f5f4]"
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold">Education</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg p-6 shadow-xl space-y-4 bg-white">
                <img src="/fundet_certificate.jpg" alt="Fundet certificate" className='w-full' />
                <h3 className="mb-4 text-xl font-bold">Full Stack web development technician</h3>
                <p className="font-light text-gray-500">Fundación de desarrollo técnico instrial y social (Fundet), Enero, 2024 - Junio, 2024</p>
                <p className='font-Onest'>
                  Graduated with a technician degree in web development, focusing in both, front-end and back-end technologies.
                </p>
              </div>
              <div className="rounded-lg p-6 shadow-xl space-y-4 bg-white">
                <img src="/ingles_certificate.jpg" alt="English certificate" className='w-full' />
                <h3 className="mb-4 text-xl font-bold">Intermediate English Certificate</h3>
                <p className="font-light text-gray-500">Centro de educación técnico - prductiva SPEAKWRITE, 2018 </p>
                <p className='font-Onest'>
                  Graduated with an Intermediate-advanced English knowledge, being able to take degree courses in English.
                </p>
              </div>
              <div className="rounded-lg p-6 shadow-xl space-y-4 bg-white">
                <img src="/pathway_certificate.jpg" alt="Pathway certificate" className='w-full' />
                <h3 className="mb-4 text-xl font-bold">Pathway Connect Certificate</h3>
                <p className="font-light text-gray-500">BYU - Pathway Worldwide, 2023 - present</p>
                <p className='font-Onest'>
                  Completed courses getting student and professional skills  with an emphasis on writing, mathematics, and programming.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="py-20 bg-[#f4f4f5]"
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-xl">
                <div>
                  <img
                    src="/weather_app.jpg"
                    alt="Project 1 weather app"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Weather app</h3>
                  <p className="font-sans">
                  A web application that shows different weather facts in your nearest position or in any place that can be found by search. 
                  </p>
                  <ul className="flex gap-2">
                    <li className='px-4 py-1 border-[1px] border-slate-700 rounded-full'>React</li>
                    <li className='px-4 py-1 border-[1px] border-slate-700 rounded-full'>Tailwind CSS</li>
                  </ul>
                  <div className="flex gap-2 mt-2">
                    <a
                      href="https://n3-pf-weather-app-qasa.vercel.app/"
                      className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-xl transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-slate-50 border-[1px] bg-[#f1f5f9] hover:bg-white/50"
                      target='_blank'
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/aronSV23/n3-pf-weather-app"
                      className="inline-flex h-9 items-center justify-center rounded-md border  px-4 py-2 text-sm font-medium shadow-xl transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-opacity-80"
                      target='_blank'
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-xl">
                <div>
                  <img
                    src="/winbnb_app.jpg"
                    alt="Project 1 winbnb app"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Winbnb app</h3>
                  <p className="font-sans">
                  A web application inspired by Airbnb to look for different flats by location and guests.
                  </p>
                  <ul className="flex gap-2">
                    <li className='px-4 py-1 border-[1px] border-slate-700 rounded-full'>React</li>
                    <li className='px-4 py-1 border-[1px] border-slate-700 rounded-full'>CSS</li>
                  </ul>
                  <div className="flex gap-2 mt-2">
                    <a
                      href="https://n3-mp-windbnb.vercel.app/"
                      className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-xl transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-slate-50 border-[1px] bg-[#f1f5f9] hover:bg-white/50"
                      target='_blank'
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/aronSV23/N3-MP-Windbnb"
                      className="inline-flex h-9 items-center justify-center rounded-md border  px-4 py-2 text-sm font-medium shadow-xl transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-opacity-80"
                      target='_blank'
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-xl">
                <div>
                  <img
                    src="/authentication_app.jpg"
                    alt="Project 1 authentication app"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Authentication app</h3>
                  <p className="font-sans">
                  A web application that allows you to register as a new user and allows us to view the profile with your data and edit it. 
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    <li className='px-4 py-1 border-[1px] border-slate-700 rounded-full'>React</li>
                    <li className='px-4 py-1 border-[1px] border-slate-700 rounded-full'>Tailwind CSS</li>
                    <li className='px-4 py-1 border-[1px] border-slate-700 rounded-full'>NodeJS</li>
                    <li className='px-4 py-1 border-[1px] border-slate-700 rounded-full'>MySQL</li>
                  </ul>
                  <div className="flex gap-2 mt-2">
                  <a
                      href="https://github.com/aronSV23/MP_N4_Login_frontend"
                      className="inline-flex h-9 items-center justify-center rounded-md border  px-4 py-2 text-sm font-medium shadow-xl transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-opacity-80"
                      target='_blank'
                    >
                      GitHub Frontend
                    </a>
                    <a
                      href="https://github.com/aronSV23/N4_MP_Login_backend"
                      className="inline-flex h-9 items-center justify-center rounded-md border  px-4 py-2 text-sm font-medium shadow-xl transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-opacity-80"
                      target='_blank'
                    >
                      GitHub Backend
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="py-20 bg-muted text-muted-foreground dark:bg-muted-dark dark:text-muted-foreground-dark"
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold">About Me</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className='items-center flex justify-center'>
                <img src="/foto1.jpg" width={200} height={200} alt="About Me profile picture" className="mb-4 rounded-lg border-[1px] outline-double outline-8 outline-[#1e293b] border-white" />
              </div>
              <div>
                <p className="mb-4">
                My name is Aaron, and I am a dedicated Full Stack Developer passionate about creating exceptional user experiences. I have a strong foundation in both front-end and back-end technologies. I am a hard-working individual who operates with integrity, responsibility, and trustworthiness. My keen observation skills, combined with my initiative and proactive approach, enable me to deliver high-quality web applications that meet and exceed user needs.
                </p>
                <p className="mb-4">
                I like to work in the programming area because I can stay abreast of the latest technological advancements, and I am always eager to learn and adapt to new platforms and software. My goal is to leverage my expertise to develop unique and effective solutions that provide users with seamless and engaging experiences.
                </p>
                <p className="mb-4">
                As a web developer, I am driven by the opportunity to bring cutting-edge technologies to life, ensuring that they are accessible and functional for all users. I look forward to contributing my skills and enthusiasm to a forward-thinking team, where I can continue to grow and make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-muted-foreground dark:bg-muted-dark dark:text-muted-foreground-dark">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 AronSVs.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
