import Image from "next/image";
import RotatingText from "./components/RotatingText";
import MockupCard from "./components/MockupCard";
import SkillBars from "./components/SkillBars";
import ImageSlideshow from "./components/ImageSlideshow";
import LinkIcon from "./components/LinkIcon";
import ProjectShowcase from "./components/ProjectShowcase";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import NavigationWrapper from "./components/NavigationWrapper";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";

export default function Home() {
  return (
    <NavigationWrapper>
      <div className="flex flex-col flex-1 bg-white font-[family-name:var(--font-quicksand)]">
        {/* Home */}
        <section
          id="home"
          className="flex flex-1 items-start justify-center w-full pt-28 pb-16 px-10 md:px-20 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-start">
            {/* Left Column*/}
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-3 items-center">
                {" "}
                <Image src="abby.svg" alt="abby" width={50} height={50} />
                <p className="text-lg font-medium tracking-widest text-[#55CDED]">
                  <RotatingText
                    texts={[
                      "Hello, I'm Gab!",
                      "Let's work together",
                      "Interested?",
                      "Check out my projects",
                    ]}
                  />
                </p>
              </div>

              <h1 className="text-5xl md:text-6xl align-left font-bold leading-tight text-gray-900">
                Mobile <br /> Application Developer
              </h1>
              <Image src="divider.svg" alt="divider" width={400} height={100} />
              <p className="text-lg leading-relaxed text-gray-500 max-w-md">
                I build fast and design, intuitive mobile apps that turn
                real-world problems into smooth, user-friendly experiences.
              </p>
              <div className="flex flex-col gap-4 mt-2">
                <p className="text-[#55CDED] font-bold">
                  ORGANIZATION'S I'VE WORKED WITH
                </p>
                <div className="flex flex-row gap-4">
                  <Image src="codekada.svg" alt="ck" width={80} height={80} />
                  <Image
                    src="okiedoc+.svg"
                    alt="okiedoc+"
                    width={80}
                    height={80}
                  />
                  <Image src="adnu.svg" alt="adnu" width={80} height={80} />
                  <Image src="bald.svg" alt="bald" width={80} height={80} />
                </div>
              </div>
              <hr className="border-t border-[#55CDED]/30 mt-4" />

              {/* Numbers of Exp. */}
              <div className="flex flex-row gap-20">
                <div className="flex flex-col">
                  <div className="flex flex-row gap-1 mt-4">
                    {" "}
                    <NumberTicker
                      startValue={0}
                      value={1}
                      className="text-6xl font-bold"
                    />
                    <span className="text-6xl font-bold text-[#55CDED]">+</span>
                  </div>
                  <p className="font-bold">Years exp.</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-1 mt-4">
                    {" "}
                    <NumberTicker
                      startValue={0}
                      value={3}
                      className="text-6xl font-bold"
                    />
                    <span className="text-6xl font-bold text-[#55CDED]">+</span>
                  </div>
                  <p className="font-bold">Apps developed</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-1 mt-4">
                    {" "}
                    <NumberTicker
                      startValue={0}
                      value={4}
                      className="text-6xl font-bold"
                    />
                    <span className="text-6xl font-bold text-[#55CDED]">+</span>
                  </div>
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
                Beepney is a mobile application that helps commuters find the
                nearest and most convenient public transportation options in
                their area. It also includes safety features such as call
                emergency hotlines, file a complaint and many more.
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
        <section
          id="about"
          className="flex flex-1 items-start justify-center w-full pt-28 pb-16 px-10 md:px-20 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-start">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-medium tracking-widest text-[#55CDED]">
                ABOUT
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Passionate of being a developer & designer
              </h1>
              <p className="text-lg text-justify leading-relaxed text-gray-500 pt-4 max-w-md">
                I'm Gabriel Señar, a BS IT graduate from Ateneo de Naga
                University. I’m a mobile app developer who enjoys turning ideas
                into clean, user-friendly experiences. I work mostly with React
                Native and have a strong foundation in UI/UX, making sure every
                app I build is both functional and intuitive. <br />
                <br />
                I’ve had hands-on experience developing real-world applications,
                collaborating with teams, and adapting quickly in fast-paced
                environments. Right now, I’m focused on improving my skills,
                exploring better design systems, and building products that
                people actually enjoy using.
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

        {/*Projects*/}
        <section
          id="projects"
          className="flex flex-1 items-start justify-center w-full pt-28 pb-16 px-10 md:px-20 overflow-hidden"
        >
          <div className="flex flex-col w-full max-w-6xl items-start">
            <p className="text-lg font-medium tracking-widest text-[#55CDED]">
              PROJECTS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-10">
              Let me tell you more <br /> about my projects
            </h1>

            <ProjectShowcase
              projects={[
                {
                  title: "Beepney",
                  link: "https://beepney.vercel.app/",
                  description:
                    "A web application that manages the features in the mobile side so that they will be enhancing their commuter experience and safety when taking commutes in their daily lives. This web version of beepney is capable of managing the fare matrices in the philippines, emergency contacts, station details, verify user data, and handling complaints.",
                  images: [
                    { src: "/desktop.png", alt: "Beepney 1" },
                    { src: "/beepney 1.svg", alt: "Beepney 2" },
                    { src: "/beepney 2.svg", alt: "Beepney 3" },
                    { src: "/beepney 3.svg", alt: "Beepney 4" },
                  ],
                  techIcons: [
                    { src: "/react native.svg", alt: "rn" },
                    { src: "/ts.svg", alt: "ts" },
                    { src: "/github.svg", alt: "gh" },
                    { src: "/supabase.svg", alt: "sb" },
                    { src: "/expo.svg", alt: "exp" },
                    { src: "/node.svg", alt: "node" },
                    { src: "/mapbox.svg", alt: "mb" },
                    { src: "/tailwind.svg", alt: "tailwind" },
                  ],
                },
                {
                  title: "Beepney (Mobile)",
                  link: "https://drive.google.com/drive/folders/1qONZ55PTM9dA-UjyeiR9QGvVL57ro6Hs?usp=sharing",
                  description:
                    "A mobile application that helps commuters find the nearest and most convenient public transportation options in their area. It also includes safety features such as emergency hotlines, filing complaints, and more.",
                  images: [
                    {
                      src: "/Mockups/Beepney/beepney.png",
                      alt: "beep 1",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Beepney/beepney 1.png",
                      alt: "beep 1",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Beepney/beepney 2.png",
                      alt: "beep 1",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Beepney/beepney 3.png",
                      alt: "beep 1",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Beepney/beepney 4.png",
                      alt: "beep 1",
                      width: 220,
                      height: 220,
                    },
                  ],
                  techIcons: [
                    { src: "/react native.svg", alt: "rn" },
                    { src: "/github.svg", alt: "gh" },
                    { src: "/supabase.svg", alt: "sb" },
                    { src: "/expo.svg", alt: "exp" },
                    { src: "/node.svg", alt: "node" },
                    { src: "/ts.svg", alt: "ts" },
                  ],
                },
                {
                  title: "IP-Look App",
                  link: "https://example.com",
                  description:
                    "IP lookup application where users can search IP addresses and outputs the geolocation information such as the user’s city region, country, postal code, time zone,coordinates, and Internet Service Provider (ISP)",
                  images: [
                    {
                      src: "/iplookapp.png",
                      alt: "ip",
                      width: 220,
                      height: 220,
                    },
                  ],
                  techIcons: [
                    { src: "react native.svg", alt: "rn" },
                    { src: "ts.svg", alt: "ts" },
                    { src: "ip.svg", alt: "ip" },
                    { src: "supabase.svg", alt: "sb" },
                    { src: "expo.svg", alt: "exp" },
                    { src: "node.svg", alt: "node" },
                    { src: "github.svg", alt: "gh" },
                  ],
                },
                {
                  title: "Mobee Cars App (Mobile)",
                  link: "https://github.com/IT-Abby/mobee-cars-mobile",

                  description:
                    "A React Native mobile app is a dating app-like but soley for cars to see the preference of the car buyers. The app supports offline-first app which users can swipe cars even offline then once online it will reflect to the database.",
                  images: [
                    {
                      src: "/Mockups/Mobee/mobee.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Mobee/mobee 1.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Mobee/mobee 2.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Mobee/mobee 3.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Mobee/mobee 4.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                  ],
                  techIcons: [
                    { src: "react native.svg", alt: "rn" },
                    { src: "laravel.svg", alt: "laravel" },
                    { src: "ts.svg", alt: "ts" },
                    { src: "lottie.svg", alt: "lottie" },
                    { src: "zustand.svg", alt: "zustand" },
                    { src: "npm.svg", alt: "npm" },
                    { src: "sqlite.svg", alt: "sqlite" },
                    { src: "expo.svg", alt: "exp" },
                    { src: "node.svg", alt: "node" },
                    { src: "github.svg", alt: "gh" },
                    { src: "tailwind.svg", alt: "tc" },
                  ],
                },
                {
                  title: "Mobee Cars (Web & Backend)",
                  link: "https://github.com/IT-Abby/mobee-cars-backend",

                  description:
                    "A PHP/Laravel Web and backend side of the mobee cars mobile that handles Authentication and APIs for every features of the app. The web contains user management, view user preferences, and car inventory to manage the cards within the app.",
                  images: [
                    {
                      src: "/Mockups/Mobee (Desktop)/mobee desktop.png",
                      alt: "",
                    },
                    {
                      src: "/Mockups/Mobee (Desktop)/mobee desktop 1.png",
                      alt: "",
                    },
                    {
                      src: "/Mockups/Mobee (Desktop)/mobee desktop 2.png",
                      alt: "",
                    },
                    {
                      src: "/Mockups/Mobee (Desktop)/mobee desktop 3.png",
                      alt: "",
                    },
                  ],
                  techIcons: [
                    { src: "laravel.svg", alt: "laravel" },
                    { src: "php.svg", alt: "php" },
                    { src: "sqlite.svg", alt: "sqlite" },
                    { src: "github.svg", alt: "gh" },
                    { src: "tailwind.svg", alt: "tc" },
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* UI/UX */}
        <section
          id="ui/ux"
          className="flex flex-1 items-start justify-center w-full min-h-screen pt-28 pb-16 px-10 md:px-20 overflow-hidden"
        >
          <div className="flex flex-col w-full max-w-6xl items-start">
            <p className="text-lg font-medium tracking-widest text-[#55CDED]">
              UI/UX DESIGNS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-10">
              Turning ideas into clean, <br /> user-friendly interfaces
            </h1>

            <ProjectShowcase
              projects={[
                {
                  title: "Beepney (Mobile)",
                  link: "https://www.figma.com/design/c9EHczt9S3nEaAliD89lNg/BEEPNEY--START-UP-?t=PAZG7sWFK0pGGhQH-1",
                  description:
                    "A Redesigned UI/UX for a mobile application that helps commuters find the nearest and most convenient public transportation options in their area. It also includes safety features such as emergency hotlines, filing complaints, and more.",
                  images: [
                    {
                      src: "/Mockups/Beepney/beepney.png",
                      alt: "beep 1",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Beepney/beepney 1.png",
                      alt: "beep 1",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Beepney/beepney 2.png",
                      alt: "beep 1",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Beepney/beepney 3.png",
                      alt: "beep 1",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Beepney/beepney 4.png",
                      alt: "beep 1",
                      width: 220,
                      height: 220,
                    },
                  ],
                  techIcons: [],
                },
                {
                  title: "Gym App",
                  link: "https://www.figma.com/design/exSgPJbKH96ZAFRncoZYVe/UI-UX--Personal-Project-1-?node-id=0-1&t=PAZG7sWFK0pGGhQH-1",
                  description:
                    "A UI/UX Design for a mobile application that serves as a platform for fitness enthusiasts to achieve their wellness goals. The app provides personalized workout plans, progress tracking, and features to enhance their fitness journey.",
                  images: [
                    {
                      src: "/Mockups/Gym/gym.png",
                      alt: "gym",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Gym/gym 1.png",
                      alt: "gym 1",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Gym/gym 2.png",
                      alt: "gym 2",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Gym/gym 3.png",
                      alt: "gym 3",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Gym/gym 4.png",
                      alt: "gym",
                      width: 220,
                      height: 220,
                    },
                  ],
                  techIcons: [],
                },

                {
                  title: "Tourism App",
                  link: "https://www.figma.com/design/exSgPJbKH96ZAFRncoZYVe/UI-UX--Personal-Project-1-?node-id=2-4417&t=PAZG7sWFK0pGGhQH-1",

                  description:
                    "A UI/UX Design for a tourism application where users can search for tourist destinations and get information about them.",
                  images: [
                    {
                      src: "/Mockups/Tourism/tourism.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Tourism/tourism 1.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Tourism/tourism 2.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Tourism/tourism 3.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Tourism/tourism 4.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                  ],
                  techIcons: [],
                },
                {
                  title: "Mobee Cars App",
                  link: "https://www.figma.com/design/exSgPJbKH96ZAFRncoZYVe/UI-UX--Personal-Project-1-?node-id=2-4417&t=PAZG7sWFK0pGGhQH-1",

                  description:
                    "A UI/UX Design of a dating app-like but soley for cars to see the preference of the car buyers.",
                  images: [
                    {
                      src: "/Mockups/Mobee/mobee.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Mobee/mobee 1.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Mobee/mobee 2.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Mobee/mobee 3.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                    {
                      src: "/Mockups/Mobee/mobee 4.png",
                      alt: "",
                      width: 220,
                      height: 220,
                    },
                  ],
                  techIcons: [],
                },
              ]}
            />
          </div>
        </section>

        {/* Journey */}
        <section
          id="journey"
          className="flex flex-1 items-start justify-center w-full min-h-screen pt-28 pb-16 px-10 md:px-20 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-start">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-medium tracking-widest text-[#55CDED]">
                JOURNEY
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                From where I started to where I am
              </h1>
              <p className="text-lg text-justify leading-relaxed text-gray-500 pt-4 max-w-md">
                I started my tech journey in senior high school, which led me to
                pursue a BS in Information Technology at Ateneo de Naga
                University. During college, I worked as a Frontend Developer for
                my capstone project, where I focused on building clean and
                user-friendly interfaces. <br />
                <br />I then gained hands-on experience as a UI/UX and Mobile
                App Developer intern at Bald Puppies Solutions Inc., working on
                real-world projects in a collaborative environment. Currently, I
                continue to grow in the same role at OkieDoc+, where I design
                and develop intuitive mobile applications in a remote setup.{" "}
                <br />
                <br />
                Each experience has helped me refine my skills in both design
                and development, shaping how I create user-centered digital
                solutions.
              </p>
            </div>
            <div className="flex flex-col mt-10 justify-center">
              <ExperienceTimeline />
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="flex flex-1 items-start justify-center w-full pt-28 pb-16 px-10 md:px-20 overflow-hidden"
        >
          <div className="flex flex-col w-full max-w-6xl items-start">
            <p className="text-lg font-medium tracking-widest text-[#55CDED]">
              GALLERY
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-10">
              Capturing the process behind <br /> every interface
            </h1>

            <Gallery
              images={[
                { src: "/toga pic.jpg", alt: "" },
                { src: "/pic 1.jpg", alt: "" },
                { src: "/fjc.jpg", alt: "" },
                { src: "/fjc 2.jpg", alt: "" },
                { src: "/dti.jpg", alt: "" },
                { src: "/bepni.jpg", alt: "" },
                { src: "/bepni2.webp", alt: "" },
                { src: "/bepni3.jpg", alt: "" },
                { src: "/ck.jpg", alt: "" },
              ]}
            />
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="flex flex-1 items-start justify-center w-full pt-28 pb-16 px-10 md:px-20 overflow-hidden"
        >
          <div className="flex flex-col w-full max-w-6xl items-start">
            <p className="text-lg font-medium tracking-widest text-[#55CDED]">
              TESTIMONIALS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-10">
              Words from the people <br /> I&apos;ve worked with
            </h1>

            <Testimonials
              reviews={[
                {
                  name: "Eric Tan Jr.",
                  username: "UI/UX Designer",
                  body: "He turns design concepts into pixel-perfect mobile interfaces. What we design is exactly what users experience.",
                  img: "/ck.svg",
                },
                {
                  name: "Karl Axcel Lumabi",
                  username: "UI/UX Designer / Frontend Developer",
                  body: "Working with him feels seamless—he understands both design and development, which makes collaboration fast and efficient.",
                  img: "/ck.svg",
                },
                {
                  name: "Romar Josh Castro",
                  username: "Frontend Developer",
                  body: "His attention to detail in UI implementation is on another level. Everything feels smooth, responsive, and polished.",
                  img: "/ck.svg",
                },
                {
                  name: "Miguel Armando Sta. Ana",
                  username: "Backend Developer",
                  body: "Integrating APIs with his mobile apps is always smooth. He structures things cleanly and thinks ahead.",
                  img: "/ck.svg",
                },
                {
                  name: "John Kristoffer Bicierro",
                  username: "Full Stack / DevOps",
                  body: "He builds with scalability in mind. The apps are not just good-looking—they’re production-ready.",
                  img: "/ck.svg",
                },
                {
                  name: "Patrick Nhel Estrella",
                  username: "Full Stack Developer",
                  body: "You can rely on him to deliver features that work exactly as expected, with solid UI and clean logic.",
                  img: "/ck.svg",
                },
                {
                  name: "John Ken Lanon",
                  username: "QA Engineer",
                  body: "Very minimal bugs and consistent UI behavior. His builds are easy to test and rarely break.",
                  img: "/ck.svg",
                },
                {
                  name: "Michael Daanoy",
                  username: "Project Manager",
                  body: "He communicates clearly, meets deadlines, and delivers high-quality mobile experiences every time.",
                  img: "/ck.svg",
                },
                {
                  name: "Aaron Joshua Señar",
                  username: "Product Owner / Software Engineer",
                  body: "He understands user needs and translates them into intuitive mobile solutions that actually deliver value.",
                  img: "/okiedoc+.svg",
                },
              ]}
            />
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="flex flex-1 items-start justify-center w-full min-h-screen pt-28 pb-16 px-10 md:px-20 overflow-hidden"
        >
          <div className="flex flex-col w-full max-w-6xl items-start">
            <p className="text-lg font-medium tracking-widest text-[#55CDED]">
              CONTACT
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-10">
              Got an idea? Let’s talk
            </h1>
            <div className="flex items-center w-full justify-center">
              {" "}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <hr className="border-t w-[50%] items-center justify-center mx-auto border-[#55CDED]/30 mt-4" />
          <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between py-12">
            <div className="text-center md:text-left flex items-center gap-2">
              <Image src="/abby.svg" alt="abby" height={24} width={24}></Image>
              <p className="text-sm font-medium text-gray-600">
                © 2026 Gabriel Señar. All rights reserved.
              </p>
              <a
                href="/CV - SEÑAR.pdf"
                download
                className="text-gray-600 font-semibold hover:text-gray-900"
              >
                Curriculum Vitae
              </a>
              <div>
                <p>•</p>
              </div>
              <a
                href="/Señar - Resume.pdf"
                download
                className="text-gray-600 font-semibold hover:text-gray-900"
              >
                Resume
              </a>
            </div>

            <div className="flex gap-6 mt-8 md:mt-0">
              <a
                href="https://github.com/IT-Abby"
                className="text-gray-600 hover:text-gray-900"
              >
                <Image
                  src="/github.svg"
                  alt="gh"
                  height={24}
                  width={24}
                ></Image>
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-se%C3%B1ar-it/"
                className="text-gray-600 hover:text-gray-900"
              >
                <Image
                  src="/linkedin.svg"
                  alt="gh"
                  height={24}
                  width={24}
                ></Image>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </NavigationWrapper>
  );
}
