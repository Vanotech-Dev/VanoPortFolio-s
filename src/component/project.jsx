import { FolderKanban } from 'lucide-react';

export default function Project() {
    return (
        <section id="project" className="flex flex-col items-center justify-center min-h-screen pt-20 pb-32 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl z-10">
                <div className="flex flex-col items-center justify-center gap-6 mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 shadow-sm backdrop-blur-md">
                        <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">This is my</span>
                    </div>
                    <h1 className="font-headline text-6xl sm:text-8xl lg:text-9xl text-text-main tracking-tight drop-shadow-2xl">
                        PROJECTS<span className="text-primary">.</span>
                    </h1>
                    <div className='w-24 h-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(8,131,149,0.5)]'></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard title="Project 1" link="https://alvinferdinand.site/" description="Web Portofolio" />
                    <ProjectCard title="Project 2" />
                    <ProjectCard title="Project 3" />
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ title, link, description }) {
    return (
        <div className="group relative">
            <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-primary-dark rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-surface p-6 rounded-3xl border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col h-full">
                <div className="relative h-56 w-full bg-bg-deep rounded-2xl border border-white/5 overflow-hidden group-hover:border-primary/30 transition-colors duration-500">
                    <div className="absolute inset-0 bg-radial-to-br from-primary/5 to-transparent z-10 pointer-events-none"></div>
                    {link ? (
                        <div className="w-full h-full p-0 overflow-hidden relative group/iframe">
                            <iframe
                                src={link}
                                className="w-[1280px] h-[800px] origin-top-left scale-[0.25] sm:scale-[0.3] pointer-events-none border-none blur-xl group-hover/iframe:blur-0 transition-all duration-700 object-center lg:object-bottom"
                                title={title}
                                loading="lazy"
                            ></iframe>
                        </div>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 flex justify-center items-center bg-surface-light border border-white/10 shadow-2xl rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <FolderKanban size={40} className='text-primary' />
                            </div>
                        </div>
                    )}

                    <div className="absolute inset-0 opacity-[0.03] bg-size-[20px_20px] bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] pointer-events-none"></div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    {description ? (
                        <div>
                            <h3 className='font-headline text-xl text-text-main tracking-tight group-hover:text-primary transition-colors'>{title}</h3>
                            <p className="text-[10px] text-text-dim uppercase tracking-widest mt-1">{description}</p>
                        </div>
                    ) : (
                        <div>
                            <h3 className='font-headline text-xl text-text-main tracking-tight group-hover:text-primary transition-colors'>{title}</h3>
                            <p className="text-[10px] text-text-dim uppercase tracking-widest mt-1">Web Project</p>
                        </div>
                    )
                    }

                    <a
                        href={link || "#"}
                        target={link ? "_blank" : "_self"}
                        rel="noreferrer"
                        className="p-3 rounded-xl border border-white/10 bg-white/5 group-hover:border-primary/50 text-text-dim group-hover:text-primary group-hover:bg-primary/10 transition-all cursor-pointer"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
