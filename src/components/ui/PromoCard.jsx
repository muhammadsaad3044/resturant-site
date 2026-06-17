import { motion } from 'framer-motion'

function PromoCard({ promo }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group relative min-h-72 overflow-hidden rounded-card border border-white/10 bg-restaurant-surface p-7"
    >
      <img
        src={promo.image}
        alt={promo.title}
        className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/28 to-black/30" />
      <div className="relative z-10 flex h-full flex-col items-start justify-end">
        <p className="rounded-full py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-restaurant-orange">
          {promo.label}
        </p>
        <div>
          <h3 className="max-w-64 font-display text-4xl font-medium uppercase leading-none text-white">
            {promo.title}
          </h3>
          <button className="mt-4 text-xs font-extrabold uppercase tracking-[0.10em] text-restaurant-white px-3 py-1.5 rounded-4xl transition duration-300 bg-restaurant-orange cursor-pointer hover:bg-restaurant-orange/90">
            Order Now
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default PromoCard
