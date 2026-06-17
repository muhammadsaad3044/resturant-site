import { motion } from 'framer-motion'
import burgerImage from '../../assets/images/separateoffer/separateofferimg.png'

const easing = [0.22, 1, 0.36, 1]

function OfferSection() {
  return (
    <section className="bg-restaurant-charcoal py-[clamp(34px,5vw,50px)]">
      <div className="mx-auto max-w-360 px-[clamp(24px,4.65vw,67px)]">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.58, ease: easing }}
            className="relative min-h-[190px] overflow-hidden rounded-[30px] bg-[#ff7918] px-10 py-[46px] max-sm:min-h-[230px] max-sm:px-7 max-sm:py-9"
          >
            <div className="relative z-10 max-w-[240px]">
              <h2 className="font-serif text-[30px] font-black uppercase leading-10 text-white max-sm:text-[27px]">
                Crazy Juicy
                <span className="block">Burger</span>
              </h2>
              <a
                href="#menu"
                className="mt-[26px] inline-flex h-[28px] min-w-[90px] items-center justify-center rounded-full bg-black px-[18px] font-[var(--font-nav)] text-[9px] font-extrabold uppercase text-white transition hover:bg-[#151515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Order Now
              </a>
            </div>

            <img
              src={burgerImage}
              alt="Crazy juicy burger"
              className="absolute bottom-[-5px] right-[22px] z-10 w-[205px] object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.24)] max-sm:right-4 max-sm:w-[150px]"
            />
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.58, delay: 0.08, ease: easing }}
            className="relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-[30px] bg-[#ff7918] px-10 py-[34px] text-center max-sm:px-7"
          >
            <div className="absolute -bottom-10 left-[-24px] size-[88px] rounded-full bg-[#f06110]/70" />
            <div className="absolute -right-[12px] -top-[16px] size-12.5 rounded-full bg-[#ff9a3d]/70" />

            <p className="font-[var(--font-nav)] text-[8px] font-extrabold uppercase tracking-[0.26em] text-white/80">
              Exclusive Offer
            </p>
            <h2 className="mt-[12px] font-serif text-[27px] font-black leading-none text-white max-sm:text-[23px]">
              Get 30% Discount Every Items
            </h2>
            <a
              href="#menu"
              className="mt-[24px] inline-flex h-[38px] min-w-[142px] items-center justify-center rounded-full bg-white px-[25px] font-[var(--font-nav)] text-[9px] font-extrabold uppercase text-[#ff7918] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              Get Voucher
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default OfferSection
