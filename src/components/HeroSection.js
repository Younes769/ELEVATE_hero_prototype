"use client";

import { useEffect, useRef, useState } from "react";

// Define phrases with specific colors and design/branding related content
const phrases = [
  { text: "reimagine brands", color: "text-elevate-blue" },
  { text: "craft identities", color: "text-elevate-purple" },
  { text: "design systems", color: "text-elevate-pink" },
  { text: "create logos", color: "text-elevate-orange" },
  { text: "you can transform", color: "text-elevate-green" },
  { text: "define typography", color: "text-elevate-yellow" },
  { text: "build guidelines", color: "text-elevate-red" },
  { text: "develop assets", color: "text-elevate-teal" },
  { text: "elevate brands", color: "text-elevate-indigo" },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allWordsDisplayed, setAllWordsDisplayed] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const sectionRef = useRef(null);
  const phraseRefs = useRef([]);
  const autoAdvanceTimerRef = useRef(null);
  const autoAdvanceInterval = 1500; // Time between auto-advancing phrases (ms)
  const progressIntervalRef = useRef(null);

  // Auto-advance through phrases
  useEffect(() => {
    if (autoAdvanceTimerRef.current) {
      clearInterval(autoAdvanceTimerRef.current);
    }

    autoAdvanceTimerRef.current = setInterval(() => {
      if (activeIndex < phrases.length - 1) {
        setActiveIndex((prevIndex) => prevIndex + 1);
      } else {
        // All phrases have been displayed
        setAllWordsDisplayed(true);
        clearInterval(autoAdvanceTimerRef.current);
      }
    }, autoAdvanceInterval);

    return () => {
      if (autoAdvanceTimerRef.current) {
        clearInterval(autoAdvanceTimerRef.current);
      }
    };
  }, [activeIndex]);

  // Update progress bar
  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    // Calculate target progress based on active index
    const targetProgress = ((activeIndex + 1) / phrases.length) * 100;

    // Smoothly animate to target progress
    progressIntervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < targetProgress) {
          return Math.min(prev + 1, targetProgress);
        } else {
          clearInterval(progressIntervalRef.current);
          return prev;
        }
      });
    }, 20);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [activeIndex]);

  // Lock/unlock scrolling based on whether all words have been displayed
  useEffect(() => {
    const handleWheel = (e) => {
      if (!allWordsDisplayed) {
        e.preventDefault();
      }
    };

    // Prevent scrolling until all words are displayed
    if (!allWordsDisplayed) {
      window.addEventListener("wheel", handleWheel, { passive: false });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto";
    };
  }, [allWordsDisplayed]);

  useEffect(() => {
    phraseRefs.current = phraseRefs.current.slice(0, phrases.length);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Artistic background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient mesh background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08), transparent 40%), radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.08), transparent 40%)",
          }}
        ></div>

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Static gradient orbs instead of animated ones */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-elevate-blue opacity-10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-elevate-purple opacity-10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-[200px] h-[200px] rounded-full bg-elevate-pink opacity-5 blur-[80px] animate-pulse-slow"></div>
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-elevate-blue via-elevate-purple to-elevate-pink transition-all duration-300 ease-out"
          style={{ width: `${loadingProgress}%` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh]">
          {/* Left side - Title and CTA */}
          <div className="text-left">
            <div className="mb-8 inline-block relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-elevate-blue opacity-30"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-elevate-purple opacity-30"></div>

              {/* Glow effect */}
              <span className="absolute -inset-1 bg-gradient-to-r from-elevate-purple to-elevate-blue blur-xl opacity-20 rounded-lg"></span>

              <h1 className="relative text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                  Elevate
                </span>
                <span className="block text-2xl md:text-3xl mt-3 text-gray-300 font-light">
                  Rebranding Competition
                </span>
              </h1>
            </div>

            <p className="text-lg max-w-xl mb-12 text-gray-300 leading-relaxed">
              Join our design challenge where you&apos;ll reimagine and
              transform real brands. Create compelling visual identities that
              elevate companies to new heights.
            </p>

            <button className="group relative overflow-hidden bg-transparent text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-500">
              {/* Button background */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-elevate-blue via-elevate-purple to-elevate-pink opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-full"></span>

              {/* Button glow */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-elevate-blue via-elevate-purple to-elevate-pink blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500 ease-out rounded-full"></span>

              {/* Button content */}
              <span className="relative flex items-center justify-center">
                Enter Competition
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

          {/* Right side - Animated phrases */}
          <div className="h-[300px] md:h-[400px] relative overflow-hidden flex items-center justify-center">
            {phrases.map((phrase, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => (phraseRefs.current[index] = el)}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
                    index === activeIndex
                      ? "opacity-100 transform-none"
                      : index < activeIndex
                      ? "opacity-0 translate-y-[-100px]"
                      : "opacity-0 translate-y-[100px]"
                  }`}
                >
                  <div className="relative inline-block text-right">
                    {/* Artistic text effects */}
                    <div className="relative">
                      {/* Multiple layers of glow for depth */}
                      <span
                        className={`absolute inset-0 blur-xl opacity-20 ${phrase.color}`}
                        style={{ transform: "scale(1.2)" }}
                      >
                        {phrase.text}
                      </span>
                      <span
                        className={`absolute inset-0 blur-md opacity-40 ${phrase.color}`}
                        style={{ transform: "scale(1.1)" }}
                      >
                        {phrase.text}
                      </span>

                      {/* Main text with gradient */}
                      <span
                        className={`relative text-4xl md:text-6xl lg:text-7xl font-extrabold ${phrase.color}`}
                        style={{
                          textShadow: "0 0 15px rgba(0,0,0,0.3)",
                        }}
                      >
                        {phrase.text}
                      </span>

                      {/* Special case for "you can transform" */}
                      {index === 4 && (
                        <div className="absolute -left-[150px] top-1/2 transform -translate-y-1/2">
                          <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white opacity-90">
                            you can
                          </span>
                          {/* Decorative line connecting "you can" and "transform" */}
                          <div className="absolute top-1/2 right-0 w-[30px] h-[2px] bg-gradient-to-r from-white to-elevate-green transform translate-x-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phrase counter with artistic styling */}
      <div className="fixed bottom-8 left-8 z-50 flex items-center space-x-3">
        {phrases.map((_, index) => (
          <div key={index} className="relative">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "bg-white scale-150"
                  : index < activeIndex
                  ? "bg-gray-400"
                  : "bg-gray-700"
              }`}
            ></div>
            {index === activeIndex && (
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-white animate-ping opacity-75"></div>
            )}
          </div>
        ))}
      </div>

      {allWordsDisplayed && (
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center">
          <span className="text-gray-400 text-sm mb-3 tracking-widest uppercase font-light">
            Scroll to explore
          </span>
          <div className="relative">
            <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-md animate-pulse"></div>
            <svg
              className="relative w-8 h-8 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
