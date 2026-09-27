import { motion } from 'framer-motion'
import {
  CalendarDays,
  Clock3,
  MapPin,
  Shirt,
  Sparkles,
} from 'lucide-react'
import SectionTitle from './SectionTitle'

export default function EventDetails({ data }) {
  const detalles = [
    {
      icon: CalendarDays,
      label: 'Fecha',
      value: data.fechaTexto,
    },
    {
      icon: Clock3,
      label: 'Hora',
      value: data.horaTexto,
    },
    {
      icon: MapPin,
      label: 'Lugar',
      value: data.lugar,
      secondary: data.direccion,
    },
  ]

  return (
    <section className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Anota el dato"
          title="Información"
          accent="del partido"
        />

        {/* Fecha, hora y lugar */}
        <div className="space-y-4">
          {detalles.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  x: index % 2 ? 26 : -26,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  delay: index * 0.07,
                }}
                className="group flex items-center gap-4 rounded-3xl border border-yellow-300/45 bg-blue-950/75 p-4 shadow-[0_0_30px_rgba(245,158,11,.12)] backdrop-blur transition hover:border-yellow-300/80 hover:shadow-gold sm:p-5"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-yellow-300/50 bg-yellow-300/10 text-yellow-300 shadow-gold">
                  <Icon />
                </div>

                <div className="min-w-0 text-left">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
                    {item.label}
                  </p>

                  <p className="mt-1 font-bold text-white">
                    {item.value}
                  </p>

                  {item.secondary && (
                    <p className="mt-1 text-sm text-blue-100/75">
                      {item.secondary}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Código de vestimenta */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-yellow-300/60 bg-gradient-to-br from-blue-950/95 via-[#071b46]/95 to-blue-950/95 p-1 shadow-[0_0_45px_rgba(245,158,11,.16)]"
        >
          {/* Brillos decorativos */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.8rem] px-5 py-7 sm:px-8 sm:py-8">
            {/* Etiqueta superior */}
            <div className="mb-5 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2">
                <Sparkles
                  size={14}
                  className="text-yellow-300"
                />

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-300 sm:text-xs">
                  Código de vestimenta
                </span>

                <Sparkles
                  size={14}
                  className="text-yellow-300"
                />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              {/* Playera */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative mb-5"
              >
                <div className="absolute inset-0 rounded-3xl bg-yellow-300/20 blur-xl" />

                <div className="relative grid h-20 w-20 place-items-center rounded-3xl border border-yellow-300/60 bg-yellow-300/10 text-yellow-300 shadow-[0_0_25px_rgba(253,224,71,.18)] sm:h-24 sm:w-24">
                  <Shirt
                    size={44}
                    strokeWidth={1.7}
                  />
                </div>
              </motion.div>

              <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-200/70">
                Uniforme para el partido
              </p>

              <h3 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
                ¡Ponte la playera de tu
                <span className="block text-yellow-300">
                  equipo favorito!
                </span>
              </h3>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-blue-100/75 sm:text-base">
                {data.vestimentaTexto}
              </p>

              {/* Mini decoración */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-yellow-300/70" />

                <span className="text-lg">⚽</span>

                <span className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  {data.vestimenta}
                </span>

                <span className="text-lg">⚽</span>

                <span className="h-px w-10 bg-gradient-to-l from-transparent to-yellow-300/70" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}