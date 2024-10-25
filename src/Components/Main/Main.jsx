import Nab from './Nab';
import Card from './Card';
import Newsletter from '../Newsletter/Newsletter';
import { useState } from 'react';
import { useEffect } from 'react';
import Selected from './Selected';

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
            return alert("You can't choose player because your coin not able this player price.")
        }
        else{
            setCoin(coin - newSelectedPlay.biddingPrice)
        }

        if (selectedPlayers.length > 5){
            return alert("You can't add more player.")
        }
        
       setSelectedPlayers((oldSelectedPlayer) => [...oldSelectedPlayer,newSelectedPlay ])
    
    }

    const deleteSelectedItem = (id) =>{
        const newSelectedPlay = selectedPlayers.filter((playerId) => playerId.playerId != id)
        console.log(newSelectedPlay)
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
                 players.map(player => <Card selectItem={selectItem} player={player} coin={coin} key={player.playerId}></Card>)
                }
                 
             </div>: 
                <div className='my-11 space-y-3 '>
                    {
                        selectedPlayers.map(selectPlayer => <Selected key={selectPlayer.id} 
                            selectedPlayer = {selectPlayer}
                            deleteSelectedItem = {deleteSelectedItem}
                            ></Selected>)
                    }
                    
                </div>
            
            }

           

            <Newsletter></Newsletter>
        </div>
    );
};

export default Main;