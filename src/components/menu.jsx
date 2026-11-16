import s from './menu.module.css'

export const Menu = () => {
    return(
        <nav className={s.menu}>
            <a href="">Primeiro</a> 
            <a href="">Segundo</a>
            <a href="">Terceiro</a>
            <a href="">Quarto</a>
        </nav>
    )
}