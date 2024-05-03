import { useState } from "react"
import style from "./box.module.css"

export default function Box({turn, setTurn, setBoxes, boxes, value, key}) {

    const [box, setBox] = useState("");

    
    async function handleClick() {
        if(turn === "O" &&  box=== "") {
            setBox("O")
            square = box;
            setTurn("X")
        } else if(turn==="X" && box==="") {
            setBox("X")
            setBox(boxes => [...boxes, box])
            setTurn("O")
        }
    }

    return <div className={style.box} onClick={handleClick}>{box}</div>
}