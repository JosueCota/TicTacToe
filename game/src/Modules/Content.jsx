import { useState } from "react";
import TicTacToe from "./TicTacToe"
import Win from "./Win"
import style from "./content.module.css"

export default function Content({turn, setTurn}) {
    //For checking win state
    const [win, setWin] = useState([false, ""]);

    //Initialized here in order to reset boxes through Win screen
    const [boxes, setBoxes] = useState({});


    return <div className={style.container}>
        <div className={style.content + " " + style.border}>
            <TicTacToe turn={turn} setTurn={setTurn} setWin={setWin} win={win[0]} boxes={boxes} setBoxes={setBoxes}/> 
        </div>
        {win[0] && <div className={style.content + " " + style.center}>
            <Win win={win[1]} setWin={setWin} setBoxes={setBoxes}></Win>
        </div>}
    </div>
}