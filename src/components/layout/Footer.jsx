import { Send } from 'lucide-react'
import logoImage from '../../assets/images/logo/logo.png'
import { navLinks } from '../../constants/navigation'
import { siteInfo } from '../../constants/site'
import codesincLogo from '../../assets/images/logo/codesinc-logo.png'

const menuItems = ['Burger King', 'Pizza King', 'Fresh Food', 'Vegetable', 'Desserts']

const socialLinks = [
  {
    href: '#',
    label: 'Facebook',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'Twitter',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'LinkedIn',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'YouTube',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
]

function FooterHeading({ children }) {
  return (
    <div className="mb-5">
      <h3 className="font-[var(--font-nav)] text-[17px] font-extrabold uppercase text-white">{children}</h3>
      <div className="mt-3 h-[2px] w-8 bg-[#ff7a18]" />
    </div>
  )
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 font-[var(--font-nav)] text-[18px] text-white/55 transition hover:text-[#ff7a18]"
    >
      <span className="text-[18px] font-bold leading-none text-white">&raquo;</span>
      {children}
    </a>
  )
}

function Footer() {
  return (
    <footer className="bg-[#010F1C]">
      <div className="mx-auto max-w-360 px-[clamp(24px,4.65vw,67px)]">
        <div className="grid gap-10 py-[clamp(48px,6vw,72px)] lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.2fr]">
          <div>
            <a href="#home" aria-label="Home">
              <img src={logoImage} alt={siteInfo.name} className="h-[48px] w-auto object-contain" />
            </a>

            <p className="mt-5 max-w-[260px] font-[var(--font-nav)] text-[13px] leading-[1.75] text-white/50">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis.
            </p>

            <div className="mt-6 flex gap-2.5">
              {socialLinks.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:border-[#ff7a18] hover:bg-[#ff7a18]"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>Our Menu</FooterHeading>
            <div className="grid gap-3">
              {menuItems.map((item) => (
                <FooterLink key={item} href="#menu">
                  {item}
                </FooterLink>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>Contact Us</FooterHeading>

            <div className="mb-5 grid gap-2">
              <p className="font-[var(--font-nav)] text-[13px] text-white/55">
                <span className="text-white/80">Monday - Friday:</span> 8am - 4pm
              </p>
              <p className="font-[var(--font-nav)] text-[13px] text-white/55">
                <span className="text-white/80">Saturday:</span> 8am - 12am
              </p>
            </div>

            <div className="flex overflow-hidden rounded-md border border-white/10 bg-white">
              <input
                className="min-w-0 flex-1 bg-transparent px-4 py-3 font-[var(--font-nav)] text-[13px] text-black/50 outline-none placeholder:text-gray-700"
                placeholder="Your email address"
                type="email"
              />
              <button
                type="button"
                className="m-1 grid size-9 place-items-center rounded-md bg-[#ff7a18] text-white transition hover:bg-[#ff8b28]"
              >
                <Send size={14} />
              </button>
            </div>

            <label className="mt-3 flex cursor-pointer items-center gap-2">
              <input type="checkbox" className="accent-[#ff7a18]" />
              <span className="font-[var(--font-nav)] text-[11px] text-white/45">
                I agree to the{' '}
                <a href="#" className="text-white/70 underline hover:text-[#ff7a18]">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-[#ff7a18]">
        <div className="mx-auto max-w-360 px-[clamp(24px,4.65vw,67px)]">
          <div className="flex flex-col items-center justify-between gap-3 py-4 md:flex-row">
            <p className="font-[var(--font-nav)] text-[12px] text-white/90">
              &copy; All Copyright 2024 by
            </p>

            <a
              href="https://www.codes-inc.com/"
              className="flex items-center gap-2">
              <img src={codesincLogo} alt="Codesinc Logo" />
            </a>

            <div className="flex gap-4">
              <a href="#" className="font-[var(--font-nav)] text-[12px] text-white/90 transition hover:text-white border border-white/30 px-3 py-2">
                Terms &amp; Condition
              </a>
              <a href="#" className="font-[var(--font-nav)] text-[12px] text-white/90 transition hover:text-white border border-white/30 px-3 py-2">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
