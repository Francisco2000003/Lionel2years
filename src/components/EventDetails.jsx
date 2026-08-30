import { motion } from 'framer-motion'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import SectionTitle from './SectionTitle'

export default function EventDetails({ data }) {
  const detalles = [
    { icon: CalendarDays, label: 'Fecha', value: data.fechaTexto },
    { icon: Clock3, label: 'Hora', value: data.horaTexto },
    { icon: MapPin, label: 'Lugar', value: data.lugar, secondary: data.direccion },
  ]

  return (
    <section className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionTitle eyebrow="Anota el dato" title="Información" accent="del partido" />
        <div className="space-y-4">
          {detalles.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: index % 2 ? 26 : -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.07 }}
                className="group flex items-center gap-4 rounded-3xl border border-yellow-300/45 bg-blue-950/75 p-4 shadow-[0_0_30px_rgba(245,158,11,.12)] backdrop-blur transition hover:border-yellow-300/80 hover:shadow-gold sm:p-5"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-yellow-300/50 bg-yellow-300/10 text-yellow-300 shadow-gold">
                  <Icon />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">{item.label}</p>
                  <p className="mt-1 font-bold text-white">{item.value}</p>
                  {item.secondary && <p className="mt-1 text-sm text-blue-100/75">{item.secondary}</p>}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
