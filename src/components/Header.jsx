import {Filters} from "./Filters"
import { CartIcon } from "./Icons"
import "./Header.css"

export function Header () {
    return (
        <header className="header">
            <h1>React Shop  <CartIcon/></h1>
            <Filters />
        </header>
    )
}