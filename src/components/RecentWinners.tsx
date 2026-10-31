"use client";

import React from "react";

export interface WinnerItem {
  drawNumber: number;
  level: number;
  username: string;
  prize: string;
  drawnOn: string;
  entries: string;
}

const DEFAULT_WINNERS: WinnerItem[] = [
  {
    drawNumber: 392,
    level: 7,
    username: "GorgeousXerinae...",
    prize: "$100.00",
    drawnOn: "28-10-2026",
    entries: "620941 entries",
  },
  {
    drawNumber: 391,
    level: 19,
    username: "StunningPhoenix...",
    prize: "$250.00",
    drawnOn: "27-10-2026",
    entries: "589210 entries",
  },
  {
    drawNumber: 390,
    level: 24,
    username: "CriticalMeadow...",
    prize: "$500.00",
    drawnOn: "26-10-2026",
    entries: "712430 entries",
  },
  {
    drawNumber: 389,
    level: 12,
    username: "VelvetShadow...",
    prize: "$100.00",
    drawnOn: "25-10-2026",
    entries: "643190 entries",
  },
  {
    drawNumber: 388,
    level: 31,
    username: "CryptoVanguard...",
    prize: "$1,000.00",
    drawnOn: "24-10-2026",
    entries: "840150 entries",
  },
  {
    drawNumber: 387,
    level: 15,
    username: "SilentTiger...",
    prize: "$100.00",
    drawnOn: "23-10-2026",
    entries: "591240 entries",
  },
];

// Single Ticket Winner Card
function WinnerTicketCard({ winner }: { winner: WinnerItem }) {
  return (
    <div className="relative w-[220px] sm:w-[230px] h-[335px] sm:h-[345px] shrink-0 select-none group transition-transform duration-300 hover:-translate-y-1">
      {/* SVG Scalloped Ticket Shape */}
      <svg
        viewBox="0 0 230 345"
        className="absolute inset-0 w-full h-full filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
      >
        <path
          d={`
            M 0 16
            A 16 16 0 0 1 16 0
            L 24 0 A 5 5 0 0 0 34 0
            L 48 0 A 5 5 0 0 0 58 0
            L 72 0 A 5 5 0 0 0 82 0
            L 96 0 A 5 5 0 0 0 106 0
            L 120 0 A 5 5 0 0 0 130 0
            L 144 0 A 5 5 0 0 0 154 0
            L 168 0 A 5 5 0 0 0 178 0
            L 192 0 A 5 5 0 0 0 202 0
            L 214 0
            A 16 16 0 0 1 230 16

            L 230 76
            A 12 12 0 0 0 230 100

            L 230 329
            A 16 16 0 0 1 214 345

            L 202 345 A 5 5 0 0 0 192 345
            L 178 345 A 5 5 0 0 0 168 345
            L 154 345 A 5 5 0 0 0 144 345
            L 130 345 A 5 5 0 0 0 120 345
            L 106 345 A 5 5 0 0 0 96 345
            L 82 345 A 5 5 0 0 0 72 345
            L 58 345 A 5 5 0 0 0 48 345
            L 34 345 A 5 5 0 0 0 24 345
            L 16 345
            A 16 16 0 0 1 0 329

            L 0 100
            A 12 12 0 0 0 0 76
            Z
          `}
          fill="#f4f3ff"
        />
      </svg>

      {/* Ticket Inner Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 pt-5 pb-5">
        {/* Top Header Section */}
        <div>
          <div className="flex items-center justify-between px-1 h-[28px]">
            {/* Left Watermark Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://zulti.com/images/zulti-logo-b251bf00f76a64ceb7a4f8588fd1098c.svg?vsn=d"
              alt="zulti"
              className="h-[18px] w-auto opacity-20 grayscale"
            />
            {/* Ticket Draw Number */}
            <span className="text-[13px] font-black text-[#1e1b4b] tracking-wider">
              No. {winner.drawNumber}
            </span>
            {/* Right Watermark Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://zulti.com/images/zulti-logo-b251bf00f76a64ceb7a4f8588fd1098c.svg?vsn=d"
              alt="zulti"
              className="h-[18px] w-auto opacity-20 grayscale"
            />
          </div>

          {/* Perforated Dashed Line with zz Glyphs */}
          <div className="flex items-center justify-between px-2 mt-5 text-[10px] font-black text-[#1e1b4b]/80 tracking-widest select-none">
            <span>zz</span>
            <span>zz</span>
            <span>zz</span>
            <span>zz</span>
            <span>zz</span>
            <span>zz</span>
            <span>zz</span>
            <span>zz</span>
            <span>zz</span>
            <span>zz</span>
            <span>zz</span>
            <span>zz</span>
          </div>
        </div>

        {/* Middle Content */}
        <div className="flex flex-col gap-3 px-1 mt-1">
          {/* Winner Profile */}
          <div className="flex items-center gap-2.5">
            {/* Hexagon Level Badge */}
            <div className="relative flex h-[32px] w-[28px] shrink-0 items-center justify-center filter drop-shadow-sm">
              <svg viewBox="0 0 64 72" className="absolute inset-0 h-full w-full">
                {/* Outer Hexagon with Thick Gold Border */}
                <polygon
                  points="32,5 56,17 56,49 32,63 8,49 8,17"
                  fill="#181a29"
                  stroke="#f59e0b"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="relative z-10 text-[13px] font-black text-[#fbbf24] tracking-tight pb-0.5">
                {winner.level}
              </span>
            </div>

            {/* Username */}
            <span className="text-[14px] font-black text-[#1e1b4b] truncate tracking-tight">
              {winner.username}
            </span>
          </div>

          {/* Prize Box */}
          <div className="flex items-center justify-center rounded-xl bg-[#202438] py-3.5 px-3 shadow-md">
            <span className="text-[26px] font-black text-white tracking-tight leading-none">
              {winner.prize}
            </span>
          </div>
        </div>

        {/* Bottom Details Section */}
        <div className="flex items-end justify-between px-1 text-xs">
          {/* Drawn On */}
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-[#8a92b2] leading-tight">
              Drawn on
            </span>
            <span className="text-[13px] font-black text-[#1e1b4b] mt-0.5 leading-none">
              {winner.drawnOn}
            </span>
          </div>

          {/* Participation */}
          <div className="flex flex-col items-end">
            <span className="text-[11px] font-semibold text-[#8a92b2] leading-tight">
              Participation
            </span>
            <span className="text-[13px] font-black text-[#1e1b4b] mt-0.5 leading-none">
              {winner.entries}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecentWinners({ winners = DEFAULT_WINNERS }: { winners?: WinnerItem[] }) {
  // Double list for seamless infinite loop
  const duplicatedWinners = [...winners, ...winners, ...winners];

  return (
    <section className="w-full px-2.5 sm:px-6 mt-8 sm:mt-12 select-none overflow-hidden">
      <div className="mx-auto max-w-7xl mb-4 sm:mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            Recent Winners
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/30">
              Live
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-0.5">
            Real players winning daily jackpots and cash rewards
          </p>
        </div>
      </div>

      {/* Auto-scrolling Ribbon Container */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#11121d] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#11121d] to-transparent z-20" />

        {/* Animated Marquee Strip */}
        <div className="flex gap-4 sm:gap-6 animate-winners-scroll w-max hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {duplicatedWinners.map((w, idx) => (
            <WinnerTicketCard key={`${w.drawNumber}-${idx}`} winner={w} />
          ))}
        </div>
      </div>

      {/* Global Style for Keyframes */}
      <style jsx>{`
        @keyframes winnersScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .animate-winners-scroll {
          animation: winnersScroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

