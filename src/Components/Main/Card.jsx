import flag from '../../assets/image/red-flag.png'
import user from '../../assets/image/user.png'
import PropTypes from 'prop-types'

const Card = ({player, selectItem, coin}) => {
    // console.log(typeof player)
    const {name, country, image, role, battingType, bowlingType, biddingPrice} = player
    // console.log(image)
    return (
          
            <div className='border-2 p-6 rounded-2xl space-y-3 font-bold'>
                <img src={image} className='w-full h-72 rounded-2xl' alt="" />
                <div className='flex items-center'>
                    <img src={user} className='w-8 h-8 mr-4' alt="" />
                    <h5>{name}</h5>
                </div>
                <div className='flex justify-between'>
                    <div className='flex text-[#131313B3]'>
                    <img src={flag} className='w-8 h-8 mr-4 text-[#131313B3]' alt="" />
                    <h5>{country}</h5>
                    </div>
                    <button className='bg-gray-100 py-2 px-3 rounded-xl'>{role}</button>
                </div>
                <hr />
                <h6>Rating</h6>
                <div className='flex justify-between' >
                <h5>{battingType}</h5>
                <h5 className='text-[#131313B3]'>{bowlingType}</h5>
                </div>
                <div className='flex justify-between' >
                <h5>Price:$ {biddingPrice}</h5>
                <button onClick={() => selectItem(player, coin)}
                 className='border-2 py-2 hover:bg-[#E7FE29] rounded-xl px-3'>Choose Player</button>
                </div>
            </div>
            
        
    );
};

Card.propTypes = {
    player:PropTypes.object,
    selectItem:PropTypes.func,
    coin:PropTypes.number,
}

export default Card;