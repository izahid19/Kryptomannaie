import { TbBusinessplan } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <header
      className="flex justify-between items-center
        p-5  shadow-lg z-30 fixed top-0 left-0 right-0 bg-black bg-opacity-50"
    >
      <Link
        to="/"
        className="flex justify-start items-center font-bold
      text-xl text-slate-100 space-x-1"
      >
        <span>Kryptomonnaie</span>
        <TbBusinessplan />
      </Link>

      <div className="flex space-x-2 justify-center">
        {connectedAccount ? (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-purple-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-purple-700"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
