
"use client";

import { useEffect } from "react";
import Link from "next/link";
// @ts-expect-error - the aos package does not provide TypeScript declarations
import AOS from "aos";
import "aos/dist/aos.css";

import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Info,
  IndianRupee,
  Moon,
  Sun,
  Sparkles,
  Users,
  BedDouble,
  Clock,
  ShieldCheck,
} from "lucide-react";

// ==========================================
// PRICING DATA
// ==========================================

const seasonalPricing = [
  {
    id: "mid-season",
    number: "01",
    title: "Mid-Season",
    subtitle: "April to September",
    description: "Peaceful stays at comfortable seasonal rates.",
    icon: Sun,
    featured: false,
    rooms: [
      { name: "Super Deluxe Room", single: "4,400", double: "4,900" },
      { name: "Deluxe Room", single: "2,900", double: "3,100" },
      { name: "Premium Room No. 1", single: "2,800", double: "3,000" },
      { name: "Premium Rooms No. 2 & 3", single: "2,500", double: "2,800" },
    ],
  },
  {
    id: "peak-season",
    number: "02",
    title: "Peak Season",
    subtitle: "October to March",
    description: "Experience the beauty of Vrindavan during peak season.",
    icon: Moon,
    featured: true,
    rooms: [
      { name: "Super Deluxe Room", single: "4,750", double: "5,250" },
      { name: "Deluxe Room", single: "3,250", double: "3,500" },
      { name: "Premium Room No. 1", single: "3,150", double: "3,350" },
      { name: "Premium Rooms No. 2 & 3", single: "2,800", double: "3,100" },
    ],
  },
  {
    id: "festival-season",
    number: "03",
    title: "Festival Season",
    subtitle: "24th–31st December & 13th–23rd March",
    description: "Special seasonal tariffs during selected festive dates.",
    icon: Sparkles,
    featured: false,
    rooms: [
      { name: "Super Deluxe Room", single: "4,900", double: "5,400" },
      { name: "Deluxe Room", single: "3,600", double: "3,900" },
      { name: "Premium Room No. 1", single: "3,350", double: "3,600" },
      { name: "Premium Rooms No. 2 & 3", single: "3,000", double: "3,300" },
    ],
  },
];

// ==========================================
// PRICE FORMAT
// ==========================================

function Price({ value }: { value: string }) {
  return (
    <span className="inline-flex items-center justify-center gap-0.5 font-extrabold text-[#244584]">
      <IndianRupee size={15} strokeWidth={2.5} />
      {value}
    </span>
  );
}

// ==========================================
// SEASONAL PRICING CARD
// ==========================================

function SeasonCard({
  season,
  index,
}: {
  season: (typeof seasonalPricing)[number];
  index: number;
}) {
  const Icon = season.icon;

  return (
    <div
      id={season.id}
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className={`relative overflow-hidden rounded-2xl border bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
        season.featured
          ? "border-[#FFB900] shadow-[0_15px_50px_rgba(36,69,132,0.12)]"
          : "border-[#E5EAF2] shadow-lg"
      }`}
    >
      {/* FEATURED BADGE */}

      {season.featured && (
        <div className="absolute right-0 top-0 rounded-bl-xl bg-[#FFB900] px-5 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#244584]">
          Popular Season
        </div>
      )}

      {/* CARD HEADER */}

      <div className="relative overflow-hidden bg-gradient-to-r from-[#244584] via-[#285b91] to-[#294985] px-6 py-7 text-white sm:px-8">
        <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full border-[25px] border-white/5" />

        <div className="relative z-10 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#FFB900] text-[#244584] shadow-lg">
            <Icon size={27} />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#FFCA45]">
              Season {season.number}
            </p>

            <h3 className="mt-1 text-2xl font-extrabold sm:text-3xl">
              {season.title}
            </h3>

            <p className="mt-1 text-xs font-medium text-white/80 sm:text-sm">
              {season.subtitle}
            </p>
          </div>
        </div>

        <p className="relative z-10 mt-5 text-sm leading-6 text-white/80">
          {season.description}
        </p>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FFB900] via-white/60 to-transparent" />
      </div>

      {/* TABLE */}

      <div className="p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <BedDouble size={19} className="text-[#FFB900]" />

          <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#244584]">
            Room Tariff Details
          </h4>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#E5EAF2]">
          {/* TABLE HEADER */}

          <div className="grid grid-cols-[1.35fr_0.85fr_0.85fr] bg-[#F1F4FA] px-3 py-4 sm:px-4">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#244584] sm:text-xs">
              Room Category
            </div>

            <div className="text-center text-[10px] font-extrabold uppercase tracking-wider text-[#244584] sm:text-xs">
              <span className="block">Single</span>
              <span className="mt-1 block text-[9px] text-[#737F91]">
                Occupancy
              </span>
            </div>

            <div className="text-center text-[10px] font-extrabold uppercase tracking-wider text-[#244584] sm:text-xs">
              <span className="block">Double</span>
              <span className="mt-1 block text-[9px] text-[#737F91]">
                Occupancy
              </span>
            </div>
          </div>

          {/* TABLE ROWS */}

          {season.rooms.map((room, roomIndex) => (
            <div
              key={room.name}
              className={`grid grid-cols-[1.35fr_0.85fr_0.85fr] items-center px-3 py-5 transition-colors hover:bg-[#FFF9E8] sm:px-4 ${
                roomIndex !== season.rooms.length - 1
                  ? "border-b border-[#E5EAF2]"
                  : ""
              }`}
            >
              <div className="pr-2">
                <p className="text-xs font-bold leading-5 text-[#202D43] sm:text-sm">
                  {room.name}
                </p>
              </div>

              <div className="text-center">
                <Price value={room.single} />
              </div>

              <div className="text-center">
                <Price value={room.double} />
              </div>
            </div>
          ))}
        </div>

        {/* CARD FOOTER */}

        <div className="mt-5 flex items-center justify-between gap-3 rounded-lg bg-[#F5F7FB] px-4 py-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#737F91]">
            <Clock size={16} className="shrink-0 text-[#FFB900]" />
            Per Room / Night
          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider text-[#244584]">
            INR
          </span>
        </div>

        {/* BOOKING LINK */}

        <Link
          href="/contact"
          className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#244584] px-5 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#FFB900] hover:text-[#244584]"
        >
          Enquire About This Season
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

// ==========================================
// MAIN PRICING PAGE
// ==========================================

export default function PricingPage() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 70,
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
          01. PRICING HERO BANNER
      ===================================== */}

      <section className="relative flex min-h-[390px] items-center overflow-hidden pt-[90px] sm:pt-0 md:min-h-[440px]">

        {/* BACKGROUND IMAGE */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/about1.jpg')",
          }}
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-[#102B58]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102B58]/95 via-[#102B58]/65 to-transparent" />

        {/* HERO CONTENT */}

        <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-6 lg:px-8">

          <div data-aos="fade-up" className="max-w-3xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#FFB900]" />

              <span className="text-xs font-bold uppercase tracking-[3px] text-[#FFCA45]">
                Shree Krishna Bhakti Ashram
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-[46px]">
              Room Tariffs &
              <span className="block text-[#FFB900]">
                Seasonal Pricing
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/85 sm:text-base">
              Discover our seasonal room rates and choose the perfect
              accommodation for your peaceful stay in the divine city
              of Vrindavan.
            </p>

           

            {/* BREADCRUMB */}

            <div className="mt-8 flex items-center gap-3 text-sm text-white/75">

              <Link href="/" className="transition hover:text-[#FFB900]">
                Home
              </Link>

              <span>/</span>

              <span className="font-semibold text-[#FFB900]">
                Pricing
              </span>

            </div>

          </div>
        </div>

        {/* BOTTOM BORDER */}

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FFB900] via-white to-[#244584]" />

      </section>


      {/* =====================================
          02. PRICING INTRODUCTION
      ===================================== */}

      <section className="relative overflow-hidden px-5 py-16 sm:px-8 md:py-20">

        {/* BACKGROUND DECORATION */}

        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#244584]/5 blur-[90px]" />

        <div
          data-aos="fade-up"
          className="relative mx-auto max-w-3xl text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
            <span className="h-px w-9 bg-[#FFB900]" />
            Our Accommodation Rates
            <span className="h-px w-9 bg-[#FFB900]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#244584] sm:text-4xl md:text-[46px]">
            Comfortable Stays,
            <span className="block text-[#FFB900]">
              Transparent Pricing
            </span>
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#737F91] sm:text-base">
            The following room tariffs are applicable according to
            the season and occupancy selected. All rates are quoted
            in Indian Rupees (INR) per room, per night.
          </p>

        </div>

        {/* OCCUPANCY INFORMATION */}

        <div
          data-aos="fade-up"
          className="relative mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4"
        >

          <div className="flex items-center gap-3 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] p-4 sm:p-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF3CE] text-[#244584]">
              <Users size={22} />
            </div>

            <div>
              <p className="text-[16px] font-extrabold text-[#244584]">
                Single Occupancy
              </p>
              <p className="mt-1 text-[15px] text-[#737F91]">
                One guest
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] p-4 sm:p-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF3CE] text-[#244584]">
              <Users size={22} />
            </div>

            <div>
              <p className="text-[16px] font-extrabold text-[#244584]">
                Double Occupancy
              </p>
              <p className="mt-1 text-[15px] text-[#737F91]">
                Two guests
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          03. SEASONAL PRICING TABLES
      ===================================== */}

      <section
        id="seasonal-rates"
        className="relative bg-[#F5F7FB] px-4 py-16 sm:px-6 md:px-12 md:py-24"
      >

        {/* DECORATION */}

        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#FFB900]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* SECTION HEADER */}

          <div data-aos="fade-up" className="mb-12 text-center">

            <div className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
              <span className="h-px w-9 bg-[#FFB900]" />
              Choose Your Season
              <span className="h-px w-9 bg-[#FFB900]" />
            </div>

            <h2 className="text-3xl font-extrabold text-[#244584] sm:text-4xl md:text-[46px]">
              Our Room Price List
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#737F91]">
              Explore our accommodation prices across all three
              seasons and find the right room for your visit.
            </p>

          </div>

          {/* SEASON CARDS */}

          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-3">

            {seasonalPricing.map((season, index) => (
              <SeasonCard
                key={season.id}
                season={season}
                index={index}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          04. IMPORTANT TARIFF NOTES
      ===================================== */}

      <section className="px-5 py-16 sm:px-8 md:py-24">

        <div className="mx-auto max-w-5xl">

          <div
            data-aos="fade-up"
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#172E58] via-[#244584] to-[#285b91] p-6 text-white shadow-xl sm:p-10"
          >

            {/* DECORATIVE CIRCLE */}

            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />

            <div className="relative z-10">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFB900] text-[#244584]">
                  <Info size={25} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#FFCA45]">
                    Please Read Carefully
                  </p>

                  <h2 className="text-2xl font-extrabold sm:text-3xl">
                    Important Notes
                  </h2>
                </div>

              </div>

              <div className="mt-8 space-y-5">

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#FFB900]"
                  />

                  <p className="text-sm leading-7 text-white/85">
                    All tariffs are quoted per room, per night.
                  </p>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#FFB900]"
                  />

                  <p className="text-sm leading-7 text-white/85">
                    Rates are subject to applicable Goods and Services
                    Tax (GST), which will be charged additionally as
                    per prevailing government regulations.
                  </p>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#FFB900]"
                  />

                  <p className="text-sm leading-7 text-white/85">
                    Festival Season rates are applicable only during
                    the dates specified above.
                  </p>

                </div>

              </div>

              <div className="mt-9 border-t border-white/20 pt-6">

                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                  <div>
                    <h3 className="text-lg font-bold text-[#FFCA45]">
                      Planning Your Stay in Vrindavan?
                    </h3>

                    <p className="mt-2 text-sm text-white/75">
                      Contact us for room enquiries and further information.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFB900] px-7 text-xs font-extrabold uppercase tracking-wider text-[#244584] transition hover:bg-white"
                  >
                    Contact Us
                    <ArrowRight size={17} />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          05. BOOKING CTA
      ===================================== */}

      <section className="px-5 pb-20 sm:px-8 md:pb-24">

        <div
          data-aos="fade-up"
          className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#E5EAF2] bg-[#F5F7FB] px-6 py-12 text-center sm:px-12 sm:py-16"
        >

          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#FFB900]/10 blur-3xl" />

          <div className="relative z-10">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF1C5] text-[#244584]">
              <ShieldCheck size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold text-[#244584] sm:text-4xl">
              Experience a Peaceful Stay
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#737F91]">
              Enjoy comfort, devotion and warm hospitality at Shree
              Krishna Bhakti Ashram. Get in touch with us for your
              accommodation enquiries.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                href="/accommodation"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#244584] px-8 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#FFB900] hover:text-[#244584]"
              >
                Explore Rooms
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#244584] px-8 text-xs font-extrabold uppercase tracking-wider text-[#244584] transition hover:bg-[#244584] hover:text-white"
              >
                Contact Ashram
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          06. CONTACT SECTION
      ===================================== */}

      <ContactSection />


      {/* =====================================
          07. FOOTER
      ===================================== */}

      <Footer />

    </main>
  );
}
