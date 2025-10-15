

export default function DesignGuide() {
    return (
        <div className="min-h-screen px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display mb-4">Digit Fidget UI Design Guide</h1>
                <p className="mb-8 text-ega-cyan">A retro-inspired design system for the Digit Fidget puzzle game.</p>

                <section className="mb-10">
                    <h2 className="font-display mb-2 text-ega-yellow">Theme Overview</h2>
                    <ul className="list-disc pl-7 font-body">
                        <li>Retro, 80s/90s digital/arcade style</li>
                        <li>Fonts: <span className="font-display text-ega-yellow">Display</span> (headings), <span className="font-body text-ega-cyan">Body</span> (main text)</li>
                        <li>Color palette (EGA):
                            <span className="text-ega-blue">blue</span>,
                            <span className="text-ega-cyan">cyan</span>,
                            <span className="text-ega-magenta">magenta</span>,
                            <span className="text-ega-brown">brown</span>,
                            <span className="text-ega-light-gray">light gray</span>,
                            <span className="text-ega-dark-gray">dark gray</span>,
                            <span className="text-ega-light-red">light red</span>,
                            <span className="text-ega-light-green">light green</span>,
                            <span className="text-ega-yellow">yellow</span>,
                            <span className="text-ega-white">white</span>
                        </li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="font-display mb-2 text-ega-yellow">Game Board Grid</h2>
                    <div className="mb-2">Example cell states:</div>
                    <div className="flex gap-4 mb-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-ega-blue border-4 border-ega-cyan font-display">7</div>
                        <div className="w-16 h-16 flex items-center justify-center bg-ega-dark-gray border-4 border-ega-yellow font-display opacity-60">3</div>
                    </div>
                    <div>On cell (left), Off cell (right)</div>
                </section>

                <section className="mb-10">
                    <h2 className="font-display mb-2 text-ega-yellow">Row/Column Deltas</h2>
                    <div className="flex gap-4 mb-2">
                        <span className="bg-ega-black border-2 border-ega-yellow text-ega-yellow font-body">-4</span>
                        <span className="bg-ega-black border-2 border-ega-light-red text-ega-light-red font-body">+2</span>
                        <span className="bg-ega-black border-2 border-ega-light-green text-ega-light-green font-body">0</span>
                    </div>
                    <div>Gold: needs more, Red: too high, Green: correct</div>
                </section>

                <section className="mb-10">
                    <h2 className="font-display mb-2 text-ega-yellow">Controls</h2>
                    <div className="flex gap-4 mb-4">
                        <button className="font-display bg-ega-yellow text-ega-black border-2 border-ega-yellow">Start</button>
                        <button className="font-display border-2 border-ega-yellow text-ega-yellow bg-transparent">Reset</button>
                    </div>
                    <div className="flex gap-8">
                        <div className="bg-ega-black border-2 border-ega-cyan font-body text-ega-cyan">Time: 01:23</div>
                        <div className="bg-ega-black border-2 border-ega-yellow font-body text-ega-yellow">Moves: 12</div>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="font-display mb-2 text-ega-yellow">Feedback</h2>
                    <div className="mb-2">Win state:</div>
                    <div className="border-4 border-ega-light-green bg-ega-blue text-center font-display text-ega-light-green">You Win!</div>
                    <div className="mb-2">Error feedback:</div>
                    <div className="border-2 border-ega-light-red bg-ega-dark-gray text-ega-light-red font-body">Delta increased!</div>
                </section>

                <section className="mb-10">
                    <h2 className="font-display mb-2 text-ega-yellow">Layout & Responsiveness</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Mobile-first: grid and controls stack vertically on small screens</li>
                        <li>Touch-friendly hit areas</li>
                        <li>Dark mode: all colors chosen for high contrast and retro feel</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-display mb-2 text-ega-yellow">Resources</h2>
                    <ul className="list-disc pl-6">
                        <li><a className="underline text-ega-cyan" href="https://ui.shadcn.com/">shadcn/ui documentation</a></li>
                        <li><a className="underline text-ega-cyan" href="https://tailwindcss.com/">TailwindCSS documentation</a></li>
                        <li><a className="underline text-ega-cyan" href="https://fonts.google.com/specimen/Bungee">Google Fonts: Bungee</a></li>
                        <li><a className="underline text-ega-cyan" href="https://fonts.google.com/specimen/VT323">Google Fonts: VT323</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
