

export default function DesignGuide() {
    return (
        <div className="min-h-screen bg-[#181825] text-[#F8F8F2] font-mono px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-[#FFD700] font-['Press_Start_2P']">Digit Fidget UI Design Guide</h1>
                <p className="mb-8 text-lg text-[#00FFD0] font-['VT323']">A retro-inspired design system for the Digit Fidget puzzle game.</p>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-2 text-[#FFD700] font-['Press_Start_2P']">Theme Overview</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Retro, 80s/90s digital/arcade style</li>
                        <li>Fonts: <span className="font-['Press_Start_2P']">Press Start 2P</span>, <span className="font-['VT323']">VT323</span></li>
                        <li>Color palette: navy, gold, aqua, purple, slate, off-white, red, lime</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-2 text-[#FFD700] font-['Press_Start_2P']">Game Board Grid</h2>
                    <div className="mb-2">Example cell states:</div>
                    <div className="flex gap-4 mb-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-[#22223B] border-4 border-[#00FFD0] text-2xl font-['Press_Start_2P'] shadow-lg">7</div>
                        <div className="w-16 h-16 flex items-center justify-center bg-[#2D3142] border-4 border-[#FFD700] text-2xl font-['Press_Start_2P'] opacity-60">3</div>
                    </div>
                    <div className="text-sm text-[#FFD700]">On cell (left), Off cell (right)</div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-2 text-[#FFD700] font-['Press_Start_2P']">Row/Column Deltas</h2>
                    <div className="flex gap-4 mb-2">
                        <span className="px-4 py-2 rounded bg-[#181825] border-2 border-[#FFD700] text-[#FFD700] font-['VT323'] text-xl animate-pulse">-4</span>
                        <span className="px-4 py-2 rounded bg-[#181825] border-2 border-[#FF3860] text-[#FF3860] font-['VT323'] text-xl">+2</span>
                        <span className="px-4 py-2 rounded bg-[#181825] border-2 border-[#00FF00] text-[#00FF00] font-['VT323'] text-xl">0</span>
                    </div>
                    <div className="text-sm text-[#FFD700]">Gold: needs more, Red: too high, Green: correct</div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-2 text-[#FFD700] font-['Press_Start_2P']">Controls</h2>
                    <div className="flex gap-4 mb-4">
                        <button className="font-['Press_Start_2P'] bg-[#FFD700] text-[#181825] border-2 border-[#FFD700] rounded px-4 py-2 shadow-md hover:bg-yellow-300">Start</button>
                        <button className="font-['Press_Start_2P'] border-2 border-[#FFD700] text-[#FFD700] bg-transparent rounded px-4 py-2 hover:bg-[#FFD700] hover:text-[#181825]">Reset</button>
                    </div>
                    <div className="flex gap-8">
                        <div className="bg-[#181825] border-2 border-[#00FFD0] rounded px-4 py-2 font-['VT323'] text-2xl text-[#00FFD0]">Time: 01:23</div>
                        <div className="bg-[#181825] border-2 border-[#FFD700] rounded px-4 py-2 font-['VT323'] text-2xl text-[#FFD700]">Moves: 12</div>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-2 text-[#FFD700] font-['Press_Start_2P']">Feedback</h2>
                    <div className="mb-2">Win state:</div>
                    <div className="p-4 border-4 border-[#00FF00] rounded-lg bg-[#22223B] animate-pulse text-center text-2xl font-['Press_Start_2P'] text-[#00FF00] mb-2">You Win!</div>
                    <div className="mb-2">Error feedback:</div>
                    <div className="p-2 border-2 border-[#FF3860] rounded bg-[#2D3142] text-[#FF3860] font-['VT323'] w-fit">Delta increased!</div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-2 text-[#FFD700] font-['Press_Start_2P']">Layout & Responsiveness</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Mobile-first: grid and controls stack vertically on small screens</li>
                        <li>Touch-friendly hit areas</li>
                        <li>Dark mode: all colors chosen for high contrast and retro feel</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-2 text-[#FFD700] font-['Press_Start_2P']">Resources</h2>
                    <ul className="list-disc pl-6">
                        <li><a className="underline text-[#00FFD0]" href="https://ui.shadcn.com/">shadcn/ui documentation</a></li>
                        <li><a className="underline text-[#00FFD0]" href="https://tailwindcss.com/">TailwindCSS documentation</a></li>
                        <li><a className="underline text-[#00FFD0]" href="https://fonts.google.com/specimen/Press+Start+2P">Google Fonts: Press Start 2P</a></li>
                        <li><a className="underline text-[#00FFD0]" href="https://fonts.google.com/specimen/VT323">Google Fonts: VT323</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
