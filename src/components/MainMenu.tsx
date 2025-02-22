import { NavLink } from "react-router";

export default function MainMenu() {
    const levels = [
        { label: "Easy", value: 4 },
        { label: "Medium", value: 6 },
        { label: "Hard", value: 8 },
    ];
    const levelButtons = levels.map((level) => (
        <div key={level.value}>
            <NavLink className="btn w-3xs" to={`game/${level.value}`}>{level.label}</NavLink>
        </div>
    ));
    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="text-2xl font-bold">Main menu</h1>
            <p className="p-2">Welcome to Digit Fidget!</p>
            <div className="py-1">
                {levelButtons}
                <div>
                    <NavLink className="btn w-3xs" to="about">About</NavLink>
                </div>
            </div>
        </div>
    )
}
