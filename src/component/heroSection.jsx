import { ArrowRight } from "lucide-react";
import introduce from "../assets/img/introduce.png";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-7 pb-25 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="home">
      <div className="flex flex-col-reverse items-center justify-center lg:justify-between w-full max-w-5xl gap-12 lg:gap-24 xl:flex-row z-10">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5 backdrop-blur-md">
            <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Welcome to my universe</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light text-text-dim">Hello There! I'm</h2>
            <h1 className="font-headline text-6xl sm:text-8xl lg:text-9xl text-text-main tracking-tight leading-[0.8] drop-shadow-2xl">
              Revano<span className="text-primary">.</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-text-dim max-w-xl leading-relaxed font-light">
            A Junior <span className="text-text-main font-medium">Developer</span> specializing in building exceptional digital experiences. Focused on creating intuitive, dynamic, and visually stunning web applications.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4">
            <a href="#project" className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-white transition-all duration-500 bg-primary rounded-xl hover:bg-primary-dark hover:shadow-[0_0_30px_rgba(8,131,149,0.4)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 tracking-widest uppercase">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=6285180536854&text=Hello%20saya%20ingin%20membuat%20website%20%5Bjenis%20webiste%20yang%20ingin%20kamu%20buat%5D%20" className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold transition-all duration-500 bg-surface border border-white/10 text-text-main rounded-xl hover:border-primary/50 hover:bg-surface-light shadow-xl">
              <span className="tracking-widest uppercase">Contact Me</span>
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <SocialIcon href="https://github.com/Vanotech-Dev" icon={<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>} />
            <SocialIcon href="https://www.instagram.com/just0vano?igsh=Mng1MnRiejMwbTc4" icon={<><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></>} />
            <SocialIcon href="https://www.linkedin.com/in/revan-revano-512519385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></>} />
            <SocialIcon href="https://www.tiktok.com/@just0vano?_r=1&_t=ZS-95bvRQnXT6a" icon={<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>} />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] border border-primary/20 rounded-full animate-spin-slow opacity-30"></div>
            <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] border border-white/5 rounded-full animate-reverse-spin opacity-20" style={{ animationDuration: '15s' }}></div>
          </div>

          <div className="relative group perspective-1000 z-10">
            <div className="w-[400px] h-[400px] sm:w-[400px] sm:h-[250px] bg-surface/40 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-3xl flex items-center justify-center transform transition-all duration-1000 group-hover:rotate-y-6 group-hover:-rotate-x-6 hover:shadow-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
              <img
                src={introduce}
                alt="Intro"
                className="w-full h-full object-cover relative z-10 group-hover:scale-102 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-surface-light/90 p-4 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md z-20 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-text-main tracking-wider">AVAILABLE FOR WORK</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a href={href} className="p-3 text-text-dim hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 border border-transparent hover:border-primary/20 bg-surface/50 backdrop-blur-sm group">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">{icon}</svg>
    </a>
  );
}
