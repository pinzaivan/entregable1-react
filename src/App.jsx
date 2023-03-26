import db from "./db/db.json"
import './App.css'
import { useState } from "react"
import ContainerInfo from "./components/containerInfo"


const images = ["bg1","bg2", "bg3", "bg4"]


function App() {

  const getRandomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length)
    return listItems [randomIndex]
  }
  
  const [quote, setQuote] = useState(getRandomItem(db))
  
  const [bgImage, setBgImage] = useState(getRandomItem(images))


  const handlNewQuote = () => {
    setQuote(getRandomItem(db))
    setBgImage(getRandomItem(images))
  }

  return (
    <div className={`App ${bgImage}`}>
      
    <ContainerInfo quote={quote} handlNewQuote={handlNewQuote}/>



      


    </div>
  )
}

export default App
