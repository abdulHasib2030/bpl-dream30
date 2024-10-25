import PropTypes from 'prop-types'

const Nab = ({selectedBtn, isSelect, selectedPlayers}) => {
    return (
        <div className="md:flex justify-between space-y-3">
            {
                isSelect?<h1 className="text-2xl font-bold">Available Players</h1>: <h1 
                className="text-2xl font-bold">
            Selected Players ({selectedPlayers.length}/6)</h1>
            }
            <div className='flex'>
            <button onClick={() => selectedBtn(true)} className={`${isSelect? 'bg-[#E7FE29]':'' } rounded-l-xl 
            border-[#E7FE29] border font-bold py-3 px-7`}>Available</button>
            <button onClick={() => selectedBtn(false)} className={`${!isSelect? 'bg-[#E7FE29]':''} rounded-r-xl py-3 
            px-7 font-bold border`}>Selected ({selectedPlayers.length})</button>
            </div>
        </div>
    );
};

Nab.propTypes={
  selectedBtn:PropTypes.func,
  isSelect:PropTypes.bool,
  selectedPlayers:PropTypes.array,
}

export default Nab;