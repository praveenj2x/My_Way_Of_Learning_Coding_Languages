import ColorBends from "@/components/ColorBends";
import Footer from "@/components/footer";
import GradualBlur from "@/components/GradualBlur";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <div style={{ height: "100%", overflowY: "auto"}}>
        <div>
          <div className="flex min-h-screen">
            {/* Left dotted line */}
            <div className="w-[8%] border-r-2 border-dotted border-current opacity-60"></div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <Navbar />
              <span className="left-[10%] w-full border-b-2 border-dotted border-current opacity-50"></span>

              {/* Header section with background */}
              <div className="relative min-h-[40vh] pt-[4%]">
                <div className="absolute inset-0 -z-10">
                  <ColorBends
                    className="w-full h-full bg-no-repeat bg-cover rounded-xl"
                    colors={["#DC0E0E", "#31694E", "#001BB7"]}
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

                <div className="flex justify-start">
                  <div className="relative inline-block text-[10vw] outfit group leading-none">
                    Notes
                    <span className="absolute left-1/2 bottom-0 h-[0.3rem] w-0 bg-current transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative inline-block text-[10vw] outfit group leading-none">
                    For You
                    <span className="absolute left-1/2 bottom-0 h-[0.3rem] w-0 bg-current transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  </div>
                </div>
              </div>

              <span className="left-[10%] w-full pt-[4%] border-b-2 border-dotted border-current opacity-50"></span>
              <div className="flex flex-row gap-4 justify-center align-middle pt-[1%]">
                <div className="w-[25%] h-auto bg-black text-white p-8 ml-4 rounded-2xl">
                  <div className="text-7xl pb-4 group">Easy Editing</div>

                  <span className="absolute left-1/2 bottom-0 h-[0.3rem] w-0 bg-white transition-all duration-500 group-hover:w-full group-hover:left-0"></span>

                  <p className="text-2xl p-2">
                    Notes app provides a seamless and intuitive editing
                    experience, allowing you to quickly jot down ideas, make
                    changes, and organize your thoughts with ease.
                  </p>
                </div>
                <div className="w-[25%] h-auto bg-black text-white p-8 ml-4 rounded-2xl">
                  <div className="text-7xl pb-4 group">Auto Save</div>

                  <span className="absolute left-1/2 bottom-0 h-[0.3rem] w-0 bg-white transition-all duration-500 group-hover:w-full group-hover:left-0"></span>

                  <p className="text-2xl p-2">
                    Never worry about losing your notes again! Our app
                    automatically saves your work in real-time, ensuring that
                    your thoughts are always secure and accessible whenever you
                    need them.
                  </p>
                </div>
                <div className="w-[25%] h-auto bg-black text-white p-8 ml-4 rounded-2xl">
                  <div className="text-7xl pb-4 group">About App</div>

                  <span className="absolute left-1/2 bottom-0 h-[0.3rem] w-0 bg-white transition-all duration-500 group-hover:w-full group-hover:left-0"></span>

                  <p className="text-2xl p-2">
                    Our Notes app is designed to help you capture and organize
                    your ideas effortlessly. With a user-friendly interface and
                    powerful features, it is the perfect tool for students,
                    professionals, and anyone who loves to jot down their
                    thoughts.
                  </p>
                </div>
                <div className="w-[25%] h-auto bg-black text-white p-8 ml-4 mr-4 rounded-2xl">
                  <div className="text-7xl pb-4 group">License</div>

                  <span className="absolute left-1/2 bottom-0 h-[0.3rem] w-0 bg-white transition-all duration-500 group-hover:w-full group-hover:left-0"></span>

                  <p className="text-2xl p-2">
                    This Notes app is open-source and available under the MIT
                    License. Feel free to use, modify, and distribute it as per
                    the terms of the license.
                  </p>
                </div>
              </div>

              <span className="left-[10%] w-full pt-[1%] border-b-2 border-dotted border-current opacity-50"></span>
              <Footer />
              <span className="left-[10%] w-full pt-[1%] border-b-2 border-dotted border-current opacity-50"></span>
            </div>

            {/* Right dotted line */}
            <div className="w-[8%] border-l-2 border-dotted border-current opacity-60"></div>
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
