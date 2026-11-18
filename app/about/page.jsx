
"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

import {
  ArrowRight,
  MapPin,
  Heart,
  Flower2,
  BedDouble,
  Bath,
  Refrigerator,
  Trees,
  Church,
  Users,
  Utensils,
  ShieldCheck,
  Zap,
  Droplets,
  Sun,
  Moon,
  HandHeart,
  CalendarDays,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Wifi,
} from "lucide-react";


const sliderImages = [
  '/assets/images/about1.jpg',
  '/assets/images/about3.jpg',
  '/assets/images/temple-hall/4.jpg',
];

const aboutUsParagraphs = [
  "Shri Krishna Bhakti Ashram welcomes guests into a peaceful retreat rooted in years of quiet devotion and family tradition. Once a private home, the ashram opened its doors to all three years ago, inviting visitors to experience its warmth, serenity, and spiritual atmosphere.",

  "It offers ten comfortable rooms across Super Deluxe, Deluxe, and Premium categories, along with expansive green lawns and a beautiful temple where daily morning and evening rituals and prayers take place. Guests are warmly welcome to join the prayers, enjoy the gardens, and take part in the ashram's devotional life.",

  "Each morning, food is offered to those in need and to holy men, and guests may join this act of service through their time or contributions. Special celebrations, including Raslila, are held on auspicious occasions.",

  "The ashram can also host spiritual gatherings such as Bhagwat Katha and other religious events, by prior arrangement and at an additional cost.",

  "More than a place to stay, Shri Krishna Bhakti Ashram carries a deeply personal spiritual legacy. It was once the home of our grandfather, a profoundly spiritual and devoted soul whose faith and warmth shaped the essence of this place. We believe his blessings and spiritual presence continue to reside here, creating an atmosphere of rare calm and serenity that visitors can feel.",

  "Today, we are delighted to share this special place with all who seek a peaceful retreat, a deeper connection with devotion, or simply a moment away from the demands of everyday life. At Shri Krishna Bhakti Ashram, we hope every guest finds not just a place to stay, but an experience of devotion, warmth, inner peace, and a sense of belonging.",
];

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
// ==========================================
// COUNTER ANIMATION HOOK
// ==========================================

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const end = parseInt(target.replace(/[^0-9]/g, ""), 10);

    if (!Number.isFinite(end) || end <= 0) return;

    let start = 0;
    const interval = 20;
    const steps = Math.max(1, Math.ceil(duration / interval));
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  const suffix = target.replace(/[0-9]/g, "");

  return {
    ref: elementRef,
    value: count.toLocaleString() + suffix,
  };
}

// ==========================================
// THREE COLUMN ABOUT SECTION
// ==========================================

function AboutThreeColumnSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const counter1 = useCountUp("10000+");
  // const counter2 = useCountUp("94%");
  // const counter3 = useCountUp("100");
  // const counter4 = useCountUp("7+");
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white px-6 py-20 text-[#202D43] md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">

          {/* COLUMN 1 */}
         <div
            data-aos="fade-up"
            className="relative my-3 flex min-h-[330px] lg:min-h-[460px] flex-col items-start justify-start lg:col-span-4 lg:my-0"
          >

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

            <p
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Once a private home, the ashram opened its doors to all
              three years ago, inviting visitors to experience its warmth,
              serenity, and spiritual atmosphere.
            </p>

            <p
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

            {aboutUsParagraphs.map((paragraph, index) => (
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
       

          {/* COLUMN 2 - IMAGES */}
          <div
            data-aos="fade-up"
            className="relative my-3 flex min-h-[330px] lg:min-h-[460px] flex-col items-center justify-center lg:col-span-4 lg:my-0"
          >
            <div className="hidden border-2 border-[#737F91] lg:block relative md:absolute right-0 md:right-2 top-0 z-10 h-[240px] w-full md:h-[140px] md:w-[78%] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/assets/images/about1.jpg"
                alt="Ashram"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hidden lg:block relative z-20 my-4 h-[240px] md:h-[210px] md:w-[72%] overflow-hidden rounded-xl border-2 border-white shadow-xl">
              <img
                src="/assets/images/about3.jpg"
                alt="Temple"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hidden border-2 border-[#737F91] lg:block relative md:absolute bottom-0 left-0 md:left-2 z-10 h-[290px] md:h-[140px] md:w-[78%] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/assets/images/temple-hall/4.jpg"
                alt="Ashram surroundings"
                className="h-full w-full object-cover"
              />
            </div>

             <div 
            className="relative w-full lg:col-span-6"
            data-aos="fade-right"
          >
            {/* about slide image */}
            <div className="block lg:hidden aspect-[4/3] w-full overflow-hidden bg-gray-900 shadow-2xl lg:aspect-auto lg:h-[520px]">
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
          </div>

          

          {/* COLUMN 3 */}
          <div
            data-aos="fade-left"
            className="flex flex-col justify-center lg:col-span-4"
          >
            <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-[#202D43] md:text-3xl">
              Authentic Culture and Charm, Where Beauty Knows No Bounds
            </h3>

            <p className="mt-4 text-[15px] leading-8 text-[#737F91]">
              The property offers a serene atmosphere, spacious
              rooms, a well-maintained garden, and a temple within
              the premises.
            </p>

            <ul className="mt-6 space-y-4 text-[14px] font-bold uppercase tracking-wide text-[#202D43]">
              {[
                "Fresh Air, Feel the Nature",
                "Peaceful, Tranquil Space",
                "Rich Vedic Culture",
                "A scenic oasis amidst the hustle and bustle of Vrindavan",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#FFB900]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#294985] px-7 py-3.5 text-xs font-bold text-[#294985] transition-all duration-300 hover:bg-[#294985] hover:text-white"
              >
                CONTACT US FOR INQUIRIES
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>

    
  );
}



function FacilitiesArcShowcaseSection({ facilities = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const wasDragged = useRef(false);
  const dragPointerId = useRef(null);

  const visibleFacilities = facilities.slice(0, 10);
  const totalItems = visibleFacilities.length;

  // Facility images
  const facilityImages = [
  "/assets/images/sd/1.jpg",
  "/assets/images/sd/5.jpg",
  "/assets/images/sd/2.jpg",
  "/assets/images/gallery1.jpg",
  "/assets/images/tpr.jpg",
  "/assets/images/temple-hall/4.jpg",
  "https://webfiles.amrita.edu/2024/12/amrita-sdg-6-free-drinking-water-img1.jpg",
  "/assets/images/about3.jpg",
  "/assets/images/about1.jpg",
  "https://clampera.com/assets/portfolio-2-CAHx4Z41.jpg",
];

  // Responsive layout
  useEffect(() => {
    const updateScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused || isDragging || totalItems <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, totalItems]);

  if (!totalItems) return null;

  // Correct circular positioning
  const getRelativePosition = (index) => {
    const current =
      ((activeIndex % totalItems) + totalItems) % totalItems;

    return (
      (index - current + totalItems + Math.floor(totalItems / 2)) %
        totalItems -
      Math.floor(totalItems / 2)
    );
  };

  // Click card to center
  const selectCard = (position) => {
    setActiveIndex((prev) => prev + position);
  };

  // Pointer down
  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragStartX.current = event.clientX;
    dragPointerId.current = event.pointerId;
    wasDragged.current = false;

    setIsDragging(true);
    setIsPaused(true);

    // Capture on the actual card to preserve click events
    const card = event.target.closest("button");

    if (card) {
      card.setPointerCapture(event.pointerId);
    }
  };

  // Pointer up
  const handlePointerUp = (event) => {
    if (dragPointerId.current !== event.pointerId) return;

    const difference = event.clientX - dragStartX.current;
    const threshold = 35;

    if (Math.abs(difference) > threshold) {
      wasDragged.current = true;

      // Left = next | Right = previous
      setActiveIndex((prev) =>
        difference < 0 ? prev + 1 : prev - 1
      );
    }

    dragPointerId.current = null;
    setIsDragging(false);
    setIsPaused(false);
  };

  // Pointer cancel
  const handlePointerCancel = () => {
    dragPointerId.current = null;
    setIsDragging(false);
    setIsPaused(false);
  };

  // Desktop 7 cards | Mobile 5 cards
  const maxVisible = isMobile ? 2 : 3;

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F7FB] px-4 py-20 text-[#202D43] sm:px-6 md:px-12 md:py-28">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#294985]/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FFB900]/10 blur-[100px]" />
      </div>

      {/* CAROUSEL */}
      <div
        className="relative z-10 mx-auto max-w-7xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging) setIsPaused(false);
        }}
        onFocus={() => setIsPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(false);
          }
        }}
      >

        {/* ARC STAGE */}
        <div
          className={`relative h-[240px] w-full select-none sm:h-[200px] md:h-[300px] ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            perspective: "1400px",
            transformStyle: "preserve-3d",
            touchAction: "pan-y",
          }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >

          {visibleFacilities.map((item, index) => {
            const position = getRelativePosition(index);
            const distance = Math.abs(position);

            if (distance > maxVisible) return null;

            // ARC GEOMETRY
            const angle = position * (isMobile ? 25 : 22);
            const angleRad = (angle * Math.PI) / 180;

            const radiusX = isMobile ? 175 : 475;
            const radiusY = isMobile ? 85 : 170;

            const x = Math.sin(angleRad) * radiusX;
            const y = (1 - Math.cos(angleRad)) * radiusY;

            const isCenter = position === 0;

            const scale = isCenter
              ? 1
              : isMobile
                ? 0.82
                : Math.max(0.72, 0.94 - distance * 0.065);

            const rotate = position * (isMobile ? 9 : 10);

            const image =
              item.image ||
              facilityImages[index % facilityImages.length];

            return (
              <motion.button
                key={item.id || item.title + "-" + index}
                type="button"
                onClick={() => {
                  if (wasDragged.current) {
                    wasDragged.current = false;
                    return;
                  }

                  if (position !== 0) {
                    selectCard(position);
                  }
                }}
                initial={false}
                animate={{
                  x,
                  y,
                  rotate,
                  scale,
                  opacity:
                    distance === maxVisible
                      ? 0.65
                      : isCenter
                        ? 1
                        : 0.88,
                }}
                transition={{
                  duration: isDragging ? 0.55 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-1/2 top-[8%] w-[160px] sm:w-[250px] md:w-[275px] lg:w-[290px]"
                style={{
                  marginLeft: isMobile ? "-80px" : "-140px",
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                  zIndex: 20 - distance,
                  cursor: isDragging
                    ? "grabbing"
                    : isCenter
                      ? "grab"
                      : "pointer",
                }}
              >

                {/* IMAGE CARD */}
                <div
                  className={`group relative aspect-square overflow-hidden rounded-2xl bg-white text-left transition-shadow duration-500 sm:rounded-3xl ${
                    isCenter
                      ? "shadow-[0_25px_65px_rgba(41,73,133,0.20)]"
                      : "shadow-[0_12px_35px_rgba(41,73,133,0.09)]"
                  }`}
                >

                  {/* IMAGE */}
                  <img
                    src={image}
                    alt={item.title || "Ashram facility"}
                    draggable="false"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10213E]/95 via-[#10213E]/25 to-transparent" />

                  {/* FEATURED BADGE */}
                  {isCenter && (
                    <div className="absolute right-3 top-3 rounded-full bg-[#FFB900] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#294985]">
                      Featured
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-3 text-left sm:p-4">
                    <h3
                      className={`font-bold leading-tight text-white ${
                        isCenter
                          ? "text-sm sm:text-base"
                          : "text-xs sm:text-sm"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <div
                      className={`mt-2 h-[3px] rounded-full bg-[#FFB900] transition-all duration-500 ${
                        isCenter ? "w-12" : "w-7"
                      }`}
                    />

                    {isCenter && item.description && (
                      <p className="mt-2 line-clamp-2 text-[10px] leading-5 text-white/80 sm:text-xs">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* GLOW */}
                  {isCenter && (
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FFB900]/20 blur-2xl" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* DRAG HINT */}
       
      </div>

      {/* SECTION HEADER */}
      <div
        data-aos="fade-up"
        className="relative z-10 mx-auto mb-14 mt-10 max-w-2xl text-center md:mb-20"
      >
        <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
          <span className="h-px w-9 bg-[#FFB900]" />
          Comfort Meets Spirituality
          <span className="h-px w-9 bg-[#FFB900]" />
        </div>

        <h2 className="text-3xl font-extrabold leading-tight text-[#294985] sm:text-4xl md:text-5xl">
          Thoughtful Facilities
        </h2>

        <p className="mt-3 text-lg font-semibold italic text-[#FFB900] sm:text-xl md:text-2xl">
          For a Peaceful Stay
        </p>

        <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-[#737F91]">
          Thoughtfully arranged facilities and comfortable spaces make your
          stay peaceful, convenient and spiritually enriching.
        </p>
      </div>
    </section>
  );
}





// ==========================================
// FACILITIES DATA
// ==========================================

const facilities = [
  {
    icon: BedDouble,
    title: "Spacious AC Rooms",
    description:
      "Spacious, air-conditioned rooms with heating facilities for comfortable stays during colder months.",
  },
  {
    icon: Bath,
    title: "Private Bathrooms",
    description:
      "Attached private bathrooms, comfortable seating areas, wardrobes and dressing areas in selected rooms.",
  },
  {
    icon: Refrigerator,
    title: "Kitchen Facilities",
    description:
      "Selected rooms feature a compact kitchen and mini refrigerator for additional convenience.",
  },
  {
    icon: Trees,
    title: "Garden & Open Spaces",
    description:
      "Enjoy peaceful garden views, well-maintained green spaces and relaxing outdoor sitting areas.",
  },
  {
    icon: Church,
    title: "Temple & Prayer Rooms",
    description:
      "A temple within the premises, dedicated prayer rooms and spaces for spiritual activities.",
  },
  {
    icon: Heart,
    title: "Goshala & Anna Kshetra",
    description:
      "The Ashram has a goshala (cow shelter) and provisions for anna kshetra, offering free food distribution.",
  },
  {
    icon: Droplets,
    title: "Drinking Water Facility",
    description:
      "A dedicated piyau provides drinking-water facilities within the Ashram premises.",
  },
  {
    icon: Users,
    title: "Spacious Hall & Garden",
    description:
      "A spacious hall and garden adjacent to the temple, ideal for religious ceremonies and social functions.",
  },
  {
    icon: ShieldCheck,
    title: "Temple",
    description:
      "The ground-floor layout makes the property suitable for elderly guests and those who prefer easy accessibility.",
  },
  {
    icon: Wifi,
    title: "WIFI",
    description:
      "Enjoy seamless high-speed Wi-Fi connectivity throughout your stay.",
  },
  {
    icon: Zap,
    title: "24/7 Power Backup",
    description:
      "Round-the-clock power backup for uninterrupted comfort and convenience.",
  },
];

// ==========================================
// NEARBY ATTRACTIONS DATA
// ==========================================

const attractions = [
  { name: "Shri Banke Bihari Temple", distance: "1 km" },
  { name: "Radha Ballabh Mandir", distance: "1 km" },
  { name: "ISKCON Temple", distance: "0.75 km" },
  { name: "Prem Mandir", distance: "Nearby" },
  { name: "Nidhivan", distance: "Nearby" },
  { name: "Shri Rangji Mandir", distance: "Nearby" },
  { name: "Neem Karori Baba Ashram", distance: "Nearby" },
  { name: "Jugal Kishore Temple", distance: "Nearby" },
];

// ==========================================
// DAILY ACTIVITIES DATA
// ==========================================

const activities = [
  {
    time: "06:30 AM",
    title: "Morning Prayers",
    description:
      "Guests are welcome to begin their day with peaceful morning prayers at the Ashram.",
    icon: Sun,
  },
  {
    time: "08:00 AM – 08:30 AM",
    title: "Anna Kshetra",
    description:
      "Daily food distribution to yogis and underprivileged people as an expression of selfless service.",
    icon: Utensils,
  },
  {
    time: "06:00 PM",
    title: "Evening Prayers",
    description:
      "Spend the evening in prayer and devotion within the peaceful atmosphere of the Ashram.",
    icon: Moon,
  },
];

// ==========================================
// MAIN ABOUT PAGE
// ==========================================

export default function AboutPage() {
  // AOS INITIALIZATION
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <main className="overflow-hidden bg-white text-[#202D43]">

      {/* =====================================
          01. ABOUT HERO SECTION
      ===================================== */}

      <section className="pt-[90px] sm:pt-0 relative flex min-h-[410px] items-center overflow-hidden md:min-h-[440px]">

        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] hover:scale-105"
          style={{
            backgroundImage: "url('/assets/images/about1.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#102B58]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102B58]/90 via-[#102B58]/50 to-transparent" />

        <div className="relative mx-auto relative w-full max-w-[1320px] item-center px-5 sm:px-6 lg:px-8">

          <div data-aos="fade-up" className="max-w-2xl">

            <div className="mb-3 md:mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#FFB900]" />

              <span className="text-xs font-bold uppercase tracking-[4px] text-[#FFCA45]">
                Your Peaceful Stay in Vrindavan
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-[46px]">
              About The Ashram
            </h1>

            <p className="mt-3 md:mt-5 max-w-xl text-base leading-8 text-white/85 md:text-lg">
              We are here to help you plan your stay, answer your
              questions, and make your experience at our Ashram
              comfortable and memorable.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/80">
              <Link href="/" className="transition hover:text-[#FFB900]">
                Home
              </Link>

              <span>/</span>

              <span className="font-semibold text-[#FFB900]">
                About Us
              </span>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FFB900] via-white to-[#244584]" />

      </section>


      {/* =====================================
          02. ABOUT THREE COLUMN SECTION
      ===================================== */}

      <AboutThreeColumnSection />


      {/* =====================================
          03. FACILITIES & ACCOMMODATION
      ===================================== */}

     <FacilitiesArcShowcaseSection facilities={facilities} />


      {/* =====================================
          04. LOCATION & ACCESSIBILITY
      ===================================== */}

      <section className="px-6 py-20 md:px-12 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* LOCATION IMAGE */}

          <div data-aos="fade-right" className="relative">

            <img
              src="/assets/images/chs.jpg"
              alt="Vrindavan spiritual surroundings"
              className="h-[380px] w-full rounded-xl object-cover shadow-xl md:h-[520px]"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white p-5 shadow-lg md:bottom-8 md:left-8 md:right-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5F7FB] text-[#294985]">
                  <MapPin size={25} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#737F91]">
                    Our Location
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#294985]">
                    Vrindavan, Uttar Pradesh
                  </h3>
                </div>

              </div>
            </div>
          </div>

          {/* LOCATION CONTENT */}

          <div data-aos="fade-left">

            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
              <span className="h-px w-9 bg-[#FFB900]" />
              Location & Accessibility
            </p>

            <h2 className="text-4xl font-extrabold leading-tight text-[#294985] md:text-5xl">
              Close to the
              <br />
              <span className="text-[#FFB900]">
                Sacred Temples
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#737F91]">
              Centrally located in Vrindavan, the Ashram
              provides convenient access to major temples
              and important religious destinations.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#737F91]">
              Restaurants, ATMs, banks, grocery stores and
              local shops are available nearby. Rickshaws
              and other local transportation options help
              guests explore Vrindavan.
            </p>

            <div className="mt-9">

              <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-[#294985]">
                <MapPin size={21} className="text-[#FFB900]" />
                Nearby Religious Destinations
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">

                {attractions.map((place) => (
                  <div
                    key={place.name}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-[#E5EAF2] bg-white p-4 transition-all duration-300 hover:border-[#FFB900] hover:bg-[#F5F7FB]"
                  >

                    <span className="text-sm font-semibold text-[#294985]">
                      {place.name}
                    </span>

                    <span className="shrink-0 rounded-full bg-[#FFF6D9] px-3 py-1 text-xs font-bold text-[#294985]">
                      {place.distance}
                    </span>

                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================
          05. SPIRITUAL ACTIVITIES
      ===================================== */}

      <section className="bg-[#F5F7FB] px-6 py-20 md:px-12 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* IMAGE */}

          <div data-aos="fade-right">

            <div className="mb-6">

              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
                <span className="h-px w-9 bg-[#FFB900]" />
                Daily Ashram Life
              </p>

              <h2 className="text-4xl font-extrabold leading-tight text-[#294985] md:text-5xl">
                Experience the
                <br />
                <span className="text-[#FFB900]">
                  Spiritual Activities
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#737F91]">
                Guests are welcome to participate in the
                Ashram's daily activities, including morning
                prayers, evening prayers and food distribution.
              </p>

            </div>

            <div className="group relative overflow-hidden rounded-xl">

              <img
                src="/assets/images/ac2.jpg"
                alt="Daily spiritual prayers at the Ashram"
                className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[410px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#14233F]/60 to-transparent" />

              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <Flower2 size={27} className="text-[#FFB900]" />

                <span className="text-lg font-bold">
                  Prayer & Devotion
                </span>
              </div>

            </div>
          </div>

          {/* DAILY SCHEDULE */}

          <div data-aos="fade-left">

            <div className="mb-9 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF6D9] text-[#294985]">
                <CalendarDays size={24} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#737F91]">
                  Ashram Timings
                </p>

                <h3 className="text-2xl font-extrabold text-[#294985]">
                  Daily Schedule
                </h3>
              </div>

            </div>

            <div className="relative space-y-9 border-l-2 border-[#DCE4F0] pl-8">

              {activities.map((activity, index) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                    className="relative"
                  >

                    <div className="absolute -left-[49px] top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFB900] bg-white text-[#294985] shadow-sm transition-all duration-300 hover:bg-[#FFB900]">
                      <Icon size={19} />
                    </div>

                    <p className="text-xs font-extrabold tracking-[2px] text-[#294985]">
                      {activity.time}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#202D43]">
                      {activity.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-[#737F91]">
                      {activity.description}
                    </p>

                  </div>
                );
              })}

            </div>

            <div className="mt-12 rounded-xl border border-[#E5EAF2] bg-white p-6">

              <div className="flex items-start gap-4">

                <Sparkles
                  size={23}
                  className="mt-1 shrink-0 text-[#FFB900]"
                />

                <p className="text-sm leading-7 text-[#737F91]">
                  Guests can also inquire about other spiritual
                  and religious activities taking place inside
                  and outside the Ashram.
                </p>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================
          06. HOSPITALITY & GUEST ASSISTANCE
      ===================================== */}

      <section className="px-6 py-20 md:px-12 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* HOSPITALITY CONTENT */}

          <div data-aos="fade-right">

            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
              <span className="h-px w-9 bg-[#FFB900]" />
              Hospitality & Guest Assistance
            </p>

            <h2 className="text-4xl font-extrabold leading-tight text-[#294985] md:text-5xl">
              A Warm Welcome,
              <br />
              <span className="text-[#FFB900]">
                Personal Care
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#737F91]">
              The family emphasizes devotion, sincere service
              and personal care for guests, creating a welcoming
              atmosphere throughout their stay.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#737F91]">
              Caretakers can assist with information about
              Vrindavan's religious sites and help arrange local
              transportation, subject to availability.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#737F91]">
              Guests can receive guidance about significant
              places associated with the lives of Shri Radha
              and Krishna.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#737F91]">
              Restaurants nearby offer dining options, and
              some provide food delivery to the Ashram.
            </p>

            <div className="mt-9 flex items-center gap-4 rounded-xl bg-[#F5F7FB] p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFB900] text-[#294985]">
                <HandHeart size={25} />
              </div>

              <div>
                <h3 className="font-bold text-[#294985]">
                  Serving with Love
                </h3>

                <p className="mt-1 text-sm text-[#737F91]">
                  Devotion, sincere service and personal care.
                </p>
              </div>

            </div>
          </div>

          {/* HOSPITALITY IMAGE */}

          <div data-aos="fade-left" className="relative">

            <img
              src="/assets/images/temple-hall/4.jpg"
              alt="Family hospitality at Shree Krishna Bhakti Ashram"
              className="h-[400px] w-full rounded-xl object-cover shadow-xl transition-transform duration-700 hover:scale-[1.02] md:h-[530px]"
            />

            <div className="absolute -bottom-7 -left-4 rounded-xl border border-[#E5EAF2] bg-white p-5 shadow-xl md:-left-8 md:p-7">

              <div className="flex items-center gap-3">

                <Heart
                  size={25}
                  className="fill-[#FFB900] text-[#FFB900]"
                />

                <div>
                  <p className="font-bold text-[#294985]">
                    Feel at Home
                  </p>

                  <p className="mt-1 text-xs text-[#737F91]">
                    Your stay in Vrindavan
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================
          07. CONTACT SECTION
      ===================================== */}

      <ContactSection />


      {/* =====================================
          08. FOOTER
      ===================================== */}

      <Footer />

    </main>
  );
}
