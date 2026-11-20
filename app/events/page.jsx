
"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Clock,
  Sun,
  Moon,
  Heart,
  ArrowUpRight,
  CalendarDays,
  HandHeart,
  Sparkles,
  Building2,
  Trees,
  BedDouble,
  CookingPot,
  Users,
  Utensils,
} from "lucide-react";

import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

const dailyActivities = [
  {
    title: "Morning Prayers",
    time: "6:30 AM",
    description:
      "Begin your day with peaceful prayers and spiritual devotion in the sacred atmosphere of the Ashram.",
    icon: Sun,
    image: "/assets/images/morning.jpg",
    tag: "Every Morning",
  },
  {
    title: "Evening Prayers",
    time: "6:00 PM",
    description:
      "Conclude your day with evening prayers, devotion, and moments of inner peace.",
    icon: Moon,
    image: "/assets/images/evening.jpg",
    tag: "Every Evening",
  },
  {
    title: "Food Distribution",
    time: "8:00 AM – 8:30 AM",
    description:
      "A daily act of compassion through food distribution to yogis and underprivileged people.",
    icon: HandHeart,
    image: "/assets/images/food.jpg",
    tag: "Daily Seva",
  },
];

const spiritualActivities = [
  {
    title: "Bhajan & Kirtan",
    subtitle: "Devotional Music",
    description:
      "Experience the joy of devotional songs and spiritual chanting.",
    number: "01",
  },
  {
    title: "Meditation (Pre-Arranged)",
    subtitle: "By Prior Arrangement",
    description:
      "Enjoy a peaceful meditation experience through prior arrangements with the ashram.",
    number: "02",
  },
  {
    title: "Spiritual Gatherings",
    subtitle: "Satsang & Devotion",
    description:
      "Discover opportunities to participate in spiritual and religious activities.",
    number: "03",
  },
];

export default function EventsPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <main className="overflow-hidden bg-[#F5F7FB] text-[#14233F]">

      {/* HERO BANNER */}
      <section className="pt-[90px] sm:pt-0 relative flex min-h-[410px] items-center overflow-hidden md:min-h-[480px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] hover:scale-105"
          style={{
            backgroundImage:
              "url('/assets/images/abgh.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#102B58]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B58]/90 via-[#102B58]/55 to-transparent" />

        <div className="mx-auto relative w-full max-w-[1320px] item-center px-5 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="max-w-2xl">
            <div className="md:mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#FFB900]" />
              <span className="text-xs font-bold uppercase tracking-[4px] text-[#FFCA45]">
                Shree Krishna Bhakti Ashram
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-[46px]">
              Events & <span className="text-[#FFB900]">Activities</span>
            </h1>

            <p className="mt-3 md:mt-5 max-w-xl text-base leading-8 text-white/85 md:text-lg">
              Experience devotion, discover inner peace, and become a part
              of the spiritual life at our Ashram.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <Link href="/" className="transition hover:text-[#FFB900]">
                Home
              </Link>
              <span>/</span>
              <span className="font-semibold text-[#FFB900]">
                Events & Activities
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FFB900] via-white to-[#244584]" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div data-aos="fade-right">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#FFB900]" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#244584]">
                Life at the Ashram
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#14233F] md:text-[46px]">
              A Day Filled With
              <span className="block text-[#244584]">
                Peace & Devotion
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#647084]">
              Guests are welcome to participate in the Ashram's daily
              activities. From peaceful morning prayers to evening
              devotion and acts of service, every moment offers an
              opportunity to experience spiritual life.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-[#E5EAF2] bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#B77B00]">
                <Heart size={23} />
              </div>
              <div>
                <h3 className="font-bold text-[#14233F]">
                  Devotion Through Service
                </h3>
                <p className="mt-1 text-sm text-[#647084]">
                  Participate, connect, and experience the spirit of seva.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border-[15px] border-[#FFB900]/20" />

            <img
              src="/assets/images/tpr.jpg"
              alt="Spiritual activities at Shree Krishna Bhakti Ashram"
              className="relative z-10 h-[330px] w-full rounded-[28px] object-cover shadow-xl md:h-[440px]"
            />

           
          </div>

        </div>
      </section>
      {/* ================= PAID EVENTS & VENUE HIRE ================= */}

<section className="relative overflow-hidden bg-white px-5 py-20 md:px-10 md:py-24">

  <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#FFB900]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#244584]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">

    {/* SECTION HEADING */}

    <div className="mx-auto mb-14 max-w-3xl text-center" data-aos="fade-up">

      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-[2px] w-10 bg-[#FFB900]" />
        <span className="text-xs font-bold uppercase tracking-[3px] text-[#244584]">
          Host Your Special Occasion
        </span>
        <span className="h-[2px] w-10 bg-[#FFB900]" />
      </div>

          <h2 className="text-3xl font-bold leading-tight text-[#14233F] md:text-[46px]">
        Events & <span className="text-[#244584]">Venue Hire</span>
      </h2>

      <p className="mt-6 text-base leading-8 text-[#647084]">
        Looking for a peaceful and distinctive venue for a wedding,
        Bhagwat, religious ceremony or family gathering? Shree Krishna
        Bhakti Ashram offers its temple and garden spaces for private
        events and paid venue hire. With accommodation and an area for
        food preparation within the Ashram, we invite you to discuss
        your event requirements with our team.
      </p>

    </div>

    {/* VENUE SPACES */}

    <div className="grid gap-7 md:grid-cols-2">

      {/* TEMPLE AREA */}

      <article
        data-aos="fade-up"
        className="group overflow-hidden rounded-[26px] border border-[#E8ECF3] bg-[#F5F7FB] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-9"
      >

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF4D6] text-[#B77B00] transition-all duration-300 group-hover:bg-[#244584] group-hover:text-white">
          <Building2 size={30} />
        </div>

        <span className="text-xs font-bold uppercase tracking-[2px] text-[#B77B00]">
          Enclosed Event Space
        </span>

        <h3 className="mt-3 text-2xl font-bold text-[#14233F] md:text-3xl">
          Temple Area
        </h3>

        <p className="mt-4 text-sm leading-8 text-[#647084]">
          The enclosed temple area can be considered for religious
          ceremonies, Bhagwat programmes, devotional gatherings,
          weddings and other suitable private occasions. Its spiritual
          setting provides a distinctive atmosphere for meaningful
          celebrations and gatherings.
        </p>

        <div className="mt-6 flex items-center gap-3 border-t border-[#DDE3ED] pt-5">
          <Sparkles size={19} className="shrink-0 text-[#B77B00]" />
          <span className="text-sm font-semibold text-[#244584]">
            Available for event-hire enquiries
          </span>
        </div>

      </article>

      {/* OPEN GARDEN AREA */}

      <article
        data-aos="fade-up"
        data-aos-delay="120"
        className="group overflow-hidden rounded-[26px] border border-[#E8ECF3] bg-[#F5F7FB] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-9"
      >

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF4D6] text-[#B77B00] transition-all duration-300 group-hover:bg-[#244584] group-hover:text-white">
          <Trees size={30} />
        </div>

        <span className="text-xs font-bold uppercase tracking-[2px] text-[#B77B00]">
          Outdoor Event Space
        </span>

        <h3 className="mt-3 text-2xl font-bold text-[#14233F] md:text-3xl">
          Open Garden Area
        </h3>

        <p className="mt-4 text-sm leading-8 text-[#647084]">
          The Ashram's open garden area offers an outdoor setting for
          suitable celebrations, family functions, religious gatherings
          and social occasions. Clients can enquire about using this
          space alongside the temple area or for an event arranged
          primarily in the garden.
        </p>

        <div className="mt-6 flex items-center gap-3 border-t border-[#DDE3ED] pt-5">
          <Sparkles size={19} className="shrink-0 text-[#B77B00]" />
          <span className="text-sm font-semibold text-[#244584]">
            Available for event-hire enquiries
          </span>
        </div>

      </article>

    </div>

    {/* ACCOMMODATION & FOOD ARRANGEMENTS */}

    <div className="mt-8 grid gap-7 lg:grid-cols-2">

      {/* ACCOMMODATION */}

      <article
        data-aos="fade-right"
        className="rounded-[26px] bg-[#244584] p-7 text-white shadow-xl md:p-9"
      >

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFB900] text-[#14233F]">
          <BedDouble size={28} />
        </div>

        <span className="text-xs font-bold uppercase tracking-[2px] text-[#FFCA45]">
          Guest Accommodation
        </span>

        <h3 className="mt-3 text-2xl font-bold md:text-3xl">
          Stay at the Ashram
        </h3>

        <div className="mt-6 flex flex-wrap items-end gap-3">
          <span className="text-5xl font-bold text-[#FFCA45]">
            10
          </span>
          <span className="pb-1 text-sm font-semibold text-white/80">
            Rooms available in total
          </span>
        </div>

        <p className="mt-5 text-sm leading-8 text-white/80">
          Accommodation is available for guests attending events at
          the Ashram. The property has a total of 10 rooms, making
          it possible for event organisers to enquire about arranging
          accommodation for family members, visitors and other guests.
        </p>

        <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5">

          <div className="flex items-center gap-3">
            <Users size={21} className="shrink-0 text-[#FFCA45]" />
            <h4 className="font-bold text-white">
              Guest & Sleeping Capacity
            </h4>
          </div>

          <p className="mt-3 text-sm leading-7 text-white/75">
            The exact sleeping capacity should be confirmed with the
            Ashram team according to the room arrangements and number
            of guests. Additional beds may be discussed in advance
            and are subject to availability and approval.
          </p>

        </div>

      </article>

      {/* FOOD PREPARATION */}

      <article
        data-aos="fade-left"
        className="rounded-[26px] border border-[#E8ECF3] bg-[#F5F7FB] p-7 md:p-9"
      >

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4D6] text-[#B77B00]">
          <CookingPot size={28} />
        </div>

        <span className="text-xs font-bold uppercase tracking-[2px] text-[#B77B00]">
          Food & Catering Arrangements
        </span>

        <h3 className="mt-3 text-2xl font-bold text-[#14233F] md:text-3xl">
          Dedicated Food Preparation Area
        </h3>

        <p className="mt-5 text-sm leading-8 text-[#647084]">
          The Ashram has a dedicated area where food can be prepared
          within the premises. This facility can support event-related
          food arrangements for gatherings, religious programmes,
          Bhagwat ceremonies, weddings and other suitable occasions.
        </p>

        <div className="mt-6 space-y-4">

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#B77B00]">
              <Utensils size={18} />
            </div>
            <div>
              <h4 className="font-bold text-[#14233F]">
                On-site Food Preparation
              </h4>
              <p className="mt-1 text-sm leading-7 text-[#647084]">
                Food preparation can be arranged within the Ashram,
                subject to prior discussion and agreed arrangements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#B77B00]">
              <Users size={18} />
            </div>
            <div>
              <h4 className="font-bold text-[#14233F]">
                Event Food Requirements
              </h4>
              <p className="mt-1 text-sm leading-7 text-[#647084]">
                Discuss your expected guest numbers, menu and food
                service requirements with the Ashram family in advance.
              </p>
            </div>
          </div>

        </div>

      </article>

    </div>

    {/* EVENT TYPES & ADDITIONAL ARRANGEMENTS */}

    <div
      data-aos="fade-up"
      className="mt-10 rounded-[28px] border border-[#E8ECF3] bg-white p-7 shadow-sm md:p-10"
    >

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        <div>
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B77B00]">
            Plan Your Occasion
          </span>

          <h3 className="mt-3 text-2xl font-bold leading-tight text-[#14233F] md:text-3xl">
            A Setting for Meaningful Gatherings
          </h3>

          <p className="mt-4 text-sm leading-8 text-[#647084]">
            Whether you are planning a religious celebration or a
            private family occasion, contact the Ashram to discuss
            the spaces, accommodation and arrangements that may
            suit your event.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

          {[
            "Weddings & Family Functions",
            "Bhagwat & Religious Programmes",
            "Spiritual & Devotional Gatherings",
            "Private Celebrations",
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-xl bg-[#F5F7FB] p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF4D6] text-[#B77B00]">
                <Sparkles size={16} />
              </span>

              <span className="text-sm font-semibold text-[#244584]">
                {item}
              </span>
            </div>

          ))}

        </div>

      </div>

      <div className="mt-8 border-t border-[#E8ECF3] pt-7">

        <h4 className="text-lg font-bold text-[#14233F]">
          Discuss Your Event Requirements
        </h4>

        <p className="mt-3 text-sm leading-8 text-[#647084]">
          Event organisers can discuss venue availability, guest
          accommodation, additional beds, food preparation, seating,
          decorations, timings, pricing and any other arrangements
          with the Ashram family. These requirements will need to be
          reviewed and agreed upon before confirming a booking.
        </p>

        <p className="mt-3 text-sm leading-8 text-[#647084]">
          Venue hire is offered on a paid basis. Charges, availability,
          permitted arrangements and the final scope of services will
          be discussed individually according to the nature and
          requirements of each event.
        </p>

      </div>

    </div>

    {/* VENUE ENQUIRY CTA */}

    <div
      data-aos="zoom-in"
      className="mt-10 rounded-[28px] bg-[#14233F] px-7 py-10 text-center shadow-xl md:px-12 md:py-14"
    >

      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFB900] text-[#14233F]">
        <CalendarDays size={30} />
      </div>

      <span className="text-xs font-bold uppercase tracking-[3px] text-[#FFCA45]">
        Enquire About Venue Hire
      </span>

      <h3 className="mt-4 text-2xl font-bold leading-tight text-white md:text-4xl">
        Planning an Event at the Ashram?
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/75 md:text-base">
        Tell us about your event, expected number of guests,
        accommodation needs and food arrangements. Our team can
        discuss the available spaces and possible arrangements
        with you.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFB900] px-8 py-4 text-sm font-bold text-[#14233F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
      >
        Enquire About Venue Hire
        <ArrowUpRight size={19} />
      </Link>

    </div>

  </div>

</section>

   {/* FOOD DISTRIBUTION / SEVA */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] bg-[#244584] shadow-xl lg:grid-cols-2">

          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[440px]" data-aos="fade-right">
            <img
              src="/assets/images/ac2.jpg"
              alt="Food distribution and seva"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102B58]/55 to-transparent" />
          </div>

          <div className="flex flex-col justify-center p-8 text-white md:p-12 lg:p-14" data-aos="fade-left">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFB900] text-[#14233F]">
              <HandHeart size={29} />
            </div>

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#FFCA45]">
              A Practice of Compassion
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-[46px]">
              Food Distribution
              <span className="block text-[#FFCA45]">
                & Daily Seva
              </span>
            </h2>

            <p className="mt-5 leading-8 text-white/80">
              The Ashram conducts daily food distribution for yogis and
              underprivileged people. Guests are welcome to learn more
              about this service and the Ashram's spiritual activities.
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Clock className="text-[#FFCA45]" size={23} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Daily Schedule
                </p>
                <p className="mt-1 text-lg font-bold">
                  8:00 AM – 8:30 AM
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* DAILY SCHEDULE */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center" data-aos="fade-up">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-9 bg-[#FFB900]" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#244584]">
                Daily Schedule
              </span>
              <span className="h-[2px] w-9 bg-[#FFB900]" />
            </div>

            <h2 className="text-3xl font-bold text-[#14233F] md:text-5xl">
              Daily Activities
            </h2>

            <p className="mt-5 leading-8 text-[#647084]">
              Join us in our daily spiritual activities and experience
              moments of prayer, devotion, and selfless service.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {dailyActivities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <article
                  key={activity.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="group overflow-hidden rounded-[24px] border border-[#E8ECF3] bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#FFB900]/60 hover:shadow-2xl"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102B58]/75 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full bg-[#FFB900] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#14233F]">
                      {activity.tag}
                    </span>

                    <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white">
                      <Clock size={17} className="text-[#FFCA45]" />
                      <span className="text-sm font-bold">
                        {activity.time}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4D6] text-[#B77B00] transition-all duration-300 group-hover:bg-[#244584] group-hover:text-white">
                        <Icon size={27} />
                      </div>

                      <ArrowUpRight
                        size={23}
                        className="text-[#B8C1D0] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#B77B00]"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-[#14233F] transition-colors group-hover:text-[#244584]">
                      {activity.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#647084]">
                      {activity.description}
                    </p>

                    <div className="mt-6 h-[2px] w-12 bg-[#FFB900] transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPIRITUAL ACTIVITIES */}
      <section className="relative overflow-hidden bg-[#F5F7FB] px-5 py-20 md:px-10 md:py-24">
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#FFB900]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#244584]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-aos="fade-right">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#FFB900]" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-[#244584]">
                  Explore & Participate
                </span>
              </div>

              <h2 className="text-3xl font-bold text-[#14233F] md:text-5xl">
                Spiritual Experiences
              </h2>

              <p className="mt-4 max-w-xl leading-8 text-[#647084]">
                Guests can also inquire about other spiritual and religious
                activities inside and outside the Ashram.
              </p>
            </div>

            <div data-aos="fade-left" className="hidden text-right md:block">
              <Sparkles size={34} className="ml-auto text-[#D69B12]" />
              <p className="mt-2 text-sm font-semibold text-[#244584]">
                Discover the path of devotion
              </p>
            </div>
          </div>
<div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
  {spiritualActivities.map((activity, index) => (
    <article
      key={activity.number}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="group relative min-h-[320px] overflow-hidden rounded-[26px] bg-transparent text-[#244584] shadow-none transition-all duration-500 md:bg-gradient-to-r md:from-[#D99024] md:via-[#B96B25] md:to-[#82451F] md:text-white md:shadow-lg"
    >
      {/* Number */}
      <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#D99024]/40 bg-[#D99024]/10 text-sm font-bold text-[#B96B25] transition-all duration-500 group-hover:rotate-12 md:border-white/40 md:bg-white/10 md:text-white md:backdrop-blur-md">
        {activity.number}
      </div>

      {/* Content */}
      <div className="flex h-full min-h-[320px] flex-col justify-end p-7 transition-transform duration-500 md:group-hover:-translate-y-2">
        <span className="text-xs font-bold uppercase tracking-[3px] text-[#B96B25] md:text-[#FFCA45]">
          {activity.subtitle}
        </span>

        <h3 className="mt-3 text-2xl font-bold md:text-3xl">
          {activity.title}
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-7 text-[#475569] md:text-white/85">
          {activity.description}
        </p>

        {/* Bottom Accent Line */}
        <div className="mt-6 h-[3px] w-12 rounded-full bg-[#D99024] transition-all duration-500 group-hover:w-full md:bg-[#FFB900]" />
      </div>
    </article>
  ))}
</div>
        </div>
      </section>

   

      {/* ENQUIRY CTA */}
      <section className="relative overflow-hidden bg-[#14233F] px-5 py-20 text-center md:px-10 md:py-24">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border-[45px] border-[#FFB900]/10" />

        <div className="relative mx-auto max-w-3xl" data-aos="zoom-in">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFB900] text-[#14233F]">
            <CalendarDays size={30} />
          </div>

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#FFCA45]">
            Join Us at the Ashram
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
            Be a Part of Our
            <span className="block text-[#FFB900]">
              Spiritual Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">
            Interested in participating in our daily activities or other
            spiritual programmes? Feel free to get in touch with us.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#FFB900] px-8 py-4 text-sm font-bold text-[#14233F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
          >
            Enquire Now
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>


     <ContactSection />
      <Footer />
    </main>
  );
}
