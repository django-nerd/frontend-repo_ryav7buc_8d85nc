import { Menu, Twitter, MessageSquare, Coins } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 ring-2 ring-white/20 shadow-lg shadow-purple-500/20 flex items-center justify-center">
            <Coins className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-white text-lg font-extrabold tracking-wide leading-none">The Narrator</p>
            <p className="text-xs text-white/60 leading-none mt-0.5">Deep Voice. Deeper Liquidity.</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#tokenomics" className="text-white/80 hover:text-white text-sm px-4 py-2">Tokenomics</a>
          <a href="#roadmap" className="text-white/80 hover:text-white text-sm px-4 py-2">Roadmap</a>
          <a href="#community" className="text-white/80 hover:text-white text-sm px-4 py-2">Community</a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
            aria-label="Telegram"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Telegram</span>
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 text-sm text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
            <span className="hidden sm:inline">Twitter</span>
          </a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/15 bg-white/5 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
