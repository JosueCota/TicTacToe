import './App.css'
import Header from './Modules/Header'
import Container from './Modules/Container'
import Boxes from './Modules/Boxes'
import { useState } from 'react'
import Turn from './Modules/Turn'

export default function App() {

  const [turn, setTurn] = useState("O")

  return <div>
          <Header></Header>
          <Turn turn={turn}></Turn>      
          <Container>
            <Boxes turn={turn} setTurn={setTurn}></Boxes>
          </Container>
        </div>;
  
}