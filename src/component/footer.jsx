export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-surface/20 border-t border-white/5 pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <h2 className="font-headline text-3xl text-text-main tracking-tighter">
                            REVANO<span className="text-primary">.</span>
                        </h2>
                        <p className="text-text-dim max-w-sm leading-relaxed font-light">
                            Passionate Junior Developer dedicated to building exceptional digital experiences that blend aesthetic beauty with functional excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-text-main uppercase tracking-widest">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'Project', 'Tech', 'Testimoni'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-text-dim hover:text-primary transition-colors duration-300 text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-text-main uppercase tracking-widest">Social Presence</h3>
                        <div className="flex flex-wrap gap-4">
                            <SmallSocialIcon
                                href="https://github.com/Vanotech-Dev"
                                icon={<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>}
                            />
                            <SmallSocialIcon
                                href="https://www.instagram.com/just0vano?igsh=Mng1MnRiejMwbTc4"
                                icon={<><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></>}
                            />
                            <SmallSocialIcon
                                href="https://www.linkedin.com/in/revan-revano-512519385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                icon={<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></>}
                            />
                            <SmallSocialIcon
                                href="https://www.tiktok.com/@just0vano?_r=1&_t=ZS-95bvRQnXT6a"
                                icon={<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-text-dim text-xs font-light tracking-wider">
                        &copy; {currentYear} <span className="text-text-main font-medium">REVANO</span>. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-text-dim text-xs font-light flex items-center gap-2">
                        DESIGNED & BUILT WITH <span className="text-primary animate-pulse">❤</span> BY REVANO
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SmallSocialIcon({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-text-dim hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20 bg-surface/50"
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {icon}
            </svg>
        </a>
    );
}
