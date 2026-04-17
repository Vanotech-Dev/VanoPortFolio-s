import { Home, Folder, Code, MessageCircleCode, CircleUser } from "lucide-react";
import HeroSection from "./heroSection";
import Project from "./project";


export default function NavBar() {
  return (
    <nav className="fixed z-50 flex items-center justify-center bottom-6 left-0 w-full px-6 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2 xl:left-0 xl:h-auto xl:w-20 xl:px-0 xl:flex-col">
      <div className="flex bg-surface/70 backdrop-blur-2xl border border-white/10 justify-center items-center flex-row gap-8 w-full max-w-[280px] py-3.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] xl:max-w-none xl:flex-col xl:gap-12 xl:w-full xl:py-10 xl:rounded-r-3xl xl:rounded-l-none xl:border-l-0">
        <NavLink href="#home" icon={<Home size={24} />} label="Home" />
        <NavLink href="#project" icon={<Folder size={24} />} label="Works" />
        <NavLink href="#tech" icon={<Code size={24} />} label="Tech" />
        <NavLink href="#testimoni" icon={<MessageCircleCode size={24} />} label="Testimoni" />
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label }) {
  return (
    <a href={href} className="group flex flex-col items-center gap-1">
      <div className="text-text-dim transition-all duration-300 group-hover:text-primary group-hover:scale-110">
        {icon}
      </div>
      <span className="hidden xl:block text-[10px] text-text-dim opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
        {label}
      </span>
    </a>
  );
}
