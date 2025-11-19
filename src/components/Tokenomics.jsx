function Stat({ label, value, note }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white">
      <p className="text-3xl font-extrabold">{value}</p>
      <p className="text-white/70 text-sm">{label}</p>
      {note && <p className="text-xs text-white/60 mt-2">{note}</p>}
    </div>
  )
}

function Tokenomics() {
  return (
    <section id="tokenomics" className="relative w-full py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Tokenomics</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Fair, simple, and Solana-ready. Built for story-driven growth and sustainable liquidity on pump.fun.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Stat label="Total Supply" value="1,000,000,000" note="$NARR" />
          <Stat label="Liquidity" value="100%" note="Pump.fun pool" />
          <Stat label="Community" value="Airdrops" note="Early voice believers" />
          <Stat label="Treasury" value="Creator" note="Narrations, collabs, promos" />
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
