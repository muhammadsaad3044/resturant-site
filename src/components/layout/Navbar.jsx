import { AnimatePresence, motion } from 'framer-motion'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logoImage from '../../assets/images/logo/logo.png'
import { navLinks } from '../../constants/navigation'

const easing = [0.22, 1, 0.36, 1]

const menuVariants = {
  hidden: { opacity: 0, x: -34, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45,
      ease: easing,
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    x: -28,
    filter: 'blur(10px)',
    transition: { duration: 0.28, ease: easing },
  },
}

const menuItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easing } },
}

function LogoMark({ compact = false }) {
  return (
    <a
      href="#home"
      aria-label="Logo Home"
      className="group flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A1A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0A0A]"
    >
      <motion.img
        src={logoImage}
        alt="Restaurant logo"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1, y: [0, -1.8, 0] }}
        transition={{
          opacity: { duration: 0.45, delay: 0.22, ease: easing },
          scale: { duration: 0.45, delay: 0.22, ease: easing },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
        // ✅ FIX: lg pe slightly smaller logo
        className={compact ? 'h-[40px] w-auto object-contain' : 'h-11 w-auto object-contain md:h-[46px] lg:h-[42px] xl:h-[52px]'}
      />
    </a>
  )
}

function LeftIconPill({ onMenuClick, isOpen }) {
  return (
    <motion.div
      whileHover={{ scale: 1.035, boxShadow: '0 0 28px rgba(255, 122, 26, 0.22)' }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      // ✅ FIX: lg pe slightly compact pill height + padding
      className="flex h-[44px] items-center overflow-hidden rounded-full border border-white/15 bg-white/[0.045] px-[16px] text-white shadow-[inset_0_0_18px_rgba(255,255,255,0.04),0_10px_35px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:h-[40px] lg:px-[14px] xl:h-[49px] xl:px-[20px]"
    >
      <motion.a
        whileHover={{ y: -1, color: '#FF7A1A' }}
        whileTap={{ scale: 0.92 }}
        href="#menu"
        aria-label="View cart"
        className="grid size-7 place-items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A1A]"
      >
        <ShoppingCart fill="currentColor" strokeWidth={2.35} size={18} />
      </motion.a>

      <span className="mx-[12px] h-[24px] w-px bg-white/20 lg:mx-[10px] xl:mx-[15px]" aria-hidden="true" />

      <motion.button
        whileHover={{ y: -1, color: '#FF7A1A' }}
        whileTap={{ scale: 0.92 }}
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={onMenuClick}
        className="grid size-7 place-items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A1A]"
      >
        {isOpen ? <X size={20} strokeWidth={2.7} /> : <Menu size={20} strokeWidth={2.7} />}
      </motion.button>
    </motion.div>
  )
}

function NavLink({ link, mobile = false, onClick }) {
  return (
    <motion.a
      variants={mobile ? menuItemVariants : undefined}
      href={link.href}
      onClick={onClick}
      className={
        mobile
          ? 'group relative flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 font-[var(--font-nav)] text-[clamp(1.05rem,5vw,1.35rem)] font-semibold uppercase tracking-0 text-white transition duration-300 hover:border-[#FF7A1A]/60 hover:bg-[#FF7A1A]/12 hover:text-[#FF7A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A1A]'
          // ✅ FIX: lg pe smaller font, xl pe normal
          : 'group relative py-2 font-[var(--font-nav)] text-[14px] font-medium tracking-0 text-white/95 transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A1A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0A0A] xl:text-[17px]'
      }
    >
      <span>{link.label}</span>
      {mobile && (
        <span
          className="size-2.5 rounded-full border border-current opacity-50 transition group-hover:scale-125 group-hover:bg-current group-hover:opacity-100"
          aria-hidden="true"
        />
      )}
      <span className="absolute -bottom-[2px] left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#FF7A1A] transition-transform duration-300 group-hover:scale-x-100" />
    </motion.a>
  )
}

function BookSeatButton({ mobile = false }) {
  return (
    <motion.a
      href="#contact"
      whileHover={{
        scale: 1.05,
        y: -1,
        boxShadow: '0 16px 44px rgba(255, 122, 26, 0.42)',
      }}
      whileTap={{ scale: 0.98 }}
      className={
        mobile
          ? 'inline-flex h-12.5 items-center justify-center rounded-full bg-[#FF7A1A] px-10 font-[var(--font-nav)] text-[13px] font-extrabold uppercase tracking-[0.03em] text-black transition hover:bg-[#FF8C2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
          // ✅ FIX: lg pe smaller btn, xl pe full size
          : 'inline-flex h-[40px] w-auto items-center justify-center rounded-full bg-[#FF7A1A] px-6 font-[var(--font-nav)] text-[13px] font-extrabold uppercase tracking-0 text-black transition hover:bg-[#FF8C2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0A0A] xl:h-[48px] xl:w-[188px] xl:px-0 xl:text-[17px]'
      }
    >
      Book Seat
    </motion.a>
  )
}

function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 bg-black/65 backdrop-blur-md lg:hidden"
        >
          <motion.aside
            variants={menuVariants}
            className="flex h-full w-[min(86vw,360px)] flex-col overflow-hidden border-r border-white/10 bg-[#0A0A0A]/96 px-5 pb-6 pt-24 shadow-[22px_0_70px_rgba(0,0,0,0.5)]"
          >
            <motion.div variants={menuItemVariants} className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-[var(--font-nav)] text-[13px] font-bold uppercase tracking-[0.18em] text-[#FF7A1A]">
                Menu
              </span>
              <span className="h-px flex-1 bg-white/10 ml-4" aria-hidden="true" />
            </motion.div>

            <motion.div className="scrollbar-hidden flex flex-1 flex-col gap-3 overflow-y-auto pr-1" role="menu" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NavLink key={link.href} link={link} mobile onClick={onClose} />
              ))}
              <motion.div variants={menuItemVariants} className="pt-4">
                <BookSeatButton mobile />
              </motion.div>
            </motion.div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  // ✅ scroll state
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: easing }}
        className={`fixed inset-x-0 top-0 z-50 font-[var(--font-nav)] transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/70 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="
            mx-auto grid items-center
            h-[80px] px-5
            grid-cols-[auto_1fr_auto]
            gap-4

            lg:h-[80px]
            lg:max-w-[1400px]
            lg:grid-cols-[auto_auto_1fr_auto]
            lg:gap-5
            lg:px-10

            xl:h-[100px]
            xl:max-w-360
            xl:gap-6
            xl:px-[67px]
          "
        >
          {/* ✅ Col 1: Pill (cart + hamburger) */}
          <div className="relative z-50 flex items-center justify-start">
            <LeftIconPill onMenuClick={() => setIsOpen((v) => !v)} isOpen={isOpen} />
          </div>

          {/* ✅ Col 2: Logo */}
          <div className="relative z-50 flex justify-center lg:justify-start">
            <LogoMark />
          </div>

          {/* ✅ Col 3: Nav links — hidden on mobile, centered on desktop */}
          <div className="hidden items-center justify-center gap-6 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.href} link={link} />
            ))}
          </div>

          {/* ✅ Col 4: Book Seat button */}
          <div className="relative z-50 hidden justify-end lg:flex">
            <BookSeatButton />
          </div>
        </nav>
      </motion.header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default Navbar
