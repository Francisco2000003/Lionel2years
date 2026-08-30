import { motion } from 'framer-motion'
import { ChevronDown, Crown, Radio, Trophy } from 'lucide-react'
import PhotoFrame from './PhotoFrame'

export default function Hero({ data }) {
  return (
    <section className="relative flex min-h-[100svh] items-center px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 140, damping: 12 }}
          className="mx-auto mb-5 grid h-24 w-24 place-items-center rounded-[2rem] border border-yellow-300/80 bg-blue-950/80 shadow-gold"
        >
          <Crown className="absolute -mt-20 h-8 w-8 fill-yellow-300 text-yellow-300" />
          <span className="text-5xl">⚽</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="mb-1 text-xl font-black uppercase tracking-[0.18em] text-white"
        >
          ¡Estás
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="text-gradient-gold text-5xl font-black uppercase leading-[0.85] drop-shadow-[0_5px_18px_rgba(245,158,11,.35)] sm:text-7xl"
        >
          Invitado
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.42 }}
          className="mx-auto mt-6 max-w-md rounded-2xl border border-blue-400/40 bg-blue-900/75 px-4 py-3 shadow-blue backdrop-blur"
        >
          <p className="text-sm font-black uppercase tracking-wider text-white sm:text-base">
            Al cumpleaños #{data.edad} de <span className="text-yellow-300">{data.nombre}</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.58 }}
          className="mx-auto mt-4 max-w-md text-sm font-semibold leading-relaxed text-blue-50/85 sm:text-base"
        >
          Prepárate para una fiesta llena de goles, juegos, sonrisas y muchísima diversión.
        </motion.p>

        <div className="relative mx-auto mt-8 max-w-md">
          <PhotoFrame src={data.fotoPrincipal} alt={`Foto principal de ${data.nombre}`} className="aspect-[4/5]" />

          <motion.div
            animate={{ rotate: [0, 6, -4, 0], scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 3.8 }}
            className="absolute -right-3 -top-4 z-30 rounded-full border-2 border-yellow-200 bg-blue-950 px-5 py-4 shadow-gold"
          >
            <div className="text-gradient-gold text-4xl font-black leading-none">{data.edad}</div>
            <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white">añitos</div>
          </motion.div>

          <motion.div
            animate={{ x: [-10, 10, -10], y: [0, -12, 0], rotate: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 4.2 }}
            className="absolute -left-5 top-1/3 text-5xl drop-shadow-[0_0_20px_rgba(245,158,11,.7)]"
          >
            ⚽
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-7 max-w-md rounded-3xl border border-yellow-300/60 bg-blue-950/75 px-5 py-5 shadow-gold backdrop-blur"
        >
          <Trophy className="mx-auto mb-2 h-6 w-6 text-yellow-300" />
          <p className="font-black text-white">Una celebración inolvidable</p>
          <p className="mt-1 font-serif text-xl italic text-yellow-300">para nuestro pequeño campeón</p>
        </motion.div>

        <div className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-yellow-300/40 bg-black/20 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-yellow-200 backdrop-blur">
          <Radio className="h-4 w-4 animate-pulse" /> contador en vivo
        </div>

        <motion.a
          href="#cuenta-regresiva"
          aria-label="Bajar a la cuenta regresiva"
          className="mx-auto mt-7 grid h-12 w-12 place-items-center rounded-full border border-yellow-300/30 bg-blue-950/60 text-yellow-300"
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown />
        </motion.a>
      </div>
    </section>
  )
}
