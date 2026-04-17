import { Quote } from "lucide-react";

const TESTIMONI_DATA = [
    {
        name: "Alvin Ferdinand",
        role: "Motion Graphic",
        testimoni: "Outstanding work. The attention to detail, performance, and overall design quality made our website feel premium and trustworthy.",
    },
    {
        name: "Daffa",
        role: "UI/UX Designer",
        testimoni: "Working with Revano was a great experience. He has a keen eye for modern and functional design aesthetics.",
    },
    {
        name: "Dimas",
        role: "Web Architech",
        testimoni: "His coding solutions are clean and the website performance is excellent. A great mentor and collaborator!",
    },
];

export default function Testimoni() {
    return (
        <section id="testimoni" className="flex flex-col items-center justify-center min-h-screen pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="w-full max-w-6xl z-10">
                <div className="flex flex-col items-center justify-center gap-6 mb-24">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 shadow-sm backdrop-blur-md">
                        <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Testimonials</span>
                    </div>
                    <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl text-text-main text-center tracking-tight drop-shadow-2xl">
                        WHAT PEOPLE SAY<span className="text-primary">?</span>
                    </h1>
                    <div className='w-24 h-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(8,131,149,0.5)]'></div>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONI_DATA.map((item, index) => (
                        <TestimoniCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimoniCard({ name, role, testimoni }) {
    return (
        <div className="group relative bg-surface/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-primary/10 overflow-hidden">
            {/* Quote Icon Decoration */}
            <div className="absolute -top-4 -right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote size={120} className="text-primary rotate-12" />
            </div>

            <div className="relative z-10">
                <div className="mb-8">
                    <Quote className="text-primary mb-4 opacity-50" size={32} />
                    <p className="text-text-dim leading-relaxed italic text-lg line-clamp-4 group-hover:text-text-main transition-colors duration-500">
                        "{testimoni}"
                    </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="relative group-hover:scale-110 transition-transform duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-linear-to-tr from-primary to-primary-dark flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform">
                            <span className="text-white font-black text-xl -rotate-6">
                                {name.charAt(0)}
                            </span>
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>

                    <div>
                        <h3 className="text-text-main font-bold text-lg tracking-wide">{name}</h3>
                        <p className="text-primary/70 text-sm font-medium uppercase tracking-widest">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}