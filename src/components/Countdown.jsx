import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

function calcularTiempo(fecha) {
  const diferencia = new Date(fecha).getTime() - Date.now()
  if (diferencia <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }

  return {
    dias: Math.floor(diferencia / 86400000),
    horas: Math.floor((diferencia / 3600000) % 24),
    minutos: Math.floor((diferencia / 60000) % 60),
    segundos: Math.floor((diferencia / 1000) % 60),
  }
}

export default function Countdown({ fechaObjetivo }) {
  const [tiempo, setTiempo] = useState(() => calcularTiempo(fechaObjetivo))
  const items = useMemo(
    () => [
      ['Días', tiempo.dias],
      ['Horas', tiempo.horas],
      ['Min', tiempo.minutos],
      ['Seg', tiempo.segundos],
    ],
    [tiempo],
  )

  useEffect(() => {
    const timer = setInterval(() => setTiempo(calcularTiempo(fechaObjetivo)), 1000)
    return () => clearInterval(timer)
  }, [fechaObjetivo])

  return (
    <section id="cuenta-regresiva" className="scroll-mt-4 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionTitle eyebrow="Cada segundo cuenta" title="Cuenta regresiva" accent="para el gran día" />

        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {items.map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-2xl border border-yellow-300/70 bg-blue-950/75 px-2 py-5 text-center shadow-gold backdrop-blur sm:rounded-3xl sm:py-7"
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="text-gradient-gold text-3xl font-black tabular-nums sm:text-5xl">
                {String(value).padStart(2, '0')}
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-widest text-white sm:text-xs">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
