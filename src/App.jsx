import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* soft grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '22px 22px' }} />

      <Navbar />
      <Hero />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App
