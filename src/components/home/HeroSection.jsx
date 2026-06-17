import { motion } from 'framer-motion'
import heroBg from '../../assets/images/homeimage/herobg.png'
import heroPlate from '../../assets/images/homeimage/slider1.png'

const easing = [0.22, 1, 0.36, 1]

function SliderDots() {
  return (
    <div className="absolute bottom-[clamp(18px,3.8svh,40px)] right-[6.9%] z-30 flex items-center gap-[12px] max-md:right-1/2 max-md:translate-x-1/2">
      {[1, 2, 3, 4].map((item) => (
        <button
          key={item}
          type="button"
          aria-label={`Go to slide ${item}`}
          className={
            item === 1
              ? 'grid size-[clamp(36px,5svh,52px)] place-items-center rounded-full bg-[#ff7a18] font-[var(--font-nav)] text-[14px] font-medium text-black'
              : 'grid size-[clamp(36px,5svh,52px)] place-items-center rounded-full border border-white/20 bg-transparent font-[var(--font-nav)] text-[14px] font-medium text-white'
          }
        >
          {item}
        </button>
      ))}
    </div>
  )
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-x-0 bottom-0 h-[18svh] bg-gradient-to-t from-[#070707] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-360 items-center px-[clamp(24px,4.65vw,67px)] pb-[clamp(76px,9svh,104px)] pt-[clamp(92px,14svh,150px)] max-md:items-start max-md:pb-[92px] max-md:pt-[104px]">
        <div className="grid w-full items-center gap-4 lg:grid-cols-[42.5%_57.5%]">

          {/* LEFT: Text */}
          <div className="relative z-20">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: easing }}
              className="mb-[clamp(12px,2.6svh,28px)] flex items-center gap-[13px] font-[var(--font-nav)] text-[clamp(11px,1.38svh,14px)] font-bold uppercase tracking-[0.045em] text-[#ff7a18]"
            >
              <span className="h-px w-[32px] bg-[#ff7a18]" />
              Accessibility Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: easing }}
              className="max-w-[590px] font-[var(--font-body)] text-[clamp(2.7rem,8.8svh,5rem)] font-bold leading-[1.02] tracking-0 text-white max-lg:text-[clamp(2.55rem,7vw,4.25rem)] max-md:text-[clamp(2.3rem,11vw,3.8rem)]"
            >
              Experience
              <span className="block text-[#ff7a18]">Dining</span>
              <span className="block text-[#ff7a18]">Beyond</span>
              Expectations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: easing }}
              className="mt-[clamp(12px,2.2svh,20px)] max-w-[553px] text-[clamp(14px,2.05svh,18px)] leading-[1.55] tracking-[0.005em] text-[#aeb4bd] max-md:max-w-[33rem]"
            >
              Indulge in handcrafted dishes, fresh ingredients, and an unforgettable dining experience in a warm and elegant atmosphere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52, ease: easing }}
              className="mt-[clamp(22px,4.8svh,50px)] flex flex-wrap items-center gap-[clamp(14px,1.8vw,24px)]"
            >
              <a
                href="#contact"
                className="inline-flex h-[clamp(46px,6.1svh,58px)] min-w-[clamp(170px,16vw,220px)] items-center justify-center rounded-full bg-[#ff7a18] px-7 font-[var(--font-nav)] text-[clamp(14px,1.85svh,17px)] font-extrabold text-white shadow-[0_18px_45px_rgba(255,122,24,0.22)] transition hover:bg-[#ff8b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="inline-flex h-[clamp(46px,6.1svh,58px)] min-w-[clamp(145px,13vw,175px)] items-center justify-center rounded-full bg-white px-7 font-[var(--font-nav)] text-[clamp(14px,1.85svh,17px)] font-bold text-[#111827] shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition hover:bg-[#f5f5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a18]"
              >
                View Menu
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Single image — plate + leaves + badge sab included */}
          <div className="relative min-h-[clamp(360px,65svh,595px)] max-md:min-h-82.5">
            <motion.img
              src={heroPlate}
              alt="Grilled chicken with vegetables, 50% off"
              initial={{ opacity: 0, scale: 0.92, y: 34 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.9, delay: 0.32, ease: easing },
                scale:   { duration: 0.9, delay: 0.32, ease: easing },
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.2,
                },
              }}
              // ✅ image wider karo taake leaves + badge clip na hon
              className="absolute inset-0 h-full w-full object-contain object-center drop-shadow-[0_34px_55px_rgba(0,0,0,0.55)] max-md:relative max-md:h-auto max-md:w-full"
            />
          </div>

        </div>
      </div>

      <SliderDots />
    </section>
  )
}

export default HeroSection