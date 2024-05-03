import style from "./turn.module.css"

export default function Turn({turn}) {
    return <p className={style.turn}>Current Turn: {turn}</p>
}