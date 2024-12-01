import { NavLink } from "react-router"

export default function MainMenu() {
    return (
        <div>
            <h1>Menu</h1>
            <div>
                <button>Home</button>
            </div>
            <div>
                <NavLink to="about">About</NavLink>
            </div>
        </div>
    )
}
