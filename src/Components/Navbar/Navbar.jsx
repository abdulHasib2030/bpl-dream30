import logo from '../../assets/image/logo.png'
import coinImg from '../../assets/image/coin.png'
import { useState } from 'react';
import PropTypes from 'prop-types'

const Navbar = ({coin}) => {
    const [isOpen, setisOpen] = useState(false);

    return (
        <nav className=" bg-[#F9F7F3]  py-10">
            <div className='flex justify-between  '>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className='hidden lg:flex  text-xl gap-7 text-[#131313B3] items-center '>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                        <li className='flex font-bold text-xl py-4 px-5 border-2 rounded-xl text-black '>{coin} Coin <img className='ml-2'  src={coinImg} alt="" /></li>
                    </ul>

                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setisOpen(!isOpen)} className="text-3xl focus:outline-none">
                            {isOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    
                </div>
            </div>

            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} w-full bg-[#F9F7F3]`}>
                <ul className='flex flex-col items-center text-xl gap-7 text-[#131313B3]'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                    <li className='flex font-bold text-xl py-4 px-5 border-2 rounded-xl text-black'>
                        {coin} Coin <img className='ml-2' src={coinImg} alt="Coin" />
                    </li>
                </ul>
            </div>

        </nav>
    );
};

Navbar.propTypes = {
    coin:PropTypes.number,
}
export default Navbar;