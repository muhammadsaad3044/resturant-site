import { motion } from 'framer-motion'
import clsx from 'clsx'

const variants = {
  primary:
    'orange-gradient text-white shadow-orangeGlow hover:shadow-[0_0_54px_rgba(255,122,26,0.42)]',
  secondary:
    'border border-white/15 bg-white/[0.03] text-white hover:border-restaurant-orange/70 hover:text-restaurant-orange',
  ghost: 'text-white hover:text-restaurant-orange',
}

function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="inline-flex">
      <Component
        className={clsx(
          'inline-flex min-h-12 items-center justify-center rounded-button px-7 text-sm font-bold uppercase tracking-[0.08em] transition duration-300',
          variants[variant],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}

export default Button
