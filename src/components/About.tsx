import { NavLink } from "react-router";

export default function About() {
    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="text-center text-2xl font-bold">About</h1>
            <p className="p-4 w-sm">
                Let's put some information about the game here! As the text gets bigger, it should start to wrap at a reasonable width.
            </p>
            <NavLink className="btn" to="../">back</NavLink>
        </div>
    )
}
