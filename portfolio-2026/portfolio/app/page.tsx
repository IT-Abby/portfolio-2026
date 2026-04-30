import Image from "next/image";
import RotatingText from "./components/RotatingText";
import MockupCard from "./components/MockupCard";
import SkillBars from "./components/SkillBars";
import ImageSlideshow from "./components/ImageSlideshow";
import LinkIcon from "./components/LinkIcon";
import ProjectShowcase from "./components/ProjectShowcase";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white font-[family-name:var(--font-quicksand)]">
      {/* Nav Bar*/}
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

      {/* Mobile Nav Bar */}
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

      {/* Home */}
      <section
        id="home"
        className="flex flex-1 items-start justify-center w-full min-h-screen pt-28 pb-16 px-10 md:px-20 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-start">
          {/* Left Column*/}
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-3 items-center"> <Image src="abby.svg" alt="abby" width={50} height={50} />
              <p className="text-lg font-medium tracking-widest text-[#55CDED]">
                <RotatingText texts={["Hello, I'm Gab!", "Let's work together", "Interested?", "Check out my projects"]} />
              </p></div>

            <h1 className="text-5xl md:text-6xl align-left font-bold leading-tight text-gray-900">
              Mobile <br /> Application Developer
            </h1>
            <Image src="divider.svg" alt="divider" width={400} height={100} />
            <p className="text-lg leading-relaxed text-gray-500 max-w-md">
              I build fast and design, intuitive mobile apps that turn real-world problems into smooth, user-friendly experiences.
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


          {/* Right Column */}
          <div className="flex flex-col items-center justify-center pt-4 gap-6">
            <div className="relative flex items-center justify-center w-full max-w-md aspect-square">
              {/* Concentric rings */}
              <div className="absolute w-[110%] h-[110%] rounded-full bg-[#55CDED]/[0.12] animate-[ring-beat_3s_ease-in-out_infinite_0s]" />
              <div className="absolute w-[100%] h-[100%] rounded-full bg-[#55CDED]/[0.12] animate-[ring-beat_3s_ease-in-out_infinite_0.15s]" />
              <div className="absolute w-[88%] h-[88%] rounded-full bg-[#55CDED]/[0.13] animate-[ring-beat_3s_ease-in-out_infinite_0.3s]" />
              <div className="absolute w-[76%] h-[76%] rounded-full bg-[#55CDED]/[0.14] animate-[ring-beat_3s_ease-in-out_infinite_0.45s]" />
              <div className="absolute w-[64%] h-[64%] rounded-full bg-[#55CDED]/[0.15] animate-[ring-beat_3s_ease-in-out_infinite_0.6s]" />
              <div className="absolute w-[52%] h-[52%] rounded-full bg-[#55CDED]/[0.16] animate-[ring-beat_3s_ease-in-out_infinite_0.75s]" />
              <div className="absolute w-[40%] h-[40%] rounded-full bg-[#55CDED]/[0.17] animate-[ring-beat_3s_ease-in-out_infinite_0.9s]" />
              <MockupCard />
            </div>
            <p className="text-lg leading-relaxed text-gray-500 max-w-md text-justify">
              Beepney is a mobile application that helps commuters find the nearest and most convenient public transportation options in their area.
              It also includes safety features such as call emergency hotlines, file a complaint and many more.
            </p>
            <Marquee className="max-w-md [--duration:20s]">
              <Image src="react native.svg" alt="rn" width={30} height={30} />
              <Image src="ts.svg" alt="ts" width={30} height={30} />
              <Image src="github.svg" alt="gh" width={30} height={30} />
              <Image src="supabase.svg" alt="sb" width={30} height={30} />
              <Image src="expo.svg" alt="exp" width={30} height={30} />
              <Image src="node.svg" alt="node" width={30} height={30} />
              <Image src="mapbox.svg" alt="mb" width={30} height={30} />
              <Image src="css.svg" alt="css" width={30} height={30} />
            </Marquee>

          </div>
        </div>
      </section>

      {/* About */}
      <section id="about"
        className="flex flex-1 items-start justify-center w-full min-h-screen pt-28 pb-16 px-10 md:px-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-start">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium tracking-widest text-[#55CDED]">
              ABOUT
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Passionate of being a developer & designer
            </h1>
            <p className="text-lg text-justify leading-relaxed text-gray-500 pt-4 max-w-md">
              I'm Gabriel Señar, a BS IT graduate from Ateneo de Naga University.
              I’m a mobile app developer who enjoys turning ideas into clean, user-friendly experiences. I work mostly with React Native and have a strong foundation in UI/UX, making sure every app I build is both functional and intuitive. <br /><br />
              I’ve had hands-on experience developing real-world applications, collaborating with teams, and adapting quickly in fast-paced environments. Right now, I’m focused on improving my skills, exploring better design systems, and building products that people actually enjoy using.

            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-3xl items-start w-full font-bold tracking-widest text-[#55CDED]">
              Tech Stack
            </p>
            <SkillBars />
          </div>
        </div>
      </section>

      <section id="projects" className="flex flex-1 items-start justify-center w-full min-h-screen pt-28 pb-16 px-10 md:px-20 overflow-hidden">
        <div className="flex flex-col w-full max-w-6xl items-start">
          <p className="text-lg font-medium tracking-widest text-[#55CDED]">
            PROJECTS
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-10">
            Let me tell you more <br /> about my projects
          </h1>

          <ImageSlideshow
            images={[
              { src: "/desktop.png", alt: "Project 1" },
              { src: "/desktop.png", alt: "Project 2" },
              { src: "/desktop.png", alt: "Project 3" },
              { src: "/desktop.png", alt: "Project 4" },
            ]}
          />
          <div className="flex flex-row gap-5 items-center">
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
              Beepney
            </h1>
            <LinkIcon href="https://beepney.vercel.app/" />
          </div>
          <p className="text-lg text-justify leading-relaxed text-gray-500 pt-4 max-w-full">
            I'm Gabriel Señar, a BS IT graduate from Ateneo de Naga University.
            I’m a mobile app developer who enjoys turning ideas into clean, user-friendly experiences. I work mostly with React Native and have a strong foundation in UI/UX, making sure every app I build is both functional and intuitive.
            I’ve had hands-on experience developing real-world applications, collaborating with teams, and adapting quickly in fast-paced environments. Right now, I’m focused on improving my skills, exploring better design systems, and building products that people actually enjoy using.

          </p>
          <Marquee className="max-w-md [--duration:20s]">
            <Image src="react native.svg" alt="rn" width={30} height={30} />
            <Image src="ts.svg" alt="ts" width={30} height={30} />
            <Image src="github.svg" alt="gh" width={30} height={30} />
            <Image src="supabase.svg" alt="sb" width={30} height={30} />
            <Image src="expo.svg" alt="exp" width={30} height={30} />
            <Image src="node.svg" alt="node" width={30} height={30} />
            <Image src="mapbox.svg" alt="mb" width={30} height={30} />
            <Image src="tailwind.svg" alt="tailwind" width={30} height={30} />
          </Marquee>
        </div>
      </section>
    </div>
  );
}
