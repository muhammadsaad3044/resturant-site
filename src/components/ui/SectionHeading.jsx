import clsx from 'clsx'

function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
  return (
    <div
      className={clsx(
        'mx-auto mb-12 max-w-3xl',
        align === 'center' && 'text-center',
        align === 'left' && 'mx-0 text-left',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-restaurant-orange">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-bold uppercase leading-[0.98] text-white md:text-6xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-8 text-restaurant-muted">{description}</p>}
    </div>
  )
}

export default SectionHeading
