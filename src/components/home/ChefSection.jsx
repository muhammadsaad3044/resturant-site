import { motion } from 'framer-motion'
import chefBackground from '../../assets/images/chefs/ourcheifbg.png'
import { chefs } from '../../data/chefs'

const easing = [0.22, 1, 0.36, 1]

function AccentWave() {
  return (
    <svg viewBox="0 0 46 14" aria-hidden="true" className="h-[12px] w-[42px] text-[#f3c31c]">
      <path
        d="M2 7C5 3 8 3 11 7C14 11 17 11 20 7C23 3 26 3 29 7C32 11 35 11 38 7C40 4.8 42 4.2 44 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ChefCard({ chef, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: easing }}
      whileHover={{ y: -6 }}
      className="group relative w-full overflow-visible"
    >
      <div className="overflow-hidden bg-[#1d1d1d]">
        <img
          src={chef.image}
          alt={chef.name}
          className="h-[clamp(280px,32vw,420px)] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="absolute bottom-[10px] left-1/2 z-10 flex min-h-[78px] w-[88.5%] -translate-x-1/2 items-center bg-[#0f0f0f]/98 px-[18px] py-[14px] shadow-[0_16px_30px_rgba(0,0,0,0.3)]">
        <span className="mr-[14px] font-[var(--font-body)] text-[78px] font-black leading-none text-white/[0.04]">
          {chef.index}
        </span>
        <div className="relative z-10">
          <h3 className="font-[var(--font-nav)] text-[14px] font-extrabold uppercase leading-none tracking-[0.035em] text-white">
            {chef.name}
          </h3>
          <p className="mt-[10px] font-[var(--font-nav)] text-[11px] font-extrabold uppercase leading-none tracking-[0.06em] text-[#ff7a18]">
            {chef.role}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

function ChefSection() {
  return (
    <section
      className="bg-[#121212] bg-cover bg-center py-[clamp(46px,5.4vw,72px)]"
      style={{ backgroundImage: `linear-gradient(rgba(9,9,9,0.44), rgba(9,9,9,0.44)), url(${chefBackground})` }}
    >
      <div className="mx-auto max-w-360 px-[clamp(24px,4.65vw,67px)]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: easing }}
          className="mb-[clamp(36px,5vw,56px)] text-center"
        >
          <h2 className="font-[var(--font-body)] text-[clamp(2.3rem,4.3vw,3.38rem)] font-extrabold leading-none text-white">
            Our Chief
          </h2>
          <div className="mt-[14px] flex justify-center">
            <AccentWave />
          </div>
        </motion.div>

        <div className="grid gap-[clamp(14px,2vw,22px)] pb-3 md:grid-cols-3">
          {chefs.map((chef, index) => (
            <ChefCard key={chef.name} chef={chef} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChefSection
