import style from "./header.module.css"

export default function Header() {
    //Displays Title
    return <div className={style.header}>

        <h1 className={style.hash}>#</h1>
        <h1>Square Circle X</h1>
        <h1 className={style.hash}>#</h1>

    </div>;
}