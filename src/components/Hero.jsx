import { setGlobalState, useGlobalState } from '../store'
import Typed from "react-typed"
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <>
    <div className="text-center  text-gray-800 py-24 px-6">
      <h1
        className="text-5xl drop-shadow-xl md:text-6xl xl:text-7xl font-bold
      tracking-tight mb-12"
      >
        <span className="capitalize text-slate-50">
        <Typed
          strings={[
            "Welcome to",
            "Bring creative projects to life on",
            "Donnez vie à des projets créatifs sur"
          ]
          }
          typeSpeed={100}
          backSpeed={100}
          loop

          />
        </span>
        <br />
        <span className=" mb-3 uppercase text-yellow-300">Kryptomonnaie.</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-purple-600
        text-slate-200 font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-purple-800 "
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5
        font-medium text-xs leading-tight uppercase text-slate-200 bg-pink-500
        rounded-full shadow-md bg-transparent hover:bg-pink-700
        "
        >
          Back Projects
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-500
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span className='text-white'>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-500
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span className='text-white'>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-500
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span className='text-white'>Donated</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
