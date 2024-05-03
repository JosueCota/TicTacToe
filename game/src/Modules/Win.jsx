import style from "./win.module.css"

export default function Box({win, setWin, setBoxes}) {

    //Resets boxes and win state
    function handleClick() {
        setBoxes({});
        setWin([false, ""])
    }

    return <div className={style.cont}>
        <h2>{win !=="Tie" ? `Congratulations, the winner is ${win} 😄`: `You tied! 😢`}</h2>

        <button className={style.button} onClick={handleClick}>Reset</button>
    </div>

}