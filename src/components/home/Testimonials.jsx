import { ChevronLeft, ChevronRight, Play, Quote, Star } from 'lucide-react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import testimonialBg from '../../assets/images/testimonails/testimonailsbg.png'
import testimonialIcon from '../../assets/images/icons/handbydish.png'
import { testimonials } from '../../data/testimonials'

function PlayVideoButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Play video"
      className="group absolute left-[clamp(40px,8vw,110px)] top-1/2 z-20 -translate-y-1/2 max-lg:hidden"
    >
      {/* Rotating text ring */}
      <svg
        viewBox="0 0 120 120"
        className="size-32 animate-[spin_8s_linear_infinite]"
        aria-hidden="true"
      >
        <defs>
          <path
            id="circle-path"
            d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
        </defs>
        <text
          fill="#ffffff"
          fontSize="10.5"
          fontWeight="500"
          letterSpacing="3.2"
          className="uppercase"
        >
          <textPath href="#circle-path">
            PLAY VIDEO • PLAY VIDEO •&nbsp;
          </textPath>
        </text>
      </svg>

      {/* Center play icon */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="grid size-12 place-items-center rounded-full border-2 border-white bg-transparent transition group-hover:bg-white">
          <Play
            size={18}
            fill="white"
            className="translate-x-0.5 transition group-hover:fill-[#ff7918]"
          />
        </span>
      </span>
    </button>
  )
}

function StarRating({ rating = 5 }) {
  return (
    <div className="mt-2.5 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          fill={star <= rating ? 'currentColor' : 'none'}
          strokeWidth={star <= rating ? 0 : 1.5}
          className={star <= rating ? 'text-[#ff9b18]' : 'text-[#ff9b18] opacity-40'}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ item }) {
  return (
    // ✅ rounded-2xl + orange border
    <article className="flex flex-col justify-center rounded-2xl border border-[#ff7918]/30 bg-white px-8 py-8 text-[#4f5663] shadow-[0_18px_45px_rgba(0,0,0,0.22)] max-md:px-6 max-md:py-6">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="size-15.5 shrink-0 rounded-full object-cover"
          />
          <div>
            <h3 className="font-[var(--font-nav)] text-[17px] leading-none text-[#1a1a1a]">
              {item.name}
            </h3>
            <p className="mt-1.5 font-[var(--font-nav)] text-[12px] leading-none text-[#7f8792]">
              {item.role}
            </p>
            <StarRating rating={item.rating} />
          </div>
        </div>

        <Quote
          className="mt-1 shrink-0 rotate-180 text-[#ff7918]"
          size={48}
          fill="currentColor"
          strokeWidth={0}
        />
      </div>

      <p className="mt-6 font-[var(--font-body)] text-[14px] leading-[1.65] text-[#596272]">
        {item.quote}
      </p>
    </article>
  )
}

function Testimonials() {
  const handlePlayVideo = () => {
    console.log('Play video clicked')
  }

  return (
    <section className="relative overflow-hidden bg-[#181818]">
      {/* Background image */}
      <img
        src={testimonialBg}
        alt="Chef preparing pizza"
        className="absolute inset-y-0 left-0 h-full w-[52%] object-cover object-center top-0 max-lg:w-full max-lg:opacity-40"
      />

      {/* Dark overlay on left side */}
      <div className="absolute inset-y-0 left-0 w-[52%] bg-linear-to-r from-[#181818]/20 to-[#181818]/60 max-lg:hidden" />

      {/* Play Video button */}
      <PlayVideoButton onClick={handlePlayVideo} />

      <div className="relative z-10 mx-auto grid h-full max-w-360 grid-cols-[44%_56%] items-center px-[clamp(24px,4.65vw,67px)] py-[clamp(48px,7vw,80px)] max-lg:grid-cols-1 max-lg:py-16">
        <div className="max-lg:hidden" />

        {/* Right: content */}
        <div>
          {/* Heading */}
          <div className="mb-8 text-center">
            <p className="flex items-center justify-center gap-1.5 font-(--font-nav) text-[13px] uppercase leading-none tracking-widest text-[#ff7918]">
              <img src={testimonialIcon} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
              Testimonials
              <img src={testimonialIcon} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
            </p>
            <h2 className="mt-3 font-(--font-body) text-[clamp(1.9rem,3.4vw,2.8rem)] leading-none text-white">
              What Our Clients Say
            </h2>
          </div>

          {/* Swiper */}
          <div className="relative mx-auto max-w-135">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.testimonial-prev',
                nextEl: '.testimonial-next',
              }}
              loop
              speed={600}
              spaceBetween={24}
              className="overflow-visible"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.name}>
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ✅ Nav buttons — card ke neeche right side pe */}
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="testimonial-prev grid size-10 place-items-center rounded-full border border-[#ff7918] bg-[#111111] text-[#ff7918] transition hover:bg-[#ff7918] hover:text-white"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="testimonial-next grid size-10 place-items-center rounded-full bg-[#ff7918] text-white transition hover:bg-[#ff8b28]"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials