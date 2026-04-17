import NavBar from "./component/navBar";
import HeroSection from "./component/heroSection";
import Project from "./component/project";
import Tech from "./component/tech";
import Testimoni from "./component/testimoni";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-bg-deep text-text-main font-sans selection:bg-primary/30 selection:text-primary-foreground pb-20 lg:pb-0">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(8,131,149,0.15),transparent_50%)]"></div>
        <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] bg-primary-dark/15 rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[50vw] h-[50vw] bg-surface-light/10 rounded-full mix-blend-screen filter blur-[160px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      <NavBar />
      <HeroSection />
      <Project />
      <Tech />
      <Testimoni />
    </div>
  );
}

export default App;
