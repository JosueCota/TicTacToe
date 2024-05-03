import './App.css'
import Header from './Modules/Header'
import { useState } from 'react'
import Turn from './Modules/Turn'
import Content from './Modules/Content'

export default function App() {

  //Turn state to keep track
  const [turn, setTurn] = useState("O")

  return <div>
          <Header></Header>
          <Turn turn={turn}></Turn>      
          <Content turn={turn} setTurn={setTurn}></Content>
        </div>;
  
}