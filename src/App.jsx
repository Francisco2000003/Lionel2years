import AnimatedBackground from './components/AnimatedBackground'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import FamilySection from './components/FamilySection'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import { invitacion } from './data/invitacion'

export default function App() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#020918] text-white">
      {/* Fondo real de toda la invitación */}
      <AnimatedBackground />

      {/* Todo el contenido vive arriba del fondo */}
      <div className="relative z-10">
        <Hero data={invitacion} />

        <Countdown fechaObjetivo={invitacion.fechaObjetivo} />

        <EventDetails data={invitacion} />

        <Gallery
          images={invitacion.galeria}
          nombre={invitacion.nombre}
        />

        <FamilySection data={invitacion} />

        <Footer nombre={invitacion.nombre} />
      </div>
    </main>
  )
}