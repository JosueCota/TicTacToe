import style from "./header.module.css"

export default function Header() {
    return <div className={style.header}>

        <h1 className={style.hash}>#</h1>
        <h1>Tic-Tac-Toe</h1>
        <h1 className={style.hash}>#</h1>

    </div>
}