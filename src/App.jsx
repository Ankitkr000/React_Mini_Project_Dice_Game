import Homepage from "./components/Homepage/Homepage"
import Gameplay from "./components/Gameplay/Gameplay"
import { useState } from "react"
import "./App.css"
function App() {
  
  const [isGameStarted,setIsGameStarted]=useState(false)

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev)
  }

  return (
        <>
        {isGameStarted? <Gameplay/>:<Homepage toggle={toggleGamePlay}/>}

        </>
  )
}

export default App
