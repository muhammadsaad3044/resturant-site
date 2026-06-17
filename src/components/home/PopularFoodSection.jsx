import { popularFoods } from '../../data/foodItems'

function PopularFoodCard({ item }) {
  return (
    <article className="group flex min-h-[280px] flex-col justify-center items-center rounded-[10px] bg-[#1d1d1d] px-[18px] py-8 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#222]">
      <img
        src={item.image}
        alt={item.title}
        className="size-[120px] rounded-full object-cover drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)] transition duration-500 group-hover:scale-110"
      />
      <h3 className="mt-[22px] max-w-[160px] font-[var(--font-nav)] text-[16px] font-bold leading-[1.2] text-white">
        {item.title}
      </h3>
      <p className="mt-[10px] max-w-[160px] font-[var(--font-body)] text-[12px] leading-[1.55] text-white/40">
        {item.description}
      </p>
    </article>
  )
}

function PopularFoodSection() {
  return (
    <section id="menu" className="bg-[#111111] py-[clamp(46px,5.4vw,80px)]">
      <div className="mx-auto max-w-360 px-[clamp(24px,4.65vw,67px)]">
        
        {/* Heading */}
        <div className="mx-auto mb-[clamp(32px,4vw,52px)] max-w-[620px] text-center">
          <p className="mb-[8px] font-[var(--font-nav)] text-[11px] font-extrabold uppercase leading-none tracking-[0.34em] text-[#ff7a18]">
            Popular Food
          </p>
          <h2 className="font-[var(--font-body)] text-[clamp(28px,3.8vw,42px)] font-extrabold leading-[1.05] tracking-0 text-white">
            Our Signature Favorites
          </h2>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-[clamp(14px,2vw,24px)] sm:grid-cols-2 lg:grid-cols-4">
          {popularFoods.map((item) => (
            <PopularFoodCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularFoodSection