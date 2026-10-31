"use client";

import React from "react";

export interface DrawItem {
  drawNumber: number;
  prize: string;
  drawnOn: string;
  tickets: string;
  winningNumbers: number[];
}

const DEFAULT_DRAWS: DrawItem[] = [
  {
    drawNumber: 394,
    prize: "$100,000",
    drawnOn: "30/10/2026",
    tickets: "616,700 tickets",
    winningNumbers: [6, 8, 17, 20, 21, 35, 36, 43],
  },
  {
    drawNumber: 393,
    prize: "$100,000",
    drawnOn: "29/10/2026",
    tickets: "620,525 tickets",
    winningNumbers: [6, 11, 12, 21, 26, 37, 41, 47],
  },
  {
    drawNumber: 392,
    prize: "$100,000",
    drawnOn: "28/10/2026",
    tickets: "620,941 tickets",
    winningNumbers: [2, 13, 23, 28, 31, 40, 43, 46],
  },
];

export default function DrawHistory({ draws = DEFAULT_DRAWS }: { draws?: DrawItem[] }) {
  return (
    <section className="w-full px-2.5 sm:px-6 mt-10 sm:mt-14 mb-8 sm:mb-12 select-none">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white text-center tracking-tight mb-6 sm:mb-8">
          Draw History
        </h2>

        {/* List of Draw Cards */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          {draws.map((draw) => (
            <div
              key={draw.drawNumber}
              className="relative overflow-hidden rounded-2xl bg-[#1b1e33] border border-[#2b304c] border-b-[4px] border-b-[#121422] shadow-xl flex flex-col md:flex-row items-stretch transition-all duration-200 hover:border-[#3d446b]"
            >
              {/* ================= LEFT SECTION: Vibrant Purple Prize Box ================= */}
              <div className="bg-[#6d28d9] md:w-[220px] lg:w-[240px] shrink-0 p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-2.5">
                <span className="text-[26px] sm:text-[30px] font-black text-white leading-none tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
                  {draw.prize}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#151726]/85 border border-[#272a42] text-[12px] font-bold text-white shadow-inner">
                  Draw #{draw.drawNumber}
                </span>
              </div>

              {/* ================= MIDDLE SECTION: Date & Participation Info ================= */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col sm:flex-row md:flex-col justify-center gap-3.5 sm:gap-6 md:gap-3 bg-[#1b1e33]">
                {/* Drawn On */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#141624] text-[#8a92b2]">
                    <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold text-[#8a92b2] leading-tight">
                      Drawn on
                    </span>
                    <span className="text-[13px] sm:text-[14px] font-bold text-white leading-tight mt-0.5">
                      {draw.drawnOn}
                    </span>
                  </div>
                </div>

                {/* Participation */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#141624] text-[#8a92b2]">
                    <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold text-[#8a92b2] leading-tight">
                      Participation
                    </span>
                    <span className="text-[13px] sm:text-[14px] font-bold text-white leading-tight mt-0.5">
                      {draw.tickets}
                    </span>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT SECTION: Winning Numbers & Action Button ================= */}
              <div className="p-4 sm:p-5 md:p-6 bg-[#16192b] md:border-l border-t md:border-t-0 border-[#252a44] flex flex-col justify-center items-center gap-3.5 sm:gap-4 shrink-0">
                {/* 8 Winning Number Balls */}
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
                  {draw.winningNumbers.map((num, idx) => (
                    <div
                      key={idx}
                      className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#e2e8f0] border border-[#cbd5e1] shadow-md transition-transform hover:scale-105"
                    >
                      <span className="text-[12px] sm:text-[13px] font-black text-[#1e1b4b] leading-none">
                        {num}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Draw Details Button */}
                <button
                  type="button"
                  className="px-6 py-2 rounded-xl bg-[#1b1e33] hover:bg-[#232742] active:translate-y-[1px] border border-[#7c3aed] border-b-[3px] border-b-[#6d28d9] shadow-md transition-all text-xs sm:text-[13px] font-bold text-white cursor-pointer"
                >
                  View draw details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM "SEE ALL" BUTTON ================= */}
        <button
          type="button"
          className="w-full mt-4 sm:mt-5 py-3 rounded-xl bg-[#16192b] hover:bg-[#1d2138] active:translate-y-[1px] border border-[#4c1d95] border-b-[3px] border-b-[#7c3aed] shadow-lg transition-all text-center text-sm sm:text-base font-bold text-white cursor-pointer"
        >
          See all
        </button>
      </div>
    </section>
  );
}

