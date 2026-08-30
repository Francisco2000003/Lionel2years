import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className="mb-7 text-center"
    >
      {eyebrow && <p className="mb-2 text-xs font-black uppercase tracking-[0.35em] text-yellow-300">{eyebrow}</p>}
      <h2 className="text-3xl font-black uppercase leading-none text-white sm:text-4xl">
        {title} <span className="text-gradient-gold">{accent}</span>
      </h2>
    </motion.div>
  )
}
