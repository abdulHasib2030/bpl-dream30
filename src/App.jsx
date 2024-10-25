
// import './App.css'
import {ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"

function App() {
 const [coin, setCoin] = useState(0)
//  const notify = () => toast("This is a toast notification !");



 const cliamFreeCoin = () =>{
  // console.log(6000000)
  setCoin(coin + 6000000)
  toast.success("Credit Added to your Account")
 }

  return (
    <>
    {/* <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div> */}
    <Header cliamFreeCoin ={cliamFreeCoin} coin={coin}>
    </Header>
    <ToastContainer position="top-center"/>
    <Main coin={coin} setCoin = {setCoin}></Main>
    <Footer></Footer>
    </>
  )
}

export default App
