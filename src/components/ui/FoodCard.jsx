import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

function FoodCard({ item, compact = false }) {
  return (
    <motion.article
      whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="group overflow-hidden rounded-card border border-white/10 bg-restaurant-surface p-4 shadow-cardDark"
    >
      <div className="relative overflow-hidden rounded-[22px] bg-restaurant-soft">
        <img
          src={item.image}
          alt={item.title}
          className={compact ? 'h-44 w-full object-cover transition duration-700 group-hover:scale-110' : 'h-56 w-full object-cover transition duration-700 group-hover:scale-110'}
        />
        {item.price && (
          <span className="absolute right-4 top-4 rounded-full bg-restaurant-orange px-4 py-2 text-sm font-extrabold text-white">
            {item.price}
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 px-1 pb-2 pt-5">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-restaurant-muted">{item.description}</p>
        </div>
        <button
          type="button"
          aria-label={`Order ${item.title}`}
          className="mt-1 grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-restaurant-orange transition group-hover:bg-restaurant-orange group-hover:text-white"
        >
          <ShoppingBag size={18} />
        </button>
      </div>
    </motion.article>
  )
}

export default FoodCard
