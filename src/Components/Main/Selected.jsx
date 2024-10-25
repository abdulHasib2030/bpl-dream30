
import deletebtn from '../../assets/image/delete.png';
import PropTypes from 'prop-types'

const Selected = ({selectedPlayer, deleteSelectedItem}) => {
    const {name, role, image, playerId} = selectedPlayer;
    console.log(selectedPlayer)
    return (
        <div className='border rounded-xl flex justify-between items-center py-4 px-4'>
            <div className='flex gap-6 items-center'>
                <img src={image} className='w-20 rounded-xl' alt="" />
                <div>
                    <h4 className='font-bold text-2xl mb-3'>{name}</h4>
                    <h4 className='text-[#13131399]'>{role}</h4>
                </div>
            </div>
            <div className='cursor-pointer' onClick={() => deleteSelectedItem(playerId)}>
                <img src={deletebtn} className='w-8 h-8' alt="" />
            </div>

        </div>
    );
};

Selected.propTypes = {
    selectedPlayer:PropTypes.array,
    deleteSelectedItem:PropTypes.func,
}

export default Selected;