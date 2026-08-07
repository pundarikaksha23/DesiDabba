import { motion, useReducedMotion } from 'framer-motion'

const orbAnimation = {
  x: [0, 28, -14, 0],
  y: [0, -22, 18, 0],
  scale: [1, 1.08, 0.96, 1],
  opacity: [0.5, 0.7, 0.56, 0.5],
}

export function AmbientBackdrop() {
  const reduceMotion = useReducedMotion()

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_42%),linear-gradient(180deg,rgba(251,246,236,0.6),rgba(246,239,226,0.2)_45%,rgba(246,239,226,0.92))]" />
      <div className="animate-mesh-pan absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(92,26,43,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(92,26,43,0.12)_1px,transparent_1px)] [background-position:center_center] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      <motion.div
        className="absolute left-[-8rem] top-[6rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(206,154,58,0.2),rgba(206,154,58,0)_70%)] blur-3xl"
        animate={reduceMotion ? undefined : orbAnimation}
        transition={reduceMotion ? undefined : { duration: 18, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute right-[-6rem] top-[18rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(92,107,71,0.16),rgba(92,107,71,0)_72%)] blur-3xl"
        animate={reduceMotion ? undefined : { ...orbAnimation, x: [0, -34, 18, 0], y: [0, 16, -22, 0] }}
        transition={reduceMotion ? undefined : { duration: 22, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-[28%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(92,26,43,0.12),rgba(92,26,43,0)_72%)] blur-3xl"
        animate={reduceMotion ? undefined : { ...orbAnimation, x: [0, 18, -24, 0], y: [0, -14, 22, 0] }}
        transition={reduceMotion ? undefined : { duration: 20, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )
}
