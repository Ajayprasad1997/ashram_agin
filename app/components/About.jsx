"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform,} from 'framer-motion';
import Link from 'next/link';
import { X, ArrowRight, BookOpen } from "lucide-react";
import AOS from 'aos'; 
import 'aos/dist/aos.css';



const aboutParagraphs = [
  "Shri Krishna Bhakti Ashram welcomes guests into a peaceful retreat rooted in years of quiet devotion and family tradition. Once a private home, the ashram opened its doors to all three years ago, inviting visitors to experience its warmth, serenity, and spiritual atmosphere.",

  "It offers ten comfortable rooms across Super Deluxe, Deluxe, and Premium categories, along with expansive green lawns and a beautiful temple where daily morning and evening rituals and prayers take place. Guests are warmly welcome to join the prayers, enjoy the gardens, and take part in the ashram's devotional life.",

  "Each morning, food is offered to those in need and to holy men, and guests may join this act of service through their time or contributions. Special celebrations, including Raslila, are held on auspicious occasions.",

  "The ashram can also host spiritual gatherings such as Bhagwat Katha and other religious events, by prior arrangement and at an additional cost.",

  "More than a place to stay, Shri Krishna Bhakti Ashram carries a deeply personal spiritual legacy. It was once the home of our grandfather, a profoundly spiritual and devoted soul whose faith and warmth shaped the essence of this place. We believe his blessings and spiritual presence continue to reside here, creating an atmosphere of rare calm and serenity that visitors can feel.",

  "Today, we are delighted to share this special place with all who seek a peaceful retreat, a deeper connection with devotion, or simply a moment away from the demands of everyday life. At Shri Krishna Bhakti Ashram, we hope every guest finds not just a place to stay, but an experience of devotion, warmth, inner peace, and a sense of belonging.",
];


const sliderImages = [
  '/assets/images/about1.jpg',
  '/assets/images/about2.jpg',
  '/assets/images/about3.jpg',
  '/assets/images/about4.jpg',
];

export default function AboutAshram() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  // 1. Hook up DOM reference boundaries to compute active scroll progress
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // 2. Map scroll percentages to translation styles (moves down when scrolling down)
  const yParallax = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  // 3. Initialize AOS safely inside a client-side layout hook
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Triggers animation only once when scrolling down
      easing: 'ease-out-quad',
    });
    
    // Forces re-calculation when layout positions settle
    AOS.refresh();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const boxSliderVariants = {
    enter: {
      x: '100%',
      scale: 1.05,
      rotate: 0.5,
      zIndex: 10,
    },
    center: {
      x: '0%',
      scale: 1,
      rotate: 0,
      zIndex: 20,
    },
    exit: {
      x: '-20%',
      scale: 0.95,
      rotate: -0.5,
      zIndex: 0,
    },
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden bg-white py-16 md:py-24"
    >
      {/* Decorative Top Right Stripes */}
      <div className="absolute right-0 top-0 hidden w-1/3 flex-col gap-3 md:flex">
        <div className="h_20 w-full bg-[#86a7e3]/20" />
        <div className="h_20 w-full bg-[#86a7e3]/20" />
        <div className="h_20 w-full bg-[#86a7e3]/20" />
        
      </div>

      {/* Outer grid layer spanning edge-to-edge */}
      <div className="w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT SIDE: Edge-to-Edge Image Slider Frame */}
          <div 
            className="relative w-full lg:col-span-6"
            data-aos="fade-right"
          >
            {/* Aspect frame with no left borders or bounding shapes */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900 shadow-2xl lg:aspect-auto lg:h-[520px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentIndex}
                  variants={boxSliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                    mass: 0.8
                  }}
                  className="absolute inset-0 h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${sliderImages[currentIndex]})` }}
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-black/5 pointer-events-none z-30" />
            </div>
          </div>

          <>
  {/* RIGHT SIDE: ABOUT CONTENT */}
  <div className="flex flex-col justify-center px-4 sm:px-2 lg:col-span-6 lg:max-w-2xl lg:px-8 xl:pl-16">

    <h2
      className="text-3xl font-bold uppercase tracking-wide text-[#244584] sm:text-4xl md:text-5xl"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      About the
      <span className="mt-1 block text-[#fdbb00]">
        Ashram
      </span>
    </h2>

    {/* INTRODUCTION */}
    <div className="mt-6 space-y-4 text-sm leading-7 text-gray-600">

      <p
        className="font-semibold text-gray-800"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Shri Krishna Bhakti Ashram welcomes guests into a peaceful
        retreat rooted in years of quiet devotion and family tradition.
      </p>

      <p className="font-semibold text-gray-800"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Once a private home, the ashram opened its doors to all
        three years ago, inviting visitors to experience its warmth,
        serenity, and spiritual atmosphere.
      </p>

      <p className="font-semibold text-gray-800"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        It offers ten comfortable rooms across Super Deluxe,
        Deluxe, and Premium categories, along with expansive
        green lawns and a beautiful temple where daily prayers
        and rituals take place.
      </p>

    </div>

    {/* READ MORE */}
    <button
      type="button"
      onClick={() => setIsAboutModalOpen(true)}
      className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#244584] transition hover:text-[#fdbb00]"
      data-aos="fade-up"
      data-aos-delay="450"
    >
      Read More
      <ArrowRight size={17} />
    </button>

    {/* ACTION BUTTONS */}
    <div
      className="mt-7 flex flex-wrap gap-4"
      data-aos="fade-up"
      data-aos-delay="500"
    >
 <Link
        href="/about"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#244584] px-7 text-xs font-bold uppercase tracking-wide text-white transition duration-300 hover:bg-[#fdbb00] hover:text-[#244584]"
      >
         <BookOpen size={16} />
        About Us
      </Link>
      

      <Link
        href="/accommodation"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#244584] px-7 text-xs font-bold uppercase tracking-wide text-[#244584] transition duration-300 hover:bg-[#244584] hover:text-white"
      >
        Book Your Stay
        <ArrowRight size={16} />
      </Link>

    </div>
  </div>

  {/* ABOUT US MODAL */}
  {isAboutModalOpen && (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07172f]/75 p-3 backdrop-blur-sm sm:p-6"
      onClick={() => setIsAboutModalOpen(false)}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* MODAL HEADER */}
        <div className="relative shrink-0 bg-gradient-to-r from-[#244584] to-[#285b91] px-6 py-6 text-white sm:px-9">

          <div className="flex items-center justify-between gap-4">

            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[3px] text-[#fdbb00]">
                Welcome to Vrindavan
              </span>

              <h3 className="text-2xl font-bold sm:text-3xl">
                About Our Ashram
              </h3>

              <p className="mt-2 text-xs text-white/80 sm:text-sm">
                A place of devotion, peace and belonging
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsAboutModalOpen(false)}
              aria-label="Close modal"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 transition hover:bg-[#fdbb00] hover:text-[#244584]"
            >
              <X size={21} />
            </button>

          </div>

          <div className="absolute bottom-0 left-0 h-1 w-24 rounded-full bg-[#fdbb00]" />

        </div>

        {/* MODAL CONTENT */}
        <div className="overflow-y-auto px-6 py-7 sm:px-9 sm:py-8">

          <div className="mb-6 rounded-xl border-l-4 border-[#fdbb00] bg-[#f5f7fb] p-4">
            <p className="text-sm font-semibold leading-7 text-[#244584]">
              Experience the warmth of family tradition,
              spiritual devotion and the peaceful atmosphere
              of Shri Krishna Bhakti Ashram.
            </p>
          </div>

          <div className="space-y-5 text-sm leading-8 text-gray-600 sm:text-base">

            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

          </div>

          {/* MODAL FOOTER */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-gray-100 pt-6">

            <Link
              href="/accommodation"
              onClick={() => setIsAboutModalOpen(false)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#244584] px-7 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#fdbb00] hover:text-[#244584]"
            >
              Book Your Stay
              <ArrowRight size={16} />
            </Link>

            <button
              type="button"
              onClick={() => setIsAboutModalOpen(false)}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-gray-300 px-7 text-xs font-bold uppercase tracking-wide text-gray-600 transition hover:bg-gray-100"
            >
              Close
            </button>

          </div>

        </div>
      </div>
    </div>
  )}
</>

        </div>
      </div>
    </section>
  );
}
