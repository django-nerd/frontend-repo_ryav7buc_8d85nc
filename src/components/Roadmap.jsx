function Step({ q, title, points }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white">
      <p className="text-xs uppercase tracking-widest text-white/60">{q}</p>
      <h3 className="text-xl font-bold mt-1">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc list-inside">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

function Roadmap() {
  return (
    <section id="roadmap" className="relative w-full py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Roadmap</h2>
          <p className="mt-2 text-white/70 max-w-2xl">From whisper to worldwide roar — the voice unfolds in chapters.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Step q="Chapter I" title="The Voice Emerges" points={["Fair launch", "Community ignition", "First narration drops"]} />
          <Step q="Chapter II" title="Echo Across Chains" points={["DEX listings", "CEX outreach", "Audio collabs & memes"]} />
          <Step q="Chapter III" title="Legendary Lore" points={["Narrator AI bot", "Animated shorts", "IRL voice events"]} />
        </div>
      </div>
    </section>
  )
}

export default Roadmap
