import { promoItems } from '../../data/foodItems'
import PromoCard from '../ui/PromoCard'

function PromoBanners() {
  return (
    <section id="events" className="bg-[#0A0A0A] py-[clamp(46px,5.4vw,56px)]">
      <div className="mx-auto max-w-360 px-[clamp(24px,4.65vw,67px)]">
        <div className="grid gap-[clamp(12px,1.8vw,24px)] sm:grid-cols-2 lg:grid-cols-3">
          {promoItems.map((promo) => (
            <PromoCard key={promo.title} promo={promo} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromoBanners