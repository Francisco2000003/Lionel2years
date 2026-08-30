import { memo, useId } from 'react'
import { motion } from 'framer-motion'

/*
|--------------------------------------------------------------------------
| CONFETI
|--------------------------------------------------------------------------
|
| Desktop: 32 piezas.
| Celular: CSS oculta algunas automáticamente.
|
| No usamos Framer Motion para cada pieza.
| CSS se encarga de la animación -> mucho más ligero.
|
*/

const confeti = Array.from({ length: 32 }, (_, index) => ({
  id: index,

  left: `${(index * 37) % 100}%`,

  delay: `${-((index % 12) * 0.9)}s`,

  duration: `${8 + (index % 6)}s`,

  drift: `${-45 + ((index * 31) % 90)}px`,

  rotacion: `${(index * 59) % 360}deg`,

  tipo: index % 4,
}))

/*
|--------------------------------------------------------------------------
| ESTRELLAS
|--------------------------------------------------------------------------
*/

const estrellas = Array.from({ length: 14 }, (_, index) => ({
  id: index,

  left: `${5 + ((index * 41) % 90)}%`,

  top: `${8 + ((index * 33) % 82)}%`,

  delay: `${-((index % 7) * 0.7)}s`,

  duration: `${2.5 + (index % 4)}s`,

  size: `${2 + (index % 3)}px`,
}))

/*
|--------------------------------------------------------------------------
| BOKEH
|--------------------------------------------------------------------------
*/

const bokeh = Array.from({ length: 6 }, (_, index) => ({
  id: index,

  left: `${(index * 43) % 100}%`,

  top: `${18 + ((index * 31) % 65)}%`,

  delay: `${-(index * 1.1)}s`,

  duration: `${6 + index}s`,

  size: `${18 + (index % 3) * 12}px`,
}))

/*
|--------------------------------------------------------------------------
| BALÓN
|--------------------------------------------------------------------------
|
| Conservamos exactamente el estilo que ya te gustó:
|
| - esfera blanca;
| - paneles azul marino;
| - sin las rayas internas;
| - brillo;
| - sombra.
|
*/

const SoccerBall = memo(function SoccerBall({
  className = '',
}) {
  const id = useId().replace(/:/g, '')

  const fondoId = `balon-fondo-${id}`
  const brilloId = `balon-brillo-${id}`
  const clipId = `balon-clip-${id}`

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Volumen */}
        <radialGradient
          id={fondoId}
          cx="32%"
          cy="24%"
          r="82%"
        >
          <stop
            offset="0%"
            stopColor="#ffffff"
          />

          <stop
            offset="42%"
            stopColor="#f8fbff"
          />

          <stop
            offset="72%"
            stopColor="#e1edff"
          />

          <stop
            offset="100%"
            stopColor="#8aaee1"
          />
        </radialGradient>

        {/* Sombreado */}
        <linearGradient
          id={brilloId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="#ffffff"
            stopOpacity="0.42"
          />

          <stop
            offset="38%"
            stopColor="#ffffff"
            stopOpacity="0"
          />

          <stop
            offset="100%"
            stopColor="#0b2550"
            stopOpacity="0.2"
          />
        </linearGradient>

        <clipPath id={clipId}>
          <circle
            cx="60"
            cy="60"
            r="53"
          />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        {/* Base */}
        <circle
          cx="60"
          cy="60"
          r="53"
          fill={`url(#${fondoId})`}
        />

        {/* Panel central */}
        <polygon
          points="
            60,38
            76,50
            70,69
            50,69
            44,50
          "
          fill="#071a3a"
        />

        {/* Panel superior */}
        <polygon
          points="
            60,5
            72,9
            78,22
            68,32
            53,28
          "
          fill="#0a2248"
        />

        {/* Panel superior derecho */}
        <polygon
          points="
            98,27
            111,38
            108,52
            94,57
            84,46
          "
          fill="#0a2248"
        />

        {/* Panel inferior derecho */}
        <polygon
          points="
            99,81
            104,96
            92,108
            78,104
            73,90
          "
          fill="#0a2248"
        />

        {/* Panel inferior izquierdo */}
        <polygon
          points="
            21,81
            16,96
            28,108
            42,104
            47,90
          "
          fill="#0a2248"
        />

        {/* Panel superior izquierdo */}
        <polygon
          points="
            22,27
            9,38
            12,52
            26,57
            36,46
          "
          fill="#0a2248"
        />

        {/* Brillo */}
        <ellipse
          cx="38"
          cy="28"
          rx="20"
          ry="12"
          fill="#ffffff"
          opacity="0.16"
          transform="rotate(-30 38 28)"
        />

        {/* Sombra */}
        <circle
          cx="60"
          cy="60"
          r="53"
          fill={`url(#${brilloId})`}
        />
      </g>

      {/* Contorno */}
      <circle
        cx="60"
        cy="60"
        r="53"
        fill="none"
        stroke="#dbeafe"
        strokeWidth="2"
        opacity="0.85"
      />
    </svg>
  )
})

export default function AnimatedBackground() {
  return (
    <>
      {/*
      |--------------------------------------------------------------------------
      | CSS DEL CONFETI
      |--------------------------------------------------------------------------
      |
      | Lo dejamos AQUÍ.
      |
      | Así ya no importa si index.css tiene clases anteriores,
      | duplicadas o con nombres diferentes.
      |
      */}

      <style>
        {`
          .ll-confetti {
            position: absolute;
            top: -30px;

            display: block;

            width: 7px;
            height: 13px;

            border-radius: 2px;

            opacity: 0;

            pointer-events: none;

            will-change: transform, opacity;

            transform: translate3d(0, 0, 0);

            animation-name: ll-confetti-fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          /* DORADO */

          .ll-confetti-0 {
            background:
              linear-gradient(
                180deg,
                #fff7b2,
                #fde047 42%,
                #f59e0b
              );

            box-shadow:
              0 0 6px rgba(250, 204, 21, 0.55);
          }

          /* AZUL */

          .ll-confetti-1 {
            width: 5px;
            height: 11px;

            background:
              linear-gradient(
                180deg,
                #bfdbfe,
                #60a5fa 45%,
                #2563eb
              );

            box-shadow:
              0 0 5px rgba(59, 130, 246, 0.5);
          }

          /* ORO */

          .ll-confetti-2 {
            width: 8px;
            height: 12px;

            background:
              linear-gradient(
                180deg,
                #fde68a,
                #fbbf24 45%,
                #d97706
              );

            box-shadow:
              0 0 5px rgba(245, 158, 11, 0.45);
          }

          /* BLANCO */

          .ll-confetti-3 {
            width: 4px;
            height: 9px;

            background:
              linear-gradient(
                180deg,
                #ffffff,
                #dbeafe
              );

            box-shadow:
              0 0 5px rgba(255, 255, 255, 0.4);
          }

          @keyframes ll-confetti-fall {
            0% {
              transform:
                translate3d(
                  0,
                  -30px,
                  0
                )
                rotate(
                  var(--rotacion)
                );

              opacity: 0;
            }

            4% {
              opacity: 1;
            }

            20% {
              transform:
                translate3d(
                  var(--drift),
                  22vh,
                  0
                )
                rotate(150deg);

              opacity: 1;
            }

            40% {
              transform:
                translate3d(
                  0,
                  44vh,
                  0
                )
                rotate(310deg);

              opacity: 0.95;
            }

            60% {
              transform:
                translate3d(
                  var(--drift),
                  67vh,
                  0
                )
                rotate(470deg);

              opacity: 0.9;
            }

            80% {
              transform:
                translate3d(
                  0,
                  89vh,
                  0
                )
                rotate(620deg);

              opacity: 0.8;
            }

            100% {
              transform:
                translate3d(
                  var(--drift),
                  112vh,
                  0
                )
                rotate(780deg);

              opacity: 0;
            }
          }


          /*
          |--------------------------------------------------------------------------
          | MÓVIL
          |--------------------------------------------------------------------------
          */

          @media (max-width: 640px) {

            /*
             * Dejamos aproximadamente 21 piezas.
             * Se sigue viendo bastante confeti.
             */

            .ll-confetti:nth-child(3n) {
              display: none;
            }
          }


          /*
          |--------------------------------------------------------------------------
          | CELULARES PEQUEÑOS
          |--------------------------------------------------------------------------
          */

          @media (max-width: 380px) {

            .ll-confetti:nth-child(even) {
              display: none;
            }
          }


          /*
          |--------------------------------------------------------------------------
          | ACCESIBILIDAD
          |--------------------------------------------------------------------------
          */

          @media (prefers-reduced-motion: reduce) {

            .ll-confetti {
              animation: none !important;
              display: none;
            }
          }
        `}
      </style>

      {/*
      |--------------------------------------------------------------------------
      | FONDO
      |--------------------------------------------------------------------------
      |
      | z-0
      |
      | Este sí permanece DETRÁS del contenido.
      |
      */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
          fondo-gpu
        "
      >
        {/* Fondo azul */}
        <div
          className="
            absolute
            inset-0
            fondo-estadio-premium
          "
        />

        {/* Hexágonos */}
        <div
          className="
            absolute
            inset-0
            patron-hexagonal-premium
          "
        />

        {/* Curvas estadio */}
        <div className="stadium-ring stadium-ring-1" />

        <div className="stadium-ring stadium-ring-2" />

        <div className="stadium-ring stadium-ring-3" />

        {/* Reflectores */}

        <div
          className="
            reflector-premium
            reflector-premium-left
          "
        >
          <div className="focos-premium" />
        </div>

        <div
          className="
            reflector-premium
            reflector-premium-right
          "
        >
          <div className="focos-premium" />
        </div>

        {/* Haz izquierdo */}

        <motion.div
          className="
            haz-luz
            haz-luz-left
            capa-gpu
          "
          animate={{
            rotate: [-13, -8, -13],
            opacity: [0.18, 0.42, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Haz derecho */}

        <motion.div
          className="
            haz-luz
            haz-luz-right
            capa-gpu
          "
          animate={{
            rotate: [13, 8, 13],
            opacity: [0.18, 0.42, 0.18],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Glow central */}

        <motion.div
          className="
            ambient-glow
            absolute
            left-1/2
            top-[32%]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/10
            blur-[130px]
            capa-gpu
          "
          animate={{
            scale: [0.96, 1.07, 0.96],
            opacity: [0.2, 0.38, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Órbitas */}

        <div
          className="
            gold-orbit
            gold-orbit-left
          "
        />

        <div
          className="
            gold-orbit
            gold-orbit-right
          "
        />

        {/* Bokeh */}

        <div className="absolute inset-0 z-[1]">
          {bokeh.map((item) => (
            <span
              key={`bokeh-${item.id}`}
              className="bokeh-optimizado"
              style={{
                left: item.left,
                top: item.top,

                width: item.size,
                height: item.size,

                animationDelay:
                  item.delay,

                animationDuration:
                  item.duration,
              }}
            />
          ))}
        </div>

        {/* Estrellas */}

        <div className="absolute inset-0 z-[2]">
          {estrellas.map((item) => (
            <span
              key={`estrella-${item.id}`}
              className="estrella-optimizada"
              style={{
                left: item.left,
                top: item.top,

                width: item.size,
                height: item.size,

                animationDelay:
                  item.delay,

                animationDuration:
                  item.duration,
              }}
            />
          ))}
        </div>

        {/* =====================================================
            BALÓN IZQUIERDO
            ===================================================== */}

        <motion.div
          className="
            absolute
            left-[-38px]
            top-[24%]
            z-[4]
            w-[105px]
            capa-gpu
            sm:w-[115px]
          "
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            rotate: [0, 28, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="ball-motion-trail" />

          <SoccerBall
            className="
              relative
              z-10
              w-full
              opacity-[0.85]
              balon-sombra
            "
          />
        </motion.div>

        {/* =====================================================
            BALÓN DERECHO
            ===================================================== */}

        <motion.div
          className="
            absolute
            right-[-32px]
            top-[58%]
            z-[4]
            w-[82px]
            capa-gpu
            sm:w-[90px]
          "
          animate={{
            x: [0, -12, 0],
            y: [0, 12, 0],
            rotate: [0, -25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <SoccerBall
            className="
              w-full
              opacity-75
              balon-sombra
            "
          />
        </motion.div>

        {/* =====================================================
            BALÓN PEQUEÑO
            ===================================================== */}

        <motion.div
          className="
            absolute
            right-[9%]
            top-[36%]
            z-[4]
            hidden
            w-[44px]
            md:block
            capa-gpu
          "
          animate={{
            y: [0, -10, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <SoccerBall
            className="
              w-full
              opacity-45
            "
          />
        </motion.div>

        {/* Destellos */}

        <span
          className="
            star-flare
            star-flare-1
            destello-css
          "
        />

        <span
          className="
            star-flare
            star-flare-2
            destello-css
            destello-delay
          "
        />

        {/* Césped */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-[1]
            h-[34vh]
            field-grass
          "
        />

        {/* Línea cancha */}

        <div
          className="
            absolute
            bottom-[20vh]
            left-1/2
            z-[2]
            h-px
            w-[85vw]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
          "
        />

        {/* Luz dorada */}

        <div
          className="
            absolute
            bottom-[-120px]
            left-1/2
            z-[2]
            h-[300px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-yellow-400/10
            blur-[100px]
          "
        />

        {/* Viñeta */}

        <div
          className="
            absolute
            inset-0
            z-[5]
            vignette-premium
          "
        />
      </div>

      {/*
      |--------------------------------------------------------------------------
      | CONFETI
      |--------------------------------------------------------------------------
      |
      | ESTE ES EL CAMBIO IMPORTANTE.
      |
      | Ya NO está metido dentro del z-0.
      |
      | Ahora es:
      |
      | fixed
      | z-20
      |
      | mientras que tu contenido normalmente está z-10.
      |
      */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-20
          overflow-hidden
        "
      >
        {confeti.map((item) => (
          <span
            key={`confeti-${item.id}`}
            className={`
              ll-confetti
              ll-confetti-${item.tipo}
            `}
            style={{
              left: item.left,

              '--drift':
                item.drift,

              '--rotacion':
                item.rotacion,

              animationDelay:
                item.delay,

              animationDuration:
                item.duration,
            }}
          />
        ))}
      </div>
    </>
  )
}