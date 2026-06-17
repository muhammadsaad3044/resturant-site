import { motion } from 'framer-motion'
import galleryOne from '../../assets/images/gallery/food1.png'
import galleryTwo from '../../assets/images/gallery/food2.png'
import galleryThree from '../../assets/images/gallery/food3.png'

const galleryItems = [
  { image: galleryOne, alt: 'Pasta with meatballs and cherry tomatoes' },
  { image: galleryTwo, alt: 'Fresh pizza slices with cheese and basil' },
  { image: galleryThree, alt: 'Plated gourmet dish on a restaurant table' },
  { image: galleryOne, alt: 'Pasta with meatballs and cherry tomatoes' },
  { image: galleryTwo, alt: 'Fresh pizza slices with cheese and basil' },
  { image: galleryThree, alt: 'Plated gourmet dish on a restaurant table' },
]

function GalleryTrack({ items, hidden = false }) {
  return (
    <div className="gallery-marquee-track shrink-0" aria-hidden={hidden}>
      {items.map((item, index) => (
        <article
          key={`${item.alt}-${index}`}
          className="gallery-marquee-item relative shrink-0 overflow-hidden rounded-[6px] bg-[#1b1b1b] shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
        >
          <img src={item.image} alt={hidden ? '' : item.alt} className="w-full h-auto object-contain" />
        </article>
      ))}
    </div>
  )
}

function GallerySection() {
  return (
    <section className="overflow-hidden bg-[#111111] pt-[clamp(18px,2.5vw,24px)]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="gallery-marquee-wrap"
      >
        <GalleryTrack items={galleryItems} />
        <GalleryTrack items={galleryItems} hidden />
      </motion.div>
    </section>
  )
}

export default GallerySection
