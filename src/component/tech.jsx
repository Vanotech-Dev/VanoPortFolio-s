export default function Tech() {
    return (
        <section id="tech" className="flex flex-col items-center justify-center min-h-screen py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="w-full max-w-6xl z-10">
                <div className="flex flex-col items-center justify-center gap-6 mb-24">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 shadow-sm backdrop-blur-md">
                        <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">My Skills &lt;/&gt;</span>
                    </div>
                    <h1 className="font-headline text-6xl sm:text-8xl lg:text-9xl text-text-main tracking-tight drop-shadow-2xl text-center">
                        THE TECH STACK<span className="text-primary">.</span>
                    </h1>
                    <div className='w-24 h-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(8,131,149,0.5)]'></div>
                </div>

                <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex overflow-hidden">
                    {/* First Row: Fast right to left */}
                    <div className="flex gap-8 py-4 animate-marquee whitespace-nowrap min-w-full flex-none hover:[animation-play-state:paused]">
                        <TechList />
                        <TechList />
                    </div>

                    {/* Gradient Overlays */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-bg-deep to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-bg-deep to-transparent z-10 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}

const TECH_DATA = [
    { name: "React", color: "text-[#61DAFB]" },
    { name: "JavaScript", color: "text-[#F7DF1E]" },
    { name: "Tailwind CSS", color: "text-[#06B6D4]" },
    { name: "Node.js", color: "text-[#339933]" },
    { name: "Vite", color: "text-[#646CFF]" },
    { name: "HTML5", color: "text-[#E34F26]" },
    { name: "CSS3", color: "text-[#1572B6]" },
    { name: "Git", color: "text-[#F05032]" },
];

function TechList() {
    return (
        <>
            {TECH_DATA.map((tech, index) => (
                <div key={index} className="inline-flex items-center gap-4 bg-surface/40 backdrop-blur-xl px-10 py-6 rounded-2xl border border-white/5 shadow-2xl hover:border-primary/50 transition-all duration-300 group/item">
                    <span className={`text-3xl font-bold tracking-tighter ${tech.color} group-hover/item:scale-110 transition-transform`}>
                        {tech.name}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                </div>
            ))}
        </>
    );
}