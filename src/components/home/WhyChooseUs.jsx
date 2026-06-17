import { motion } from 'framer-motion'
import whychooseimg from '../../assets/images/whychooseus/whychooseimg.png'
import { whyChooseFeatures } from '../../data/features'
import AnimatedSection from '../ui/AnimatedSection'

const easing = [0.22, 1, 0.36, 1]

function FeatureItem({ feature, index }) {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.48, delay: 0.1 + index * 0.05, ease: easing }}
      className="flex items-center gap-3.5"
    >
      {/* ✅ Icon circle — larger, darker */}
      <span className="grid size-10.5 shrink-0 place-items-center rounded-full bg-[#1a1a1a] text-[#ff7a18]">
        <Icon size={18} strokeWidth={2.2} />
      </span>
      <span>
        <h3 className="font-[var(--font-nav)] text-[14px] leading-none text-white">
          {feature.title}
        </h3>
        <p className="mt-1.5 font-[var(--font-nav)] text-[11px] leading-none text-white/40">
          {feature.text}
        </p>
      </span>
    </motion.div>
  )
}

function WhyChooseUs() {
  return (
    <AnimatedSection className="bg-[#0f0f0f] py-[clamp(46px,5.4vw,56px)]">
      <div className="mx-auto grid max-w-360 px-[clamp(24px,4.65vw,67px)] grid-cols-[1fr_1fr] items-center gap-[clamp(32px,5vw,80px)] max-lg:grid-cols-1 max-lg:gap-12">

        {/* ===== LEFT: Image ===== */}
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easing }}
          className="flex items-center"
        >
          <img
            src={whychooseimg}
            alt="Chef preparing a dish"
            className="h-[clamp(320px,42vw,480px)] w-full rounded-[14px] object-cover"
          />
        </motion.div>

        {/* ===== RIGHT: Text Content ===== */}
        <motion.div
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: easing }}
        >
          {/* Label */}
          <p className="font-[var(--font-nav)] text-[11px] uppercase leading-none tracking-[0.42em] text-[#ff7a18]">
            Why Choose Us
          </p>

          {/* Heading */}
          <h2 className="mt-5 font-[var(--font-body)] text-[clamp(2.2rem,3.8vw,3.4rem)] leading-[1.05] tracking-0 text-white">
            More Than Just a Meal
          </h2>

          {/* Description */}
          <p className="mt-4.5 max-w-130 font-[var(--font-nav)] text-[13px] leading-[1.78] text-white/50">
            From birthdays and anniversaries to corporate gatherings and private dining
            experiences, we provide the perfect setting for every occasion.
          </p>

          {/* Features grid */}
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 max-sm:grid-cols-1">
            {whyChooseFeatures.map((feature, index) => (
              <FeatureItem key={feature.title} feature={feature} index={index} />
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="mt-9 inline-flex h-11.5 min-w-37 items-center justify-center rounded-full bg-[#ff7a18] px-[28px] font-[var(--font-nav)] text-[12px] font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_14px_32px_rgba(255,122,24,0.22)] transition hover:bg-[#ff8b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Learn More
          </motion.a>
        </motion.div>

      </div>
    </AnimatedSection>
  )
}

export default WhyChooseUs