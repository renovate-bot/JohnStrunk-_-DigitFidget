import { NavLink } from "react-router"

export default function MainMenu() {
    return (
        <div>
            <h1>Digit Fidget</h1>
            <div>
                <NavLink to="game/4">Easy</NavLink>
            </div>
            <div>
                <NavLink to="game/6">Medium</NavLink>
            </div>
            <div>
                <NavLink to="game/8">Hard</NavLink>
            </div>
            <div>
                <NavLink to="about">About</NavLink>
            </div>
        </div>
    )
}
