"use client";

import { useEffect, useRef, useState } from "react";

// Define phrases with specific colors and design/branding related content
const phrases = [
  { text: "design boldly", color: "text-elevate-blue" },
  { text: "brand strategically", color: "text-elevate-purple" },
  { text: "create fearlessly", color: "text-elevate-pink" },
  { text: "visualize impact", color: "text-elevate-orange" },
  { text: "you can teach", color: "text-elevate-green" },
  { text: "communicate visually", color: "text-elevate-yellow" },
  { text: "transform identities", color: "text-elevate-red" },
  { text: "scale creatively", color: "text-elevate-teal" },
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
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-60"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-elevate-blue opacity-10 blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-elevate-purple opacity-10 blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-elevate-blue to-elevate-purple transition-all duration-300 ease-out"
          style={{ width: `${loadingProgress}%` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh]">
          {/* Left side - Title and CTA */}
          <div className="text-left">
            <div className="mb-6 inline-block relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-elevate-purple to-elevate-blue blur-md opacity-30 rounded-lg"></span>
              <h1 className="relative text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-white">Elevate</span>
                <span className="block text-2xl md:text-3xl mt-2 text-gray-300">
                  Where Creativity Takes Flight
                </span>
              </h1>
            </div>

            <p className="text-lg max-w-xl mb-10 text-gray-300 leading-relaxed">
              Join us for an immersive experience where design meets creativity.
              Elevate your skills, connect with industry leaders, and transform
              your brand vision.
            </p>

            <button className="group relative overflow-hidden bg-elevate-purple hover:bg-elevate-indigo text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-elevate-blue to-elevate-purple opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-out"></span>
              <span className="relative">Register Now</span>
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
                    {/* Glow effect */}
                    <span
                      className={`absolute inset-0 blur-md opacity-30 ${phrase.color}`}
                      style={{ transform: "scale(1.1)" }}
                    >
                      {phrase.text}
                    </span>

                    {/* Main text */}
                    <span
                      className={`relative text-4xl md:text-6xl lg:text-7xl font-extrabold ${phrase.color}`}
                    >
                      {phrase.text}
                    </span>
                    {index === 4 && (
                      <span className="absolute -left-[150px] top-1/2 transform -translate-y-1/2 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white">
                        you can
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phrase counter */}
      <div className="fixed bottom-8 left-8 z-50 flex items-center space-x-2">
        {phrases.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white scale-125"
                : index < activeIndex
                ? "bg-gray-400"
                : "bg-gray-700"
            }`}
          ></div>
        ))}
      </div>

      {allWordsDisplayed && (
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center">
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
