import bannerMain from '../../assets/image/banner-main.png'
import PropTypes from 'prop-types'

const Banner = ({cliamFreeCoin}) => {
  

    return (
        <div className="bg-[url('/assets/image/bg-shadow.png')] rounded-2xl bg-cover bg-black  bg-center w-full">
           <div className='text-center text-white space-y-4 py-9'>
           <img className='mx-auto' src={bannerMain} alt="" />
            <h1 className='text-4xl'>Assemble Your Ultimate Dream 30 Cricket Team</h1>
            <h4 className='text-[#FFFFFFB3] text-2xl'>Beyond Boundaries Beyond Limits</h4>
            <button onClick={cliamFreeCoin} className='rounded-2xl text-black border-2 border-[#E7FE29] py-5 px-2'><span className='font-bold py-4 px-6 bg-[#E7FE29] rounded-xl '>Cliam Free Credit</span></button>
           </div>
        </div>
    );
};
Banner.propTypes = {
    cliamFreeCoin:PropTypes.func,
}
export default Banner;