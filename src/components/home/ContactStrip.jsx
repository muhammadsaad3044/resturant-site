import { Mail, MapPin, PhoneCall } from 'lucide-react'
import contactBgImage from '../../assets/images/vegitable.png' // apna image path yahan
import { siteInfo } from '../../constants/site'

const contactItems = [
  { icon: MapPin, label: 'Address', value: siteInfo.address },
  { icon: Mail, label: 'Send Email', value: siteInfo.email },
  { icon: PhoneCall, label: 'Call Emergency', value: siteInfo.phone },
]

function ContactStrip() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#010F1C] py-[clamp(46px,5.4vw,72px)]">
      {/* ✅ Decorative image — right side pe absolute */}
      <img
        src={contactBgImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-4 h-[calc(100%+24px)] max-w-40 object-contain object-right opacity-90 w-35 max-sm:hidden"
      />
      <div className="mx-auto max-w-360 px-[clamp(24px,4.65vw,67px)]">

        {/* ✅ Orange rounded card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#ff7a18] px-[clamp(24px,4vw,52px)] py-[clamp(24px,4vw,38px)]">

          {/* 3 col grid */}
          <div className="relative z-10 grid gap-6 md:grid-cols-3">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                {/* Icon circle — white/translucent */}
                <span className="grid size-11.5 shrink-0 place-items-center rounded-full bg-white/20 text-white">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <div>
                  <p className="font-[var(--font-nav)] text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">
                    {label}
                  </p>
                  <p className="mt-[4px] font-[var(--font-nav)] text-[15px] font-extrabold text-white">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactStrip