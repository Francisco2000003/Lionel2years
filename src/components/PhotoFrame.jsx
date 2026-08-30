import { motion } from 'framer-motion'

export default function PhotoFrame({ src, alt, className = '', tilt = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, rotate: tilt ? -1 : 0 }}
      className={`relative overflow-hidden rounded-[2rem] border border-yellow-300/70 bg-white/10 p-1 shadow-gold ${className}`}
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-yellow-200/30 via-transparent to-amber-500/20" />
      <img src={src} alt={alt} className="relative z-10 h-full w-full rounded-[1.7rem] object-cover" />
      <div className="pointer-events-none absolute inset-0 z-20 rounded-[2rem] ring-1 ring-inset ring-white/20" />
    </motion.div>
  )
}
