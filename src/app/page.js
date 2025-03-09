import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />

      {/* Content section with enhanced UI */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-elevate-purple opacity-5 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-elevate-blue opacity-5 blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Intro section with animated reveal */}
          <div className="mb-20 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-elevate-blue to-elevate-purple inline-block">
              Redefine Your Creative Boundaries
            </h2>
            <div className="h-1 w-20 bg-elevate-purple mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Elevate is where design professionals come together to push the
              boundaries of creativity and innovation. Our immersive experience
              is designed to inspire, educate, and connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left column */}
            <div className="space-y-8">
              <div className="bg-gray-900 bg-opacity-50 p-8 rounded-xl border border-gray-800 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-elevate-purple/5">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-elevate-blue flex items-center justify-center mr-3 text-sm">
                    01
                  </span>
                  Immersive Experience
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  From hands-on workshops to thought-provoking keynotes, every
                  aspect of Elevate is crafted to help you grow as a designer.
                  Whether you're a seasoned professional or just starting your
                  design journey, Elevate offers valuable insights and
                  networking opportunities that will help you take your skills
                  to the next level.
                </p>
              </div>

              <div className="bg-gray-900 bg-opacity-50 p-8 rounded-xl border border-gray-800 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-elevate-purple/5">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-elevate-purple flex items-center justify-center mr-3 text-sm">
                    02
                  </span>
                  Connect & Collaborate
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Meet and network with like-minded creatives, industry leaders,
                  and potential collaborators. Elevate creates the perfect
                  environment for meaningful connections that can lead to new
                  opportunities, partnerships, and creative breakthroughs.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="bg-gray-900 bg-opacity-50 p-8 rounded-xl border border-gray-800 h-full">
                <h3 className="text-2xl font-bold mb-6 text-elevate-purple">
                  Event Highlights
                </h3>
                <ul className="space-y-5">
                  {[
                    "Interactive workshops led by industry experts",
                    "Networking sessions with like-minded creatives",
                    "Exclusive product demonstrations and tools",
                    "Portfolio reviews by leading design agencies",
                    "Opportunities to collaborate on real-world projects",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="mr-3 mt-1 text-elevate-purple group-hover:text-elevate-blue transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-6 border-t border-gray-800">
                  <button className="w-full bg-transparent hover:bg-elevate-purple border border-elevate-purple text-elevate-purple hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group">
                    <span>Reserve Your Spot</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-20 text-center">
            <div className="inline-block relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-elevate-blue to-elevate-purple blur-md opacity-20 rounded-lg"></span>
              <a
                href="#"
                className="relative inline-block bg-gradient-to-r from-elevate-blue to-elevate-purple text-white font-bold py-5 px-10 rounded-full text-lg hover:shadow-lg hover:shadow-elevate-purple/20 transition-all duration-300 transform hover:scale-105"
              >
                Join the Elevate Experience
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
