import { AtSign, Camera, Send, Share2 } from 'lucide-react'
import { navLinks } from '../../constants/navigation'
import { siteInfo } from '../../constants/site'

function Footer() {
  return (
    <footer className="bg-restaurant-black">
      <div className="container grid gap-10 py-16 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
        <div>
          <a href="#home" className="font-display text-3xl font-bold uppercase text-white">
            {siteInfo.name}
          </a>
          <p className="mt-5 max-w-sm leading-7 text-restaurant-muted">
            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis.
          </p>
          <div className="mt-6 flex gap-3">
            {[Share2, Camera, AtSign].map((Icon, index) => (
              <a key={index} href="#home" className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-restaurant-orange">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold uppercase text-white">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {navLinks.slice(1).map((link) => (
              <a key={link.href} href={link.href} className="text-restaurant-muted transition hover:text-restaurant-orange">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold uppercase text-white">Our Menu</h3>
          <div className="mt-5 grid gap-3 text-restaurant-muted">
            <span>Burger King</span>
            <span>Pizza King</span>
            <span>Fresh Food</span>
            <span>Vegetable</span>
            <span>Desserts</span>
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold uppercase text-white">Opening Hours</h3>
          <div className="mt-5 grid gap-3 text-restaurant-muted">
            <span>Monday - Friday: 8am - 4pm</span>
            <span>Saturday: 8am - 12am</span>
          </div>
          <form className="mt-6 flex rounded-full border border-white/10 bg-white/[0.04] p-2">
            <input className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none" placeholder="Your email address" />
            <button type="button" className="grid size-11 place-items-center rounded-full bg-restaurant-orange text-white">
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col gap-3 text-sm text-restaurant-muted md:flex-row md:items-center md:justify-between">
          <p>© All Copyright 2024 by {siteInfo.name}</p>
          <div className="flex gap-5">
            <a href="#home" className="hover:text-restaurant-orange">Terms & Condition</a>
            <a href="#home" className="hover:text-restaurant-orange">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
