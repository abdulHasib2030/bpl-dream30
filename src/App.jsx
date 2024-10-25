
// import './App.css'

import { useState } from "react"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"

function App() {
 const [coin, setCoin] = useState(0)

 const cliamFreeCoin = () =>{
  console.log(6000000)
  setCoin(coin + 6000000)
 }

  return (
    <>
    <Header cliamFreeCoin ={cliamFreeCoin} coin={coin}></Header>
    <Main coin={coin} setCoin = {setCoin}></Main>
    <Footer></Footer>
    </>
  )
}

export default App
