import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SectionTitle from './SectionTitle'

export default function Gallery({ images, nombre }) {
  const [active, setActive] = useState(0)
  const [modal, setModal] = useState(false)

  const mover = (direccion) => {
    setActive((prev) => (prev + direccion + images.length) % images.length)
  }

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Nuestros mejores momentos" title="Galería" accent="de goles" />

        <div className="relative mx-auto max-w-xl">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => mover(-1)}
            className="absolute -left-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-yellow-300/60 bg-blue-950/90 text-yellow-300 shadow-gold"
            aria-label="Foto anterior"
          >
            <ChevronLeft />
          </motion.button>

          <motion.button
            key={images[active]}
            initial={{ opacity: 0, scale: 0.94, rotateY: 8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setModal(true)}
            className="relative block aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-yellow-300/70 bg-blue-950 p-1 shadow-gold"
          >
            <img src={images[active]} alt={`Foto ${active + 1} de ${nombre}`} className="h-full w-full rounded-[1.7rem] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-black uppercase tracking-widest text-white backdrop-blur">
              Foto {active + 1} / {images.length}
            </div>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => mover(1)}
            className="absolute -right-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-yellow-300/60 bg-blue-950/90 text-yellow-300 shadow-gold"
            aria-label="Foto siguiente"
          >
            <ChevronRight />
          </motion.button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Ir a la foto ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${active === index ? 'w-7 bg-yellow-300 shadow-gold' : 'w-2.5 bg-white/30'}`}
            />
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-yellow-300/40 bg-blue-950/70 px-5 py-6 text-center backdrop-blur">
          <p className="text-lg font-black text-white">¡Ven a celebrar conmigo!</p>
          <p className="mt-1 font-serif text-2xl italic text-yellow-300">Habrá juegos, goles y muchas sorpresas.</p>
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(false)}
          >
            <motion.div
              initial={{ scale: 0.88, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-yellow-300/60 bg-blue-950 p-1 shadow-gold"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={images[active]} alt="Foto ampliada" className="max-h-[80vh] w-full rounded-[1.7rem] object-contain" />
              <button
                onClick={() => setModal(false)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur"
                aria-label="Cerrar galería"
              >
                <X />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
