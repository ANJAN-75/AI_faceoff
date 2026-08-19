function Navbar() {
  return (
    <nav className="h-16 border-b border-zinc-800 bg-[#211f1e] px-6 md:px-12 flex items-center justify-between">
      <div className="text-xl font-bold text-white">
        Battle<span className="text-amber-400">AI</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
        <span className="hover:text-white cursor-pointer">
          Past Battles
        </span>

        <span className="hover:text-white cursor-pointer">
          Leaderboard
        </span>

        <span className="hover:text-white cursor-pointer">
          Models
        </span>
      </div>
    </nav>
  );
}

export default Navbar;