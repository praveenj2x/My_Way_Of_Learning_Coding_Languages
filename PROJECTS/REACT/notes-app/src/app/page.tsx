import ColorBends from "@/components/ColorBends";
import Footer from "@/components/footer";
import GradualBlur from "@/components/GradualBlur";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <div style={{ height: "100%", overflowY: "auto"}}>
        <div>
          <div className="flex min-h-screen">
            {/* Left dotted line */}
            <div className="hidden md:block w-[8%] border-r-2 border-dotted border-current opacity-60"></div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden px-4 md:px-0">
              <Navbar />
              <span className="w-full border-b-2 border-dotted border-current opacity-50"></span>

              {/* Header section with background */}
              <div className="relative min-h-[40vh] pt-8 md:pt-[4%]">
                <div className="absolute inset-0 -z-10">
                  <ColorBends
                    className="w-full h-full bg-no-repeat bg-cover rounded-xl"
                    colors={["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"]}
                    rotation={68}
                    speed={0.6}
                    scale={1}
                    frequency={1}
                    warpStrength={1.2}
                    mouseInfluence={1}
                    parallax={0.5}
                    noise={0.1}
                    transparent
                  />
                </div>

                <div className="flex justify-start px-4 md:px-0">
                  <div className="relative inline-block text-[15vw] md:text-[12vw] lg:text-[10vw] outfit group leading-none">
                    Notes
                    <span className="absolute left-1/2 bottom-0 h-[0.3rem] w-0 bg-current transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  </div>
                </div>

                <div className="flex justify-center px-4 md:px-0">
                  <div className="relative inline-block text-[15vw] md:text-[12vw] lg:text-[10vw] outfit group leading-none">
                    For You
                    <span className="absolute left-1/2 bottom-0 h-[0.3rem] w-0 bg-current transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  </div>
                </div>
              </div>

              <span className="w-full pt-8 md:pt-[4%] border-b-2 border-dotted border-current opacity-50"></span>
              
              <div className="flex justify-center py-8 md:py-12">
                <button className="group relative px-8 py-4 md:px-12 md:py-6 bg-black text-white text-xl md:text-2xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Link href="/notes" className="relative z-10">Get Started</Link>
                  <span className="absolute inset-0 bg-linear-to-r from-[#DC0E0E] via-[#31694E] to-[#001BB7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>

              <span className="w-full border-b-2 border-dotted border-current opacity-50"></span>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center py-6 md:py-8 px-4 md:px-8" id="imp">
                <div className="w-full bg-black text-white p-6 md:p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
                  <div className="relative inline-block">
                    <div className="text-4xl md:text-5xl lg:text-6xl pb-4 font-bold">Easy Editing</div>
                    <span className="absolute left-0 bottom-0 h-[0.3rem] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl p-2">
                    Notes app provides a seamless and intuitive editing
                    experience, allowing you to quickly jot down ideas, make
                    changes, and organize your thoughts with ease.
                  </p>
                </div>

                <div className="w-full bg-black text-white p-6 md:p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
                  <div className="relative inline-block">
                    <div className="text-4xl md:text-5xl lg:text-6xl pb-4 font-bold">Auto Save</div>
                    <span className="absolute left-0 bottom-0 h-[0.3rem] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl p-2">
                    Never worry about losing your notes again! Our app
                    automatically saves your work in real-time, ensuring that
                    your thoughts are always secure and accessible whenever you
                    need them.
                  </p>
                </div>

                <div className="w-full bg-black text-white p-6 md:p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
                  <div className="relative inline-block">
                    <div className="text-4xl md:text-5xl lg:text-6xl pb-4 font-bold">About App</div>
                    <span className="absolute left-0 bottom-0 h-[0.3rem] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl p-2">
                    Our Notes app is designed to help you capture and organize
                    your ideas effortlessly. With a user-friendly interface and
                    powerful features, it is the perfect tool for students,
                    professionals, and anyone who loves to jot down their
                    thoughts.
                  </p>
                </div>

                <div className="w-full bg-black text-white p-6 md:p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
                  <div className="relative inline-block">
                    <div className="text-4xl md:text-5xl lg:text-6xl pb-4 font-bold">License</div>
                    <span className="absolute left-0 bottom-0 h-[0.3rem] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl p-2">
                    This Notes app is open-source and available under the MIT
                    License. Feel free to use, modify, and distribute it as per
                    the terms of the license.
                  </p>
                </div>
              </div>

              <span className="w-full pt-4 md:pt-[1%] border-b-2 border-dotted border-current opacity-50"></span>
              <Footer />
              <span className="w-full pt-4 md:pt-[1%] border-b-2 border-dotted border-current opacity-50"></span>
            </div>

            {/* Right dotted line */}
            <div className="hidden md:block w-[8%] border-l-2 border-dotted border-current opacity-60"></div>
          </div>
        </div>
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
