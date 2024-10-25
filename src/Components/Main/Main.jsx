import Nab from './Nab';
import Card from './Card';
import Newsletter from '../Newsletter/Newsletter';
import { useState } from 'react';
import { useEffect } from 'react';
import Selected from './Selected';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'

const Main = ({coin, setCoin}) => {
    const [players, setPlayers] = useState([])
    const [selectedPlayers, setSelectedPlayers] = useState([])
    const [isSelect, setIsSelect]= useState(true)

    const selectedBtn = (bool) => {
        // console.log()
        setIsSelect(bool)
    }

    const selectItem = (newSelectedPlay, coin) =>{

        // console.log(newSelectedPlay.biddingPrice, coin)
        if (coin < newSelectedPlay.biddingPrice) {
            return toast.error("Not enough money to buy this player. Claim some Credit.")
        }
        

        if (selectedPlayers.length > 5){
            return toast.error("You can't add more than 6 player.")
        }
        for(const item of  selectedPlayers){
            if (item.playerId === newSelectedPlay.playerId){
                return toast.error('Already added this player.')
            }
        }
        setCoin(coin - newSelectedPlay.biddingPrice)

        setSelectedPlayers((oldSelectedPlayer) => [...oldSelectedPlayer,newSelectedPlay ])

        toast.success(`Congrates !! ${newSelectedPlay.name} is now in your squad`)
    
    }

    const deleteSelectedItem = (id) =>{
        const newSelectedPlay = selectedPlayers.filter((playerId) => playerId.playerId != id)
         toast.warning("Player removed.")
       setSelectedPlayers(newSelectedPlay)

    }
    

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])


    return (
        <div className='md:container mx-auto w-[92%] my-20'>
            <Nab selectedPlayers={selectedPlayers} selectedBtn = {selectedBtn} isSelect={isSelect}></Nab>

            {
                isSelect?  <div className="my-11 grid md:grid-cols-3 space-y-3 gap-8">
               
                {
                 players.map(player => <Card selectItem={selectItem} player={player} coin={coin} key={player.playerId}>
                 </Card>)
                }
                {/* <ToastContainer position="top-right"/> */}
                 
             </div>: 
                <div className='my-11 space-y-3 '>
                    {
                        selectedPlayers.map(selectPlayer => <Selected key={selectPlayer.id} 
                            selectedPlayer = {selectPlayer}
                            deleteSelectedItem = {deleteSelectedItem}
                            ></Selected>)
                    }

                    <div>
      <button onClick={() => selectedBtn(true) } className='rounded-2xl text-black border-2 border-[#E7FE29] py-5 px-2'><span className='font-bold py-4 px-6 bg-[#E7FE29] rounded-xl '>Add More Player</span></button>

                    </div>
                    
                </div>
            
            }

           

            <Newsletter></Newsletter>
        </div>
    );
};
Main.propTypes = {
    coin:PropTypes.number,
    setCoin:PropTypes.array,
}
export default Main;