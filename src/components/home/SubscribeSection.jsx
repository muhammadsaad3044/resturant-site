import { Send } from 'lucide-react'
import Button from '../ui/Button'

function SubscribeSection() {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="relative overflow-hidden rounded-card border border-white/10 bg-restaurant-orange p-8 md:p-12">
          <div className="absolute -right-20 -top-24 size-80 rounded-full bg-white/20 blur-3xl" />
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-white/80">Get 50% Offer</p>
              <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-none text-white md:text-7xl">
                Subscribe Now
              </h2>
            </div>
            <form className="flex flex-col gap-3 rounded-full bg-white p-2 sm:flex-row">
              <input
                type="email"
                placeholder="Email Address..."
                className="min-h-14 flex-1 rounded-full px-6 text-restaurant-black outline-none"
              />
              <Button className="min-h-14 text-nowrap">
                <Send className="mr-2" size={18} /> Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
