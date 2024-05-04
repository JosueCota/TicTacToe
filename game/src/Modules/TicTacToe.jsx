import { useEffect} from "react";
import style from "./tictactoe.module.css";

export default function TicTacToe({turn, setTurn, setWin, win, boxes, setBoxes}) {

    //All possible combinations for wins (8)
    const winCon = [ [0,4,8], [0,3,6], [0,1,2], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8] ];

    //Each time boxes is changed, checkWin is called
    useEffect(checkWin, [boxes]);

    function checkWin() {
        //Checks for win, if happens, calls setWin
        let check = false;
        for (const win of winCon){
            if (boxes.hasOwnProperty(win[0]) && boxes[win[0]]=== boxes[win[1]] && boxes[win[1]]=== boxes[win[2]]){
                setWin([true, boxes[win[0]]])
                check = true;
            }
        }
        if (!check) {
            checkTie();
        }
    }
    
    function checkTie(){
        //Edge Case for when no one scores, second part of conditional takes care of second edge case where user wins on last move. 
        //Check if all boxes are filled (if it gets here, winCon already failed)
        
        if (Object.keys(boxes).length === 9 && !win[0]) {
            setWin([true, "Tie"]);             
        }
    }

    async function handleClick(i) {
        if (!win) {    
            //Mark boxes, add pair value to object and change turn
            if(turn === "O" &&  !boxes.hasOwnProperty(i)) {
                await setBoxes(prevState => ({
                    ...prevState,
                    [i]: turn 
                }));
                await setTurn("X")
            } else if(turn==="X" && !boxes.hasOwnProperty(i)) {
                await setBoxes(prevState => ({
                    ...prevState,
                    [i]: turn 
                }));
                await setTurn("O")
            }
        }        
    }

    // I tried using another component, and making the boxes, or initializing a use state with 9 empty params, couldn't make it work however, so I defaulted to using them within this function
    return <div className={style.boxes}>
            <div className={style.box} onClick={() => handleClick(0)}>{boxes[0]}</div>
            <div className={style.box} onClick={() => handleClick(1)}>{boxes[1]}</div>
            <div className={style.box} onClick={() => handleClick(2)}>{boxes[2]}</div>
            <div className={style.box} onClick={() => handleClick(3)}>{boxes[3]}</div>
            <div className={style.box} onClick={() => handleClick(4)}>{boxes[4]}</div>
            <div className={style.box} onClick={() => handleClick(5)}>{boxes[5]}</div>
            <div className={style.box} onClick={() => handleClick(6)}>{boxes[6]}</div>
            <div className={style.box} onClick={() => handleClick(7)}>{boxes[7]}</div>
            <div className={style.box} onClick={() => handleClick(8)}>{boxes[8]}</div>
        </div>
}