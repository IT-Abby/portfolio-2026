import Image from "next/image";
import RotatingText from "./components/RotatingText";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white font-[family-name:var(--font-quicksand)]">
      {/* Desktop Navbar — hidden on mobile */}
      <nav className="hidden md:flex fixed top-0 w-full px-8 py-4 justify-center items-center bg-white/10 backdrop-blur-md backdrop-saturate-1 border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] z-[1000]">
        <ul className="flex gap-8 text-sm font-medium items-center text-[#ABE2F1]">
          <li><a href="#home" className="nav-link transition-all active:text-[#55CDED]">HOME</a></li>
          <li><a href="#about" className="nav-link transition-all active:text-[#55CDED]">ABOUT</a></li>
          <li><a href="#projects" className="nav-link transition-all active:text-[#55CDED]">PROJECTS</a></li>
          <li><a href="#uiux" className="nav-link transition-all active:text-[#55CDED]">UI/UX</a></li>
          <li><a href="#journey" className="nav-link transition-all active:text-[#55CDED]">JOURNEY</a></li>
          <li><a href="#testimonials" className="nav-link transition-all active:text-[#55CDED]">TESTIMONIALS</a></li>
        </ul>
      </nav>

      {/* Mobile Bottom Tab Bar — visible only on mobile */}
      <nav className="flex md:hidden fixed bottom-0 left-0 w-full bg-white/10 backdrop-blur-xl backdrop-saturate-150 border-t border-white/10 z-[1000] px-2 py-2 justify-around items-center">
        <a href="#home" className="flex flex-col items-center gap-1 text-[#55CDED] text-[10px] font-medium">
          {/* icon placeholder */}
          <div className="w-6 h-6 rounded bg-gray-700" />
          <span>HOME</span>
        </a>
        <a href="#about" className="flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium">
          <div className="w-6 h-6 rounded bg-gray-700" />
          <span>ABOUT</span>
        </a>
        <a href="#projects" className="flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium">
          <div className="w-6 h-6 rounded bg-gray-700" />
          <span>PROJECTS</span>
        </a>
        <a href="#uiux" className="flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium">
          <div className="w-6 h-6 rounded bg-gray-700" />
          <span>UI/UX</span>
        </a>
        <a href="#journey" className="flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium">
          <div className="w-6 h-6 rounded bg-gray-700" />
          <span>JOURNEY</span>
        </a>
        <a href="#testimonials" className="flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium">
          <div className="w-6 h-6 rounded bg-gray-700" />
          <span>TESTIMONIALS</span>
        </a>
      </nav>
      {/* Home Section */}
      <section
        id="home"
        className="flex flex-1 items-start justify-center w-full min-h-screen pt-28 pb-16 px-10 md:px-20 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-start">
          {/* Left Column — Text */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-3 items-center"> <Image src="abby.svg" alt="abby" width={50} height={50} />
              <p className="text-lg font-medium tracking-widest text-[#55CDED]">
                <RotatingText texts={["Hello there...", "Let's work together", "Interested?", "Check out my projects"]} />
              </p></div>

            <h1 className="text-5xl md:text-6xl align-left font-bold leading-tight text-gray-900">
              Mobile <br /> Application Developer
            </h1>
            <Image src="divider.svg" alt="divider" width={400} height={100} />
            <p className="text-lg leading-relaxed text-gray-500 max-w-md">
              I build beautiful, performant mobile experiences that users love.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <p className="text-[#55CDED] font-bold">ORGANIZATION'S I'VE WORKED WITH</p>
              <div className="flex flex-row gap-4">
                <Image src="codekada.svg" alt="ck" width={80} height={80} />
                <Image src="okiedoc+.svg" alt="okiedoc+" width={80} height={80} />
                <Image src="adnu.svg" alt="adnu" width={80} height={80} />
                <Image src="bald.svg" alt="bald" width={80} height={80} />
              </div>
            </div>
            <hr className="border-t border-[#55CDED]/30 mt-4" />

            {/* Numbers of Exp. */}
            <div className="flex flex-row gap-20">
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 mt-4">  <NumberTicker startValue={0} value={1} className="text-6xl font-bold" />
                  <span className="text-6xl font-bold text-[#55CDED]">+</span></div>
                <p className="font-bold">Years exp.</p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 mt-4">  <NumberTicker startValue={0} value={3} className="text-6xl font-bold" />
                  <span className="text-6xl font-bold text-[#55CDED]">+</span></div>
                <p className="font-bold">Apps developed</p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 mt-4">  <NumberTicker startValue={0} value={4} className="text-6xl font-bold" />
                  <span className="text-6xl font-bold text-[#55CDED]">+</span></div>
                <p className="font-bold">UI/UX Designes.</p>
              </div>

            </div>

          </div>


          {/* Right Column — Image / Illustration */}
          <div className="flex items-start justify-center pt-4">
            <div className="relative flex items-center justify-center w-full max-w-md aspect-square">
              {/* Concentric rings */}
              <div className="absolute w-[110%] h-[110%] rounded-full bg-[#55CDED]/[0.12] animate-[ring-beat_3s_ease-in-out_infinite_0s]" />
              <div className="absolute w-[100%] h-[100%] rounded-full bg-[#55CDED]/[0.12] animate-[ring-beat_3s_ease-in-out_infinite_0.15s]" />
              <div className="absolute w-[88%] h-[88%] rounded-full bg-[#55CDED]/[0.13] animate-[ring-beat_3s_ease-in-out_infinite_0.3s]" />
              <div className="absolute w-[76%] h-[76%] rounded-full bg-[#55CDED]/[0.14] animate-[ring-beat_3s_ease-in-out_infinite_0.45s]" />
              <div className="absolute w-[64%] h-[64%] rounded-full bg-[#55CDED]/[0.15] animate-[ring-beat_3s_ease-in-out_infinite_0.6s]" />
              <div className="absolute w-[52%] h-[52%] rounded-full bg-[#55CDED]/[0.16] animate-[ring-beat_3s_ease-in-out_infinite_0.75s]" />
              <div className="absolute w-[40%] h-[40%] rounded-full bg-[#55CDED]/[0.17] animate-[ring-beat_3s_ease-in-out_infinite_0.9s]" />
              {/* Mockup on top */}
              <Image src="mockup.svg" alt="mockup" width={500} height={500} className="relative z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
