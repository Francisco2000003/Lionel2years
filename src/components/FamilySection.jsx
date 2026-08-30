import { motion } from 'framer-motion'
import { CheckCircle2, ChevronRight, MapPinned, MessageCircleMore } from 'lucide-react'
import PhotoFrame from './PhotoFrame'

function ActionCard({ href, icon: Icon, title, subtitle, variant = 'blue' }) {
  const clase =
    variant === 'green'
      ? 'from-green-600 to-emerald-800 border-green-300/35'
      : variant === 'light'
        ? 'from-white to-blue-50 border-white text-blue-950'
        : 'from-blue-600 to-blue-900 border-blue-300/45'

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.015, y: -3 }}
      whileTap={{ scale: 0.985 }}
      className={`flex items-center gap-4 rounded-3xl border bg-gradient-to-br p-4 shadow-xl ${clase}`}
    >
      <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${variant === 'light' ? 'bg-blue-950/5 text-blue-800' : 'bg-white/10 text-yellow-300'}`}>
        <Icon />
      </div>
      <div className="min-w-0 flex-1 text-left">
        <p className={`font-black ${variant === 'light' ? 'text-blue-950' : 'text-white'}`}>{title}</p>
        <p className={`text-sm ${variant === 'light' ? 'text-blue-950/60' : 'text-white/70'}`}>{subtitle}</p>
      </div>
      <ChevronRight className={variant === 'light' ? 'text-blue-700' : 'text-yellow-300'} />
    </motion.a>
  )
}

export default function FamilySection({ data }) {
  return (
    <section className="px-4 pb-24 pt-14 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-black uppercase tracking-[0.32em] text-yellow-300">El mejor equipo</p>
            <h2 className="mt-2 text-4xl font-black leading-[0.92] text-white sm:text-5xl">
              es la <span className="text-gradient-gold">familia</span>
            </h2>
            <p className="mt-4 max-w-md text-blue-50/80">Y juntos haremos de este día una celebración inolvidable.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true }}
            className="mx-auto w-52"
          >
            <PhotoFrame src={data.fotoEspecial} alt="Foto especial" className="aspect-[4/5]" tilt />
          </motion.div>
        </div>

        <div className="mt-10 space-y-4">
          <ActionCard
            href={data.whatsappUrl}
            icon={CheckCircle2}
            title="Confirmar asistencia"
            subtitle="¡No faltes a mi fiesta!"
          />
          <ActionCard href={data.mapaUrl} icon={MapPinned} title="Ver ubicación" subtitle="¿Cómo llegar?" variant="light" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-5 overflow-hidden rounded-[2rem] border border-yellow-300/55 bg-blue-950 shadow-gold"
        >
          <div className="map-pattern relative h-64">
            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2.6 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative grid h-20 w-20 place-items-center rounded-full border-4 border-yellow-300 bg-blue-900 text-4xl shadow-gold">⚽</div>
              <div className="mx-auto h-10 w-1 bg-gradient-to-b from-yellow-300 to-transparent" />
            </motion.div>
          </div>
          <div className="border-t border-yellow-300/30 bg-blue-950/95 p-5">
            <p className="font-black text-white">{data.lugar}</p>
            <p className="mt-1 text-sm text-yellow-200/80">{data.direccion}</p>
          </div>
        </motion.div>

        <div className="mt-5">
          <ActionCard href={data.whatsappUrl} icon={MessageCircleMore} title="¿Dudas? Escríbenos" subtitle="Estamos para ayudarte" variant="green" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-lg rounded-[2rem] border border-yellow-300/55 bg-blue-950/85 px-5 py-6 text-center shadow-gold"
        >
          <div className="mb-2 text-3xl">⭐ ⚽ ⭐</div>
          <p className="font-serif text-3xl font-bold italic text-yellow-300">¡Que comience la fiesta!</p>
        </motion.div>
      </div>
    </section>
  )
}
