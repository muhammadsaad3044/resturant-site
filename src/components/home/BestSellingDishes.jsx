import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { bestSellingDishes } from '../../data/foodItems'

const easing = [0.22, 1, 0.36, 1]

function BestSellingCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: easing }}
      whileHover={{ y: -7 }}
      className="group flex flex-col items-center rounded-[20px] bg-[#111111] px-[16px] pb-[28px] pt-[20px] text-center border border-[#222] shadow-[0_24px_55px_rgba(0,0,0,0.24)]"
    >
      {/* ✅ Circle image — bigger, matches reference */}
      <div className="grid size-[172px] place-items-center overflow-hidden rounded-full bg-white/95 max-xl:size-[150px] max-lg:size-[140px]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full rounded-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-[20px] font-[var(--font-nav)] text-[13px] font-extrabold leading-[1.2] text-white">
        {item.title}
      </h3>
      <p className="mt-[8px] font-[var(--font-nav)] text-[11px] font-medium leading-[1.4] text-[#6B7280]">
        {item.description}
      </p>
      <p className="mt-[14px] font-[var(--font-nav)] text-[16px] font-extrabold leading-none text-[#ff7a18]">
        {item.price}
      </p>
    </motion.article>
  )
}

function BestSellingDishes() {
  return (
    <section className="bg-[#0f0f0f] py-[clamp(46px,5.4vw,72px)]">
      <div className="mx-auto max-w-360 px-[clamp(24px,4.65vw,67px)]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easing }}
          className="text-center"
        >
          <p className="font-[var(--font-nav)] text-[11px] font-extrabold uppercase leading-none tracking-[0.42em] text-[#ff7a18]">
            Our Favourites
          </p>
          <h2 className="mt-[12px] font-[var(--font-body)] text-[clamp(2.2rem,4.2vw,3.26rem)] font-bold leading-none tracking-0 text-white">
            Best Selling Dishes
          </h2>
        </motion.div>

        {/* ✅ 5 col grid — gap fluid */}
        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-1 gap-[clamp(12px,1.8vw,20px)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
          {bestSellingDishes.map((item, index) => (
            <BestSellingCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* ✅ All Products button */}
        <div className="mt-[clamp(32px,4vw,52px)] flex justify-center">
          <motion.a
            href="#menu"
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-[48px] min-w-[180px] items-center justify-center gap-[8px] rounded-full bg-[#ff7a18] px-[32px] font-[var(--font-nav)] text-[12px] font-extrabold uppercase leading-none text-white shadow-[0_16px_35px_rgba(255,122,24,0.22)] transition hover:bg-[#ff8b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            All Products
            <ArrowRight size={14} strokeWidth={3} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default BestSellingDishes