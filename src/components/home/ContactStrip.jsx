import { Mail, MapPin, PhoneCall } from 'lucide-react'
import { siteInfo } from '../../constants/site'

const contactItems = [
  { icon: MapPin, label: 'address', value: siteInfo.address },
  { icon: Mail, label: 'send email', value: siteInfo.email },
  { icon: PhoneCall, label: 'call emergency', value: siteInfo.phone },
]

function ContactStrip() {
  return (
    <section id="contact" className="border-y border-white/10 bg-white/[0.03]">
      <div className="container grid gap-6 py-8 md:grid-cols-3">
        {contactItems.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-full bg-restaurant-orange text-white">
              <Icon size={24} />
            </span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-restaurant-orange">{label}</p>
              <p className="mt-1 font-semibold text-white">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactStrip
