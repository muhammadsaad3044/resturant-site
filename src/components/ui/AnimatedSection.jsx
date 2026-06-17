import { motion } from 'framer-motion'

function AnimatedSection({ as = 'section', className = '', children, ...props }) {
  const Component = motion[as] || motion.section

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default AnimatedSection
