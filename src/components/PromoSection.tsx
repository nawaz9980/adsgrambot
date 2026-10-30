"use client";

import React, { useState, useEffect } from "react";

// Reusable 3D Game Dollar Coin
function DollarCoin({ size = 62, rotate = 0 }: { size?: number; rotate?: number }) {
  return (
    <div
      className="filter drop-shadow-[0_6px_14px_rgba(34,197,94,0.45)] select-none pointer-events-none"
      style={{ transform: `rotate(${rotate}deg)`, width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        {/* 3D Dark Rim / Thickness */}
        <circle cx="32" cy="35" r="27" fill="#14532d" />
        <circle cx="32" cy="34" r="27" fill="#15803d" />
        <circle cx="32" cy="33" r="27" fill="#16a34a" />

        {/* Front Coin Face */}
        <circle cx="32" cy="30" r="27" fill="#22c55e" stroke="#86efac" strokeWidth="2.5" />
        <circle cx="32" cy="30" r="23" fill="#16a34a" opacity="0.3" />

        {/* Dollar Symbol */}
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fill="#14532d"
          fontSize="31"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          $
        </text>
      </svg>
    </div>
  );
}

// Golden Sunburst Zulti Badge on the Ticket
function SunburstBadge() {
  return (
    <div className="relative flex items-center justify-center shrink-0 w-[50px] h-[50px] sm:w-[58px] sm:h-[58px]">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
        {/* 16-Ray Sunburst Star */}
        <g transform="translate(50,50)">
          {/* Shadowed rays */}
          <path
            d="M 0 -48 L 10 -36 L 27 -40 L 26 -24 L 40 -20 L 30 -8 L 46 2 L 31 12 L 40 26 L 22 28 L 22 44 L 8 36 L 0 48 L -8 36 L -22 44 L -22 28 L -40 26 L -31 12 L -46 2 L -30 -8 L -40 -20 L -26 -24 L -27 -40 L -10 -36 Z"
            fill="#ca8a04"
            transform="translate(0, 2)"
          />
          {/* Main golden rays */}
          <path
            d="M 0 -48 L 10 -36 L 27 -40 L 26 -24 L 40 -20 L 30 -8 L 46 2 L 31 12 L 40 26 L 22 28 L 22 44 L 8 36 L 0 48 L -8 36 L -22 44 L -22 28 L -40 26 L -31 12 L -46 2 L -30 -8 L -40 -20 L -26 -24 L -27 -40 L -10 -36 Z"
            fill="#facc15"
          />

          {/* Inner Golden Ring */}
          <circle cx="0" cy="0" r="28" fill="#eab308" />
          <circle cx="0" cy="0" r="26" fill="#a855f7" stroke="#fbbf24" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="22" fill="#581c87" />
        </g>
      </svg>

      {/* Center ZZ White Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://zulti.com/images/zulti-logo-b251bf00f76a64ceb7a4f8588fd1098c.svg?vsn=d"
          alt="ZZ Logo"
          className="h-[15px] sm:h-[18px] w-auto brightness-0 invert"
        />
      </div>
    </div>
  );
}

export default function PromoSection() {
  // Live countdown timer for the free spin card
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 22, seconds: 34 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => String(val).padStart(2, "0");

  return (
    <section className="w-full px-2.5 sm:px-6 mt-3 sm:mt-5 select-none">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-5">

          {/* ================= CARD 1: ZULTIBALL LOTTERY DRAW ================= */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#111220] border border-[#2b274c] border-b-[4px] border-b-[#0c0d15] shadow-2xl p-4 sm:p-6 min-h-[220px] flex flex-col justify-between">
            {/* Background Purple Curves & Floating 3D Dollar Coins */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Bottom Left Purple Mound */}
              <div className="absolute -bottom-20 -left-12 w-56 h-56 rounded-full bg-[#6d28d9]/90" />
              <div className="absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-[#4c1d95]/70" />

              {/* Bottom Center Purple Mound */}
              <div className="absolute -bottom-10 left-[34%] sm:left-[36%] w-36 sm:w-44 h-24 rounded-t-full bg-[#581c87]" />

              {/* Bottom Right Purple Mound */}
              <div className="absolute -bottom-20 -right-12 w-60 h-60 rounded-full bg-[#6d28d9]/90" />
              <div className="absolute -bottom-28 -right-16 w-72 h-72 rounded-full bg-[#4c1d95]/70" />

              {/* Left 3D Dollar Coin */}
              <div className="absolute bottom-2 left-3 sm:left-5 z-20">
                <DollarCoin size={58} rotate={-10} />
              </div>

              {/* Middle 3D Dollar Coin */}
              <div className="absolute -bottom-2.5 left-[42%] sm:left-[43%] z-20">
                <DollarCoin size={42} rotate={10} />
              </div>

              {/* Right 3D Dollar Coin */}
              <div className="absolute bottom-2 right-3 sm:right-5 z-20">
                <DollarCoin size={60} rotate={15} />
              </div>
            </div>

            {/* Card Content Layout */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-4 h-full">

              {/* Left Side: Mascot, Check & Ticket Plaque Composition */}
              <div className="relative flex items-end justify-center w-full sm:w-auto pt-10 sm:pt-12">
                <div className="relative flex items-end">
                  {/* Peeking Purple Mascot */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://zulti.com/images/home/lottery-mascot-057c16d6688f2a0ae1fd4e2e170e25f8.webp?vsn=d"
                    alt="Lottery mascot"
                    className="absolute -top-[52px] sm:-top-[62px] left-[52px] sm:left-[64px] h-[78px] sm:h-[92px] w-auto z-10 pointer-events-none drop-shadow-md"
                  />

                  {/* Lottery Check ($100,000) Held by Mascot */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://zulti.com/images/home/lottery-check-a80f52ff21935c24f2c238c12029f5d0.webp?vsn=d"
                    alt="Lottery check 100k"
                    className="absolute -top-[48px] sm:-top-[58px] left-[102px] sm:left-[122px] h-[52px] sm:h-[62px] w-auto z-10 pointer-events-none drop-shadow-lg"
                  />

                  {/* Ticket Plaque with Cutouts, Sunburst Badge & Text */}
                  <div className="relative z-20 w-[240px] sm:w-[275px] h-[82px] sm:h-[94px] drop-shadow-xl">
                    {/* Official SVG Ticket Background */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zulti.com/images/home/lottery-ticket-plaque-7472467792ff2317d00062cdea95570c.svg?vsn=d"
                      alt="Ticket background"
                      className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                    />

                    {/* Content inside the ticket plaque */}
                    <div className="relative z-10 flex items-center h-full px-3.5 sm:px-4 gap-2.5 sm:gap-3">
                      {/* Golden Sunburst Badge with ZZ Logo */}
                      <SunburstBadge />

                      {/* Zultiball / Every day text */}
                      <div className="flex flex-col justify-center">
                        <span className="text-[21px] sm:text-[24px] font-black text-white leading-none tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                          Zultiball
                        </span>
                        <span className="text-[12px] sm:text-[14px] font-semibold text-purple-100 leading-none mt-1">
                          Every day
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Closes At, 3D Enter Button, Entry Counters */}
              <div className="flex flex-col items-center justify-center text-center w-full sm:w-auto">
                <span className="text-[11px] font-extrabold text-[#94a3b8] tracking-widest uppercase leading-none">
                  CLOSES AT
                </span>
                <span className="text-[22px] sm:text-[24px] font-black text-white tracking-tight my-0.5 leading-none">
                  7:58 PM
                </span>
                <span className="text-[11px] font-extrabold text-[#94a3b8] tracking-widest uppercase leading-none mb-3">
                  TOMORROW
                </span>

                {/* 3D Golden Enter Button */}
                <button
                  type="button"
                  className="w-full sm:w-auto min-w-[136px] px-7 py-2.5 rounded-xl bg-[#f59e0b] hover:bg-[#fbbf24] active:translate-y-[2px] active:border-b-[2px] border-b-[3.5px] border-b-[#b45309] shadow-md transition-all font-black text-[#151726] text-[15px] sm:text-[16px] cursor-pointer mb-2.5"
                >
                  Enter now!
                </button>

                {/* Entry Counters */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="font-black text-[#fbbf24] text-[15px]">17771</span>
                    <span className="font-extrabold text-zinc-200 tracking-wider text-[11px]">PEOPLE ENTERED</span>
                  </div>
                  <div className="text-[12px] font-medium text-zinc-300 flex items-center gap-1.5">
                    Your tickets{" "}
                    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] text-white" fill="currentColor">
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>{" "}
                    <strong className="text-white font-extrabold">8</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ================= CARD 2: DAILY FREE SPIN WHEEL ================= */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#1c2035] border border-[#2b304c] border-b-[4px] border-b-[#121422] shadow-2xl p-4 sm:p-6 min-h-[220px] flex items-center justify-between">
            {/* Background Subtle Floating Diamonds */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-4 left-1/4 w-7 h-7 rotate-45 border border-white/40 bg-white/10" />
              <div className="absolute bottom-5 left-8 w-10 h-10 rotate-45 border border-white/30 bg-white/5" />
              <div className="absolute top-8 right-12 w-6 h-6 rotate-45 border border-white/40 bg-white/10" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-between h-full max-w-[210px] sm:max-w-[240px]">
              <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-black text-white leading-tight mb-4">
                Don&apos;t miss out on your free daily gems!
              </h2>

              {/* Next Free Spin Box */}
              <div className="rounded-2xl border border-[#3b4166] bg-[#141728]/90 px-4 py-2.5 shadow-inner">
                <span className="text-[12px] font-semibold text-zinc-400 block leading-tight">
                  Next free spin
                </span>
                <span className="text-[15px] sm:text-[17px] font-black text-white tracking-wide block mt-0.5 leading-none">
                  {formatTime(timeLeft.hours)}h {formatTime(timeLeft.minutes)}m {formatTime(timeLeft.seconds)}s
                </span>
              </div>
            </div>

            {/* Right Side: Lucky Spinning Wheel */}
            <div className="relative z-10 flex items-center justify-center shrink-0 ml-3">
              <div className="relative w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] flex items-center justify-center">
                {/* Pointer at the Top */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://zulti.com/images/spin-wheel/pointer-f8ce54161c3b60484f115f9f8f924416.webp?vsn=d"
                  alt="Wheel pointer"
                  className="absolute -top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 w-[20px] sm:w-[24px] h-auto z-30 pointer-events-none drop-shadow-lg"
                />

                {/* Base Wheel */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://zulti.com/images/spin-wheel/wheel-af8e01d19d3fffd4201c1fd2882c6ca5.webp?vsn=d"
                  alt="Spin wheel"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
                />

                {/* Highlighted Winner Segment */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://zulti.com/images/spin-wheel/winner-segment-1a64bf06cd96427264a46af97eabfebd.webp?vsn=d"
                  alt="Winner segment"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                />

                {/* Center Hub */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://zulti.com/images/spin-wheel/hub-5f3252ef5bbf3d9e8a381d23beba4c15.webp?vsn=d"
                  alt="Wheel hub"
                  className="absolute inset-0 m-auto w-[42%] h-[42%] object-contain z-20 pointer-events-none drop-shadow-md"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
