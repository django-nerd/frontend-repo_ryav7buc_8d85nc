import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full flex items-center justify-center overflow-hidden">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15),_transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_60%)] blur-2xl" />
        <div className="absolute -right-20 top-20 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.16),_transparent_60%)] blur-2xl" />
      </div>

      {/* Spline scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl leading-tight font-extrabold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(59,130,246,0.25)]"
          >
            The Narrator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-lg sm:text-xl text-white/80 max-w-xl"
          >
            A meme coin with a voice so deep, it moves markets. The omniscient voiceover guiding your portfolio through highs, lows, and legendary lore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg hover:bg-slate-100 transition">
              Buy $NARR
            </a>
            <a href="#litepaper" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur-md hover:bg-white/10 transition">
              Litepaper
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-white/70 text-sm"
          >
            "In a world of whispers, one voice echoes across the chain." — The Narrator
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full aspect-square rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-amber-400/10 pointer-events-none" />
            <div className="absolute inset-0" aria-hidden>
              {/* Decorative concentric rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full border border-white/20" />
                <div className="absolute h-96 w-96 rounded-full border border-white/10" />
                <div className="absolute h-[30rem] w-[30rem] rounded-full border border-white/5" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-white/70 text-sm">Narrated by</p>
                <p className="text-white text-2xl font-bold">The Deepest Voice</p>
                <p className="mt-2 text-white/70 text-xs">Feel the bass. Hear the conviction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
