"use client";

import HeroSection from "../components/HeroSection";

import { useEffect, useRef } from "react";

export default function Home() {
  const contentRef = useRef(null);

  // Add scroll-triggered animations
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements =
      contentRef.current.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <HeroSection />

      {/* Content section with enhanced artistic UI */}
      <section ref={contentRef} className="py-20 px-4 relative overflow-hidden">
        {/* Artistic background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

          {/* Artistic circles */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-elevate-purple opacity-[0.03] blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-elevate-blue opacity-[0.03] blur-[100px]"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-20 w-40 h-40 border border-elevate-blue opacity-5 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-60 h-60 border border-elevate-purple opacity-5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-800 opacity-10 rounded-full"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Intro section with animated reveal */}
          <div className="mb-24 opacity-0 animate-on-scroll">
            {/* Decorative line */}
            <div className="w-20 h-[1px] bg-gradient-to-r from-elevate-blue to-transparent mb-8"></div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Redefine Brand Identities
              </span>
              <div className="absolute -bottom-3 left-0 w-full h-[1px] bg-gradient-to-r from-elevate-purple to-transparent"></div>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mt-10">
              Elevate is a unique design competition where participants are
              challenged to rebrand real companies and enterprises. Showcase
              your creativity by developing comprehensive visual identities that
              transform how brands are perceived.
            </p>
          </div>

          {/* Feature cards with artistic design */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
            {/* Left column - spans 7 columns */}
            <div className="md:col-span-7 space-y-8">
              <div
                className="group relative animate-on-scroll opacity-0"
                style={{ transitionDelay: "0.1s" }}
              >
                {/* Card background with hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl transition-all duration-500 group-hover:from-gray-800"></div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-elevate-blue via-transparent to-elevate-purple opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Card content */}
                <div className="relative p-8 md:p-10">
                  <div className="flex items-start">
                    {/* Numbered icon */}
                    <div className="flex-shrink-0 mr-6">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-elevate-blue opacity-10"></div>
                        <span className="relative text-xl font-bold text-elevate-blue">
                          01
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-elevate-blue transition-colors duration-300">
                        Creative Challenge
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Each participant or team is assigned a real company or
                        enterprise to rebrand. You'll have the opportunity to
                        reimagine their visual identity from the ground up -
                        including logos, color schemes, typography, and brand
                        applications. Push the boundaries of design and showcase
                        your unique creative vision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="group relative animate-on-scroll opacity-0"
                style={{ transitionDelay: "0.2s" }}
              >
                {/* Card background with hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl transition-all duration-500 group-hover:from-gray-800"></div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-elevate-purple via-transparent to-elevate-pink opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Card content */}
                <div className="relative p-8 md:p-10">
                  <div className="flex items-start">
                    {/* Numbered icon */}
                    <div className="flex-shrink-0 mr-6">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-elevate-purple opacity-10"></div>
                        <span className="relative text-xl font-bold text-elevate-purple">
                          02
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-elevate-purple transition-colors duration-300">
                        Showcase & Recognition
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Present your completed rebrand to a panel of industry
                        professionals and peers. Outstanding work will be
                        recognized with awards and featured in our digital
                        gallery. This is your chance to gain visibility in the
                        design community and add an impressive project to your
                        portfolio that demonstrates your ability to create
                        cohesive brand identities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - spans 5 columns */}
            <div
              className="md:col-span-5 animate-on-scroll opacity-0"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="relative h-full">
                {/* Card background with artistic elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl"></div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-elevate-blue via-elevate-purple to-elevate-pink opacity-20"></div>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-20 h-20 border border-elevate-purple opacity-10 rounded-full"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 border border-elevate-blue opacity-10 rounded-full"></div>

                {/* Card content */}
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-8 inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-elevate-purple to-elevate-pink">
                      Event Highlights
                    </span>
                  </h3>

                  <ul className="space-y-6 mb-auto">
                    {[
                      "Complete rebrand of assigned companies",
                      "Design all aspects of visual identity",
                      "Create compelling brand applications",
                      "Present your concepts to the audience",
                      "Receive feedback from design professionals",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <span className="mr-4 mt-1 text-elevate-purple group-hover:text-elevate-blue transition-colors duration-300">
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
                    <button className="group w-full relative overflow-hidden bg-transparent text-white font-bold py-3 px-6 rounded-lg transition-all duration-500">
                      {/* Button background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-elevate-purple to-elevate-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                      {/* Button border */}
                      <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-elevate-purple to-elevate-pink opacity-100"></div>

                      {/* Button content */}
                      <span className="relative flex items-center justify-center">
                        Register Your Team
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action with artistic design */}
          <div
            className="mt-20 text-center animate-on-scroll opacity-0"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="relative inline-block">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-t border-l border-elevate-blue opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b border-r border-elevate-purple opacity-20"></div>

              {/* Button with glow effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-elevate-blue via-elevate-purple to-elevate-pink blur-xl opacity-30 rounded-full transform scale-110"></div>
                <a
                  href="#"
                  className="relative inline-block bg-gradient-to-r from-elevate-blue via-elevate-purple to-elevate-pink text-white font-bold py-5 px-12 rounded-full text-lg hover:shadow-lg hover:shadow-elevate-purple/20 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    Join the Rebranding Challenge
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
