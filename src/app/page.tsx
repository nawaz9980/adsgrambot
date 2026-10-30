"use client";

import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#11121d] text-white">
      {/* Header with matching exact UI & 3D chunky borders */}
      <Header
        balance={19.58}
        level={23}
        username="CriticalMead..."
        currentXp={66}
        maxXp={72}
        gems={7}
        streak={2}
        tickets={11}
      />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-[#2b2f48] border-b-[4px] border-b-[#141624] bg-[#202337]/70 p-8 sm:p-12 text-center shadow-xl">
          <h1 className="text-3xl font-black sm:text-5xl tracking-tight text-white">
            Welcome to <span className="text-[#8b5cf6]">zulti</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-medium">
            The header now includes the exact 3D beveled borders, the protruding golden level-23 badge, the green balance button, and all currency counters.
          </p>
        </div>
      </main>
    </div>
  );
}
