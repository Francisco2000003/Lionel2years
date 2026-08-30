export default function Footer({ nombre }) {
  return (
    <footer className="border-t border-white/10 bg-black/20 px-4 py-7 text-center text-xs text-blue-100/50 backdrop-blur">
      <p>Hecho con ⚽, ⭐ y mucho cariño para {nombre}.</p>
    </footer>
  )
}
