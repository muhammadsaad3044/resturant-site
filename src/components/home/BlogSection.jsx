import { ArrowRight, MessageCircle, UserRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { blogPosts } from '../../data/blogPosts'
import blogTwo from '../../assets/images/blog/blog2.png'

const easing = [0.22, 1, 0.36, 1]

function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: easing }}
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-[14px] bg-[#202020]"
    >
      <div className="relative">
        <img src={post.image} alt={post.title} className="h-50 w-full object-cover" />

        <div className="absolute left-3.25 top-3.25 flex h-11 w-7.75 flex-col items-center justify-center rounded-md bg-[#ff7a18] text-white">
          <span className="font-[var(--font-nav)] text-2.75 leading-none">15</span>
            <span className="mt-0.75 font-[var(--font-nav)] text-[7px] uppercase leading-none">Jan</span>
        </div>

        <span className="absolute bottom-2 right-2.5 inline-flex h-5.5 min-w-14.5 items-center justify-center rounded-full bg-[#ff7a18] px-2.75 font-[var(--font-nav)] text-[8px] uppercase text-white">
          Food
        </span>
      </div>

      <div className="px-4.5 pb-4.5 pt-3.5">
        <div className="flex items-center gap-3.5 text-[8px] font-medium text-white/35">
          <span className="inline-flex items-center gap-1">
            <UserRound size={10} className="text-[#ff7a18]" />
            By Admin
          </span>
          <span className="inline-flex items-center gap-1">
            <MessageCircle size={10} className="text-[#ff7a18]" />
            {post.comments}
          </span>
        </div>

        <h3 className="mt-2.75 max-w-57.5 font-[var(--font-body)] text-[21px] leading-[1.28] text-white">
          {post.title}
        </h3>

        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-1.25 font-[var(--font-nav)] text-[8px] uppercase tracking-[0.18em] text-[#ff7a18]"
        >
          Read More
          <ArrowRight size={10} />
        </a>
      </div>
    </motion.article>
  )
}

function SubscribeCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, delay: 0.12, ease: easing }}
      className="relative overflow-hidden rounded-[14px] bg-[#1f1f1f]"
    >
      <img src={blogTwo} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-[0.18]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.18),rgba(12,12,12,0.9))]" />

      <div className="relative z-10 flex h-full min-h-69.75 flex-col px-6 pb-6.5 pt-22">
        <p className="font-[var(--font-nav)] text-[8px] uppercase tracking-[0.22em] text-[#ff7a18]">
          Get 30% Offer
        </p>
        <h3 className="mt-2.5 font-[var(--font-body)] text-[20px] uppercase leading-[1.1] text-white">
          Subscribe Now
        </h3>

        <div className="mt-8.5 flex items-center rounded-full border border-white/12 bg-black/30 pl-4 pr-1.5 backdrop-blur-sm">
          <input
            type="email"
            placeholder="Email Address..."
            className="h-9.5 flex-1 bg-transparent font-[var(--font-body)] text-2.75 text-white placeholder:text-white/35 focus:outline-none"
          />
          <button
            type="button"
            aria-label="Subscribe"
            className="grid size-6.75 place-items-center rounded-full bg-[#ff7a18] text-white transition hover:bg-[#ff8b28]"
          >
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

function BlogSection() {
  return (
    <section className="bg-[#111111] py-[clamp(54px,7.5vw,80px)]">
      <div className="mx-auto max-w-360 px-[clamp(24px,4.65vw,67px)]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.55, ease: easing }}
          className="mb-10"
        >
          <p className="flex items-center gap-2.75 font-[var(--font-nav)] text-[10px] uppercase tracking-[0.28em] text-[#ff7a18]">
            Blog
            <span className="h-px w-8 bg-[#ff7a18]" />
          </p>
          <h2 className="mt-4.5 font-[var(--font-body)] text-[clamp(2.2rem,4.4vw,3.35rem)] leading-none text-white">
            News Feed
          </h2>
        </motion.div>

        <div className="grid gap-[clamp(14px,2vw,22px)] pb-3 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.image} post={post} index={index} />
          ))}
          <SubscribeCard />
        </div>
      </div>
    </section>
  )
}

export default BlogSection
