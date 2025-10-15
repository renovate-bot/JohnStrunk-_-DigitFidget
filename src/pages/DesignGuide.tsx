
import React from "react";


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
                        <li>
                            <strong>Accessibility (WCAG AAA):</strong> The app meets WCAG AAA color contrast guidelines. For the EGA palette, the following combinations are acceptable:
                            <ul className="mt-2 mb-2">
                                <li>
                                    On <span className="bg-ega-black px-1">black</span> backgrounds:
                                    <span className="ml-2 bg-ega-black text-ega-cyan px-2 py-1 rounded">Cyan</span>
                                    <span className="ml-2 bg-ega-black text-ega-light-gray px-2 py-1 rounded">Light gray</span>
                                    <span className="ml-2 bg-ega-black text-ega-light-green px-2 py-1 rounded">Light green</span>
                                    <span className="ml-2 bg-ega-black text-ega-light-cyan px-2 py-1 rounded">Light cyan</span>
                                    <span className="ml-2 bg-ega-black text-ega-light-magenta px-2 py-1 rounded">Light magenta</span>
                                    <span className="ml-2 bg-ega-black text-ega-yellow px-2 py-1 rounded">Yellow</span>
                                    <span className="ml-2 bg-ega-black text-ega-white px-2 py-1 rounded">White</span>
                                </li>
                                <li>
                                    On <span className="bg-ega-white px-1">white</span> backgrounds:
                                    <span className="ml-2 bg-ega-white text-ega-blue px-2 py-1 rounded border border-ega-dark-gray">Blue</span>
                                    <span className="ml-2 bg-ega-white text-ega-red px-2 py-1 rounded border border-ega-dark-gray">Red</span>
                                    <span className="ml-2 bg-ega-white text-ega-dark-gray px-2 py-1 rounded border border-ega-dark-gray">Dark gray</span>
                                </li>
                                <li>
                                    On <span className="bg-ega-red px-1 text-ega-white">red</span> backgrounds:
                                    <span className="ml-2 bg-ega-red text-ega-white px-2 py-1 rounded">White</span>
                                </li>
                                <li>
                                    On <span className="bg-ega-cyan px-1 text-ega-black">cyan</span> backgrounds:
                                    <span className="ml-2 bg-ega-cyan text-ega-black px-2 py-1 rounded">Black</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="font-display mb-2 text-ega-yellow">Button Styles</h2>
                    <p className="mb-4">DigitFidget uses two main retro-themed button types for menus and navigation. Use these classes for consistent, reusable buttons throughout the app.</p>
                    <div className="flex flex-col gap-4">
                        <div>
                            <span className="block mb-1 font-body text-ega-yellow">Primary Button</span>
                            <button
                                className="font-display px-3 py-1 border-4 border-ega-yellow bg-ega-black text-ega-yellow tracking-widest text-xs sm:text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ega-white pixel-shadow-yellow hover:bg-ega-yellow hover:text-ega-black hover:pixel-shadow-yellow-hover active:bg-ega-dark-gray active:text-ega-yellow active:pixel-shadow-yellow-active"
                            >
                                START GAME
                            </button>
                        </div>
                        <div>
                            <span className="block mb-1 font-body text-ega-cyan">Secondary Button</span>
                            <button
                                className="font-display px-3 py-1 border-4 border-ega-cyan bg-ega-black text-ega-cyan tracking-widest text-xs sm:text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ega-white pixel-shadow-cyan hover:bg-ega-cyan hover:text-ega-black hover:pixel-shadow-cyan-hover active:bg-ega-dark-gray active:text-ega-cyan active:pixel-shadow-cyan-active"
                            >
                                BACK
                            </button>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="font-display mb-2 text-ega-yellow">Game Board Grid</h2>
                    <p className="mb-4">The grid below demonstrates a 3x3 Digit Fidget board. Each cell shows a digit (0-9) and can be toggled on/off. Deltas for each row and column are shown at the right and bottom, respectively.</p>
                    <div className="inline-block">
                        <div className="grid grid-cols-4 grid-rows-4 gap-0">
                            {/* Board cells and row deltas */}
                            {/* Example board state: 1 = on, 0 = off */}
                            {[
                                [1, 0, 1],
                                [0, 1, 0],
                                [1, 1, 0],
                            ].map((rowArr, rowIdx) => {
                                const rowKey = `row-${rowArr.join('-')}`;
                                return (
                                    <React.Fragment key={rowKey}>
                                        {rowArr.map((cell, colIdx) => (
                                            <div
                                                key={['cell', rowIdx.toString(), colIdx.toString(), cell ? 'on' : 'off'].join('-')}
                                                className={
                                                    `w-6 h-6 flex items-center justify-center font-body text-xs sm:w-8 sm:h-8 sm:text-base m-px ` +
                                                    (
                                                        cell
                                                            ? 'border-t-4 border-t-ega-light-gray border-l-4 border-l-ega-light-gray border-b-4 border-b-ega-cyan border-r-4 border-r-ega-cyan bg-ega-yellow text-ega-black hover:bg-ega-light-gray'
                                                            : 'border-t-4 border-t-ega-cyan border-l-4 border-l-ega-cyan border-b-4 border-b-ega-light-gray border-r-4 border-r-ega-light-gray bg-ega-dark-gray text-ega-yellow hover:bg-ega-blue'
                                                    )
                                                }
                                            >
                                                {cell ? 7 : 2}
                                            </div>
                                        ))}
                                        {/* Row delta: negative, zero, positive */}
                                        <div
                                            key={['row-delta', rowIdx.toString(), String([-3, 0, 2][rowIdx])].join('-')}
                                            className={
                                                `w-6 h-6 flex items-center justify-center font-display text-xs sm:w-8 sm:h-8 sm:text-base ` +
                                                ([-3, 0, 2][rowIdx] < 0
                                                    ? 'text-ega-light-red bg-ega-black'
                                                    : [-3, 0, 2][rowIdx] > 0
                                                        ? 'text-ega-yellow bg-ega-black'
                                                        : 'text-ega-light-green bg-ega-black')
                                            }
                                        >
                                            {[-3, 0, 2][rowIdx] > 0 ? '+' : ''}{[-3, 0, 2][rowIdx]}
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                            {/* Column deltas: negative, zero, positive */}
                            {[-2, 0, 4].map((delta, colIdx) => (
                                <div
                                    key={['col-delta', colIdx.toString(), String(delta)].join('-')}
                                    className={
                                        `w-6 h-6 flex items-center justify-center font-display text-xs sm:w-8 sm:h-8 sm:text-base ` +
                                        (delta < 0
                                            ? 'text-ega-light-red bg-ega-black'
                                            : delta > 0
                                                ? 'text-ega-yellow bg-ega-black'
                                                : 'text-ega-light-green bg-ega-black')
                                    }
                                >
                                    {delta > 0 ? '+' : ''}{delta}
                                </div>
                            ))}
                            {/* Empty corner for alignment */}
                            <div className="w-6 h-6 sm:w-8 sm:h-8"></div>
                        </div>
                    </div>
                </section>


                <section className="mb-10">
                    <h2 className="font-display mb-2 text-ega-yellow">Controls</h2>
                    <div className="flex gap-4 mb-4">
                        <button
                            className="font-display px-3 py-1 border-4 border-ega-yellow bg-ega-black text-ega-yellow tracking-widest text-xs sm:text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ega-white pixel-shadow-yellow hover:bg-ega-yellow hover:text-ega-black hover:pixel-shadow-yellow-hover active:bg-ega-dark-gray active:text-ega-yellow active:pixel-shadow-yellow-active"
                        >
                            Start
                        </button>
                        <button
                            className="font-display px-3 py-1 border-4 border-ega-cyan bg-ega-black text-ega-cyan tracking-widest text-xs sm:text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ega-white pixel-shadow-cyan hover:bg-ega-cyan hover:text-ega-black hover:pixel-shadow-cyan-hover active:bg-ega-dark-gray active:text-ega-cyan active:pixel-shadow-cyan-active"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="flex gap-8">
                        <div className="bg-ega-black border-r-2 border-b-2 border-r-ega-cyan border-b-ega-cyan font-body text-ega-cyan px-1 py-0.5">Time: 01:23</div>
                        <div className="bg-ega-black border-r-2 border-b-2 border-r-ega-yellow border-b-ega-yellow font-body text-ega-yellow px-1 py-0.5">Moves: 12</div>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="font-display mb-2 text-ega-yellow">Feedback</h2>
                    <div className="mb-2">Win Dialog Example:</div>
                    <div className="max-w-xs mx-auto border-4 border-ega-light-green bg-ega-blue rounded-lg shadow-lg p-4 flex flex-col items-center">
                        <div className="font-display text-ega-light-green text-xl mb-2">You Win!</div>
                        <div className="flex flex-row gap-4 font-body text-ega-white text-sm mb-4">
                            <span>Moves: <span className="text-ega-yellow font-bold">12</span></span>
                            <span>Time: <span className="text-ega-yellow font-bold">01:23</span></span>
                        </div>
                        <button
                            className="font-display px-3 py-1 border-4 border-ega-yellow bg-ega-black text-ega-yellow tracking-widest text-xs sm:text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ega-white pixel-shadow-yellow hover:bg-ega-yellow hover:text-ega-black hover:pixel-shadow-yellow-hover active:bg-ega-dark-gray active:text-ega-yellow active:pixel-shadow-yellow-active"
                        >
                            OK
                        </button>
                    </div>
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
