import { useEffect, useRef } from 'react'
import AddButton from '../components/AddButton'
import CreateProject from '../components/CreateProject'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'
import { Gradient } from "./Gradient.js";
//import "../index.css"

const gradient = new Gradient();
const Home = () => {
  const [projects] = useGlobalState('projects')
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      console.log(ref);
      gradient.initGradient("#gradient-canvas");
    }
  }, [ref]);
  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <>
     <div className='relative w-screen'>


      <div classname=" left-0 top-0 right-0 h-full w-screen z-10">                           
      <Hero />
      <Projects projects={projects} />
      <CreateProject />
      <AddButton />
      </div> 
      
      <canvas id="gradient-canvas" className='absolute left-0 top-0 -z-10 w-full' data-transition-in ref={ref}></canvas>
     </div>
    </>
  )
}

export default Home
