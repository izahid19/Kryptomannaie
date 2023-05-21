import { useEffect, useState,useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import Project from './views/Project'
import { isWallectConnected } from './services/blockchain'
import { ToastContainer } from 'react-toastify'
import { Gradient } from "./Gradient.jsx";

const gradient = new Gradient();
const App = () => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      console.log(ref);
      gradient.initGradient("#gradient-canvas");
    }
  }, [ref]);

  useEffect(async () => {
    await isWallectConnected()
    console.log('Blockchain loaded')
    setLoaded(true)
  }, [])

  return (
    <div className='relative w-screen h-full .overflow-y-hidden xl:h-full lg:h-full md:h-full sm:h-screen'>

    <div className="left-0 top-0 right-0 bottom-0 h-full w-screen z-10 sm:w-screen">
      <Header />
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      ) : null}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
    <canvas id="gradient-canvas" className='absolute left-0 top-0 -z-10 w-full h-full xl:h-screen lg:h-screen md:h-screen sm:h-screen' data-transition-in ref={ref}></canvas>
    </div>
  )
}

export default App
