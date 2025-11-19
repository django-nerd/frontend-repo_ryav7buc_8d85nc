import { Mic2, ShieldCheck, Zap, Waves } from "lucide-react";

function Features() {
  const items = [
    {
      icon: Mic2,
      title: "Cinematic Voiceover",
      desc: "Narrations so deep they rumble through Solana liquidity pools.",
    },
    {
      icon: ShieldCheck,
      title: "Fair Launch",
      desc: "Born on pump.fun — no presale, no VC, just vibes and voice.",
    },
    { icon: Zap, title: "Speed of Hype", desc: "Lightning-fast memetics. Instant resonance." },
    { icon: Waves, title: "Vocal Resonance", desc: "An audio identity that reverberates across the chain." },
  ];

  return (
    <section className="relative w-full py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-white/70 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
