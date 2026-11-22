"use client";

import { useState,useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Search, MapPin, Menu, X } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Accommodation",
    href: "/accommodation",
  },

  {
    label: "Events & Activities ",
    href: "/events",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Our Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [stickyVisible, setStickyVisible] = useState(false);
  const [stickyMobileOpen, setStickyMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <header className="absolute lg:relative top-0 left-0 z-50 w-full bg-transparent">
     
      {/* Top blue header */}
      <div className="bg-transparent min-[992px]:bg-gradient-to-r min-[992px]:from-[#D99024] min-[992px]:via-[#B96B25] min-[992px]:to-[#82451F] text-white">
         
        <div className="mx-auto flex min-h-[85px] sm:min-h-[122px] max-w-[1320px] items-center justify-between gap-6 px-5 py-3 lg:px-8">
          
          {/* Logo and site title */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-5"
            aria-label="Ashram home"
          >
            <img
              src="/assets/images/ashram-logo.png"
              alt="Ashram logo"
              className="h-[92px] w-[140px] shrink-0 object-contain mobile-logo"
            />

            <div className="hidden border-l border-white/30 pl-5 min-[991px]:block">
              <p className="mb-0.5 text-sm font-medium">
                Welcome to the official website of
              </p>
              <h1 className="max-w-[390px] text-xl font-bold leading-[1.3] md:text-[22px]">
                Shree Krishna Bhakti Ashram
              </h1>
              <p className="mt-1 text-sm text-white/90">
                Discover peace, devotion and spiritual wisdom
              </p>
            </div>
          </Link>

          {/* Founder information */}
          <div className="hidden items-center gap-5 md:flex">
            <div className="max-w-[460px] hidden min-[991px]:block min-[1368px]:max-w-[260px] text-right text-xs leading-relaxed">
              <p className="font-medium text-white/90">
                Founded on the timeless path of devotion
              </p>
              <p className="text-sm font-semibold">
                Shree Krishna Bhakti Ashram
              </p>
             <ul className="flex items-center gap-3 min-[1368px]:hidden mt-4">
              {/* Email Block */}
                <li className="secondary flex items-center">
                  <a
                    className="flex items-center gap-2 whitespace-nowrap font-bold text-[15px] text-[#fff] transition hover:text-[#244584]"
                    href="mailto:skbhaktiashram@gmail.com"
                  >
                    <MdEmail className="shrink-0" />
                    skbhaktiashram@gmail.com
                  </a>
                </li>

                {/* Phone Block */}
                <li className="secondary flex items-center">
                  <a
                    className="flex items-center gap-2 whitespace-nowrap font-bold text-[15px] text-[#fff] transition hover:text-[#244584]"
                    href="tel:+919748088819"
                  >
                    <FaPhone className="shrink-0" />
                    +91 9748088819
                  </a>
                </li>
              </ul>
            </div>

            <img
              src="/assets/images/ashram-founder.png"
              alt="Ashram founder"
              className="hidden min-[1050px]:block h-[105px] w-[115px] self-end object-contain object-bottom"
            />
          </div>

          {/* <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="ml-auto text-[#fff] lg:hidden mbsearch"
            aria-label="Toggle search"
          >
            <Search size={21} />
          </button> */}

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 transition hover:bg-white/15 min-[1199px]:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="bg-[#FFF8ED] shadow-[0_6px_12px_rgba(0,0,0,0.12)]">
        <div className="hidden min-[1199px]:flex mx-auto min-h-[56px] max-w-[1380px] items-center justify-between px-5 lg:px-8">
          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-5 min-[1199px]:flex xl:gap-6"
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="group relative flex h-14 items-center"
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 whitespace-nowrap text-[15px] font-bold transition-colors hover:text-[#B96B25] ${
                    index === 0
                      ? "font-bold text-[#B96B25]"
                      : "text-[#4B4037]"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={13} strokeWidth={2} />}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 min-w-[210px] translate-y-2 rounded-b-lg bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-black transition hover:bg-blue-50 hover:text-[#287fa0]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-[#243c82] transition hover:text-[#2d83a5]"
              aria-label="Toggle search"
              aria-expanded={searchOpen}
            >
              <Search size={20} />
            </button> */}
          </nav>

             <ul className="hidden min-[1199px]:flex top-bar-nav nav navbar-nav navbar-right flex-wrap items-center gap-6">
  {/* Contact Us Button */}
  

  {/* Email Block */}
  <li className="secondary hidden min-[1368px]:flex items-center">
    <a 
      className="flex font-bold items-center gap-2 text-[16px] text-[#4B4037] transition hover:text-[#B96B25]" 
      href="mailto:skbhaktiashram@gmail.com"
    >
      <span className="flex items-center text-[16px] text-[#4B4037] hover:text-[#B96B25]"><MdEmail /></span>  
      skbhaktiashram@gmail.com
    </a>
  </li>

  {/* Phone Block */}
  <li className="secondary hidden min-[1368px]:flex items-center">
    <a 
      className="font-bold flex items-center gap-2 telnav text-[16px] text-[#4B4037] transition hover:text-[#B96B25]" 
      href="tel:+919748088819"
    >
      <span className="flex items-center text-[16px] text-[#4B4037] hover:text-[#B96B25]"><FaPhone /></span>
      +91 9748088819
    </a>
  </li>
  <li>
    <a 
      className="inline-flex min-h-[38px] items-center gap-2 rounded-full bg-[#B96B25] px-8 text-[16px] font-bold uppercase text-white transition hover:bg-[#82451F]" 
      href="/accommodation"
    >
      Book Now
    </a>
  </li>
</ul>

          
        </div>

        {/* Search bar */}
     

        {/* Mobile navigation */}
        {mobileOpen && (
          <nav
            className="max-h-[75vh] overflow-y-auto border-t border-gray-200 bg-white px-5 py-3 shadow-lg min-[1199px]:hidden"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 py-3.5 text-sm font-medium text-black hover:text-[#2d83a5]"
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(openMenu === item.label ? "" : item.label)
                      }
                      className="p-3 text-black"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={openMenu === item.label}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform ${
                          openMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.children && openMenu === item.label && (
                  <div className="mb-3 ml-3 border-l-2 border-[#2d83a5]/30 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block gap-1.5 whitespace-nowrap text-[16px] font-bold transition-colors hover:text-[#B96B25] text-[#4B4037]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

           
          </nav>
        )}
      </div>
    </header>


{/* Sticky Header - Appears After 200px Scroll */}
<div
  className={`fixed left-0 top-0 z-[100] w-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.12)] transition-all duration-500 ease-in-out ${
    stickyVisible
      ? "translate-y-0 opacity-100 pointer-events-auto"
      : "-translate-y-full opacity-0 pointer-events-none"
  }`}
>
  <div className="mx-auto flex min-h-[75px] max-w-[1320px] items-center justify-between gap-5 px-5 lg:px-8">

    {/* Left Side Logo */}
    <Link
      href="/"
      className="flex shrink-0 items-center"
      onClick={() => setStickyMobileOpen(false)}
    >
      <img
        src="/assets/images/ashram-logo.png"
        alt="Shree Krishna Bhakti Ashram"
        className="h-[65px] w-[110px] object-contain"
      />
    </Link>

    {/* Desktop Navigation */}
    <nav
      className="hidden items-center gap-5 min-[1199px]:flex xl:gap-7"
      aria-label="Sticky navigation"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-1.5 whitespace-nowrap text-[16px] font-bold transition-colors hover:text-[#B96B25] text-[#4B4037]"
        >
          {item.label.trim()}
        </Link>
      ))}
      
    </nav>

    {/* Mobile Menu Button */}
    
    <button
      type="button"
      onClick={() => setStickyMobileOpen(!stickyMobileOpen)}
      className="rounded-lg p-2 text-[#A84E2E] transition hover:bg-gray-100 min-[1199px]:hidden"
      aria-label={stickyMobileOpen ? "Close menu" : "Open menu"}
      aria-expanded={stickyMobileOpen}
    >
      {stickyMobileOpen ? <X size={27} /> : <Menu size={27} />}
    </button>
  </div>

  {/* Mobile Navigation */}
  <div
    className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 min-[1199px]:hidden ${
      stickyMobileOpen
        ? "max-h-[400px] opacity-100"
        : "max-h-0 opacity-0"
    }`}
  >
    <nav
      className="mx-auto max-w-[1320px] px-5 py-2"
      aria-label="Sticky mobile navigation"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setStickyMobileOpen(false)}
          className="block border-b border-gray-100 py-3.5 text-sm font-medium text-[#484848] transition hover:pl-2 hover:text-[#B96B25]"
        >
          {item.label.trim()}
        </Link>
      ))}
    </nav>
  </div>
</div>

</>
    
  );
}
