import Button from "../components/Button";

export default function MainMenu() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-ega-black">
            <div className="w-full max-w-xs flex flex-col gap-6">
                <h1 className="font-display text-3xl text-center mb-8 text-ega-yellow">Digit Fidget</h1>
                <Button variant="primary" className="w-full">Easy</Button>
                <Button variant="primary" className="w-full">Medium</Button>
                <Button variant="primary" className="w-full">Hard</Button>
                <Button variant="primary" className="w-full">Extreme</Button>
            </div>
        </div>
    );
}
