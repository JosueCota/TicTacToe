import { useEffect, useState } from "react";
import style from "./boxes.module.css";
import Box from "./Box";

export default function Boxes({turn, setTurn}) {

    const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);
    
    console.log(boxes);
    useEffect(() => {
        const winCon = [ [0,4,8], [0,3,6], [0,1,2], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]];
        
        for (const win of winCon){
            if (boxes[win[0]][1]!=="" && boxes[win[0]][1]=== boxes[win[1]][1] && boxes[win[1]][1]=== boxes[win[2]][1]){
                console.log(boxes[win[0]])
                console.log('Winner')
            }
        }
                 
    }, [boxes]);

    return <div className={style.boxes}>
            {boxes.map((value, ind) => (
                <Box key={ind} value={value} setBoxes={setBoxes} boxes={boxes} setTurn={setTurn} turn={turn}></Box>
            ))}
        </div>;
}