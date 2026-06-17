import { motion } from 'framer-motion'
import clockIcon from '../../assets/images/clock.png'
import { coreFeatures } from '../../data/features'

const easing = [0.22, 1, 0.36, 1]

function CoreFeatureCard({ feature, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: easing }}
      whileHover={{ y: -6 }}
      className="flex min-h-100 flex-col items-center rounded-3xl bg-[#262626] px-12 py-12 text-center max-xl:min-h-95 max-xl:px-8 max-xl:pb-12 max-xl:pt-12"
    >
      <img src={clockIcon} alt="" aria-hidden="true" className="h-19.75 w-28 object-contain" />

      <h3 className="mt-9.25 font-[var(--font-display)] text-[24px] uppercase leading-none text-white max-xl:text-[21px]">
        {feature.title}
      </h3>

      <div aria-hidden="true" className="w-10 mt-4">
        <svg
          viewBox="0 0 40 8"
          className="w-full h-auto"
          fill="none"
        >
          <path
            d="M0 3 L4 1 L8 4 L12 1 L16 4 L20 1 L24 4 L28 1 L32 4 L36 1 L40 3"
            stroke="gray"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <p className="mt-4 max-w-53.5 font-[var(--font-body)] text-[11px] leading-[1.85] text-white/55">
        Lorem ipsum dolor sit amet, consectetur ur adipisicing elit, sed do eiusmod tempor incididunt ut lab.
      </p>

      <a
        href="#contact"
        className="mt-7.75 font-[var(--font-body)] text-[11px] leading-none text-white transition hover:text-[#ffd000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd000]"
      >
        Read More
      </a>
    </motion.article>
  )
}

function CoreFeatures() {
  return (
    <section className="bg-[#0f0f0f] py-[clamp(46px,5.4vw,56px)]">
      <div className="mx-auto max-w-360 px-[clamp(24px,4.65vw,67px)]">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.55, ease: easing }}
          className="text-center font-[var(--font-body)] text-[clamp(2.45rem,5vw,3.55rem)] leading-none tracking-0 text-white"
        >
          Core Features
        </motion.h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {coreFeatures.map((feature, index) => (
            <CoreFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreFeatures
