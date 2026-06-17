import { motion } from 'framer-motion'
import aboutOne from '../../assets/images/about/about1.png'
import aboutTwo from '../../assets/images/about/about2.png'
import founderImage from '../../assets/images/about/person.png'
import AnimatedSection from '../ui/AnimatedSection'

const easing = [0.22, 1, 0.36, 1]

function ExperienceBadge() {
  return (
    <div className="hidden lg:flex absolute right-0 top-0 z-10 items-start">

      {/* Left side lines */}
      <div className="relative -mr-18 flex flex-col items-start">
        <div className="w-0.75 bg-white h-28" />
        <div className="h-1 w-18 bg-white" />
      </div>

      {/* Dark box */}
      <div className="flex h-28 w-28 flex-col items-center justify-center bg-[#191919]">
        <span className="font-[var(--font-nav)] text-[52px] leading-none text-[#ff7a18]">
          25
        </span>
        <span className="mt-2 text-center font-[var(--font-nav)] text-[11px] uppercase leading-[1.4] tracking-[0.08em] text-white/70">
          Years of
          <br />
          Experience
        </span>
      </div>

    </div>
  );
}

function SignatureMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 74"
      className="h-16 w-40 stroke-white/40 max-md:h-14 max-md:w-34"
      fill="none"
    >
      <path
        d="M10 45C30 22 46 48 28 54C16 58 10 50 19 42C34 28 58 18 66 30C77 46 45 57 55 42C63 29 86 20 92 31C101 48 72 58 80 43C86 31 103 25 110 34C121 48 98 58 107 43C114 30 135 25 142 37C151 53 122 62 130 45C135 34 152 28 162 37"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M16 57C48 70 104 65 170 48" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-[#111111] py-[clamp(46px,5.4vw,72px)]">
      <div className="mx-auto grid max-w-360 grid-cols-[1fr_1fr] items-center gap-10 px-[clamp(24px,4.65vw,67px)] max-xl:gap-8 max-lg:grid-cols-1 max-lg:gap-12">

        {/* ===== LEFT: Image Grid ===== */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: easing }}
          // ✅ 2 cols: tall left image, right col = top image + orange card
          className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_auto] gap-4 max-sm:grid-cols-1"
        >
          {/* Col 1: Tall image spanning both rows */}
          <div className="row-span-2 overflow-hidden rounded-md max-sm:row-span-1 max-sm:h-72">
            <img
              src={aboutOne}
              alt="Burgers, fries, onion rings and drink"
              className="h-full w-full object-cover"
              style={{ minHeight: '360px' }}
            />
          </div>

          {/* Col 2 Row 1: Second image */}
          <div className="overflow-hidden rounded-md max-sm:h-44">
            <img
              src={aboutTwo}
              alt="Pizza and fast food on a table"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Col 2 Row 2: Orange stats card */}
          <div className="rounded-md bg-[#ff7a18] p-6 text-white max-xl:p-5">
            <p className="font-[var(--font-nav)] text-[36px] leading-none max-xl:text-[30px]">
              150+
            </p>
            <p className="mt-3 max-w-40 font-[var(--font-nav)] text-[12px] leading-[1.55] text-white/90">
              Community Townhalls Hosted This Year
            </p>
          </div>
        </motion.div>

        {/* ===== RIGHT: Text Content ===== */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, delay: 0.08, ease: easing }}
          // ✅ relative so ExperienceBadge can be absolute inside
          className="relative pb-4 pr-[clamp(0px,2vw,36px)] max-xl:pr-0"
        >
          {/* 25 Years badge — top right of this column */}
          <ExperienceBadge />

          {/* About Us label */}
          <div className="mb-2.5 flex items-center gap-3 font-[var(--font-nav)] text-[12px] uppercase tracking-[0.28em] text-[#ff7a18]">
            About Us
            <span className="h-px w-11 bg-[#ff7a18]" />
          </div>

          {/* Heading — right pe badge hai toh max-w restrict */}
          <h2 className="max-w-95 font-[var(--font-body)] text-[clamp(2.2rem,3.6vw,3.1rem)] leading-[1.16] tracking-0 text-white max-xl:max-w-[320px]">
            A Story Served
            <span className="block">with Passion</span>
          </h2>

          <p className="mt-4.5 max-w-125 text-[13px] leading-[1.75] text-white/64">
            We believe great food brings people together. From carefully selected ingredients to expertly crafted dishes, every meal is
            designed to create memorable moments for our guests.
          </p>

          {/* Two column para */}
          <div className="mt-[48px] grid grid-cols-2 gap-[32px] max-xl:mt-10 max-md:grid-cols-1 max-md:gap-5">
            <p className="text-[13px] leading-[1.75] text-white/62">
              We strive to deliver hospitality that feels as exceptional as our cuisine.
            </p>
            <p className="text-[13px] leading-[1.75] text-white/62">
              Whether you're joining us for a casual lunch, family dinner, romantic evening, or special celebration
            </p>
          </div>

          {/* Founder row */}
          <div className="mt-[28px] flex items-center gap-[24px] max-sm:flex-wrap">
            <div className="flex items-center gap-[14px]">
              <img
                src={founderImage}
                alt="Jemi D. William"
                className="size-[58px] rounded-full bg-white object-cover ring-2 ring-white/10"
              />
              <div>
                <p className="font-[var(--font-nav)] text-[15px] font-extrabold text-white">
                  Jemi D. William
                </p>
                <p className="mt-[4px] font-[var(--font-nav)] text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#ff7a18]">
                  Founder
                </p>
              </div>
            </div>
            <SignatureMark />
          </div>
        </motion.div>

      </div>
    </AnimatedSection>
  )
}

export default AboutSection