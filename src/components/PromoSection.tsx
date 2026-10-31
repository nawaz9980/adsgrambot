"use client";

import React, { useState, useEffect } from "react";

// Reusable 3D Faceted Diamond / Gem for Background
function FacetedGem({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
    >
      {/* Outer Outline */}
      <polygon
        points="30,15 70,15 92,42 50,88 8,42"
        fill="rgba(255, 255, 255, 0.05)"
        stroke="rgba(255, 255, 255, 0.18)"
        strokeWidth="1.5"
      />
      {/* Table (Flat Center/Top Facet) */}
      <polygon
        points="40,25 60,25 72,42 50,56 28,42"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="rgba(255, 255, 255, 0.22)"
        strokeWidth="1"
      />
      {/* Top Facets */}
      <polygon points="30,15 70,15 60,25 40,25" fill="rgba(255, 255, 255, 0.08)" />
      <polygon points="70,15 92,42 72,42 60,25" fill="rgba(255, 255, 255, 0.16)" />
      <polygon points="30,15 40,25 28,42 8,42" fill="rgba(255, 255, 255, 0.10)" />
      {/* Bottom Facets converging to tip */}
      <polygon points="8,42 28,42 50,56 50,88" fill="rgba(255, 255, 255, 0.06)" />
      <polygon points="92,42 72,42 50,56 50,88" fill="rgba(255, 255, 255, 0.14)" />
      {/* Internal crisp facet lines */}
      <line x1="50" y1="56" x2="50" y2="88" stroke="rgba(255, 255, 255, 0.22)" strokeWidth="1" />
      <line x1="28" y1="42" x2="8" y2="42" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" />
      <line x1="72" y1="42" x2="92" y2="42" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" />
    </svg>
  );
}

// 100% Vector Disabled Lucky Spin Wheel exactly matching reference screenshot
function DisabledSpinWheel({ className = "" }: { className?: string }) {
  const segments = [
    { num: "200", angle: 0, fill: "#28273d", stroke: "#454462", strokeWidth: 2.5 },
    { num: "150", angle: 36, fill: "#746f66", stroke: "#1c1f30", strokeWidth: 1.2 },
    { num: "100", angle: 72, fill: "#4a445d", stroke: "#1c1f30", strokeWidth: 1.2 },
    { num: "150", angle: 108, fill: "#514e68", stroke: "#1c1f30", strokeWidth: 1.2 },
    { num: "100", angle: 144, fill: "#475760", stroke: "#1c1f30", strokeWidth: 1.2 },
    { num: "150", angle: 180, fill: "#5a4252", stroke: "#1c1f30", strokeWidth: 1.2 },
    { num: "100", angle: 216, fill: "#445550", stroke: "#1c1f30", strokeWidth: 1.2 },
    { num: "150", angle: 252, fill: "#4a4460", stroke: "#1c1f30", strokeWidth: 1.2 },
    { num: "100", angle: 288, fill: "#676d78", stroke: "#1c1f30", strokeWidth: 1.2 },
    { num: "100", angle: 324, fill: "#4b4360", stroke: "#1c1f30", strokeWidth: 1.2 },
  ];

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]"
      >
        {/* Outer Dark Charcoal Rim */}
        <circle cx="100" cy="100" r="98" fill="#181a29" stroke="#25283c" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="90" fill="#141624" />

        {/* 10 Wheel Wedges */}
        {segments.map((seg, i) => (
          <g key={i} transform={`rotate(${seg.angle} 100 100)`}>
            <path
              d="M 72.19 14.40 A 90 90 0 0 1 127.81 14.40 L 115.61 51.97 A 50.5 50.5 0 0 0 84.39 51.97 Z"
              fill={seg.fill}
              stroke={seg.stroke}
              strokeWidth={seg.strokeWidth}
              strokeLinejoin="round"
            />
            <text
              x="100"
              y="33.5"
              textAnchor="middle"
              dominantBaseline="central"
              fill="#ffffff"
              fontWeight="900"
              fontSize="13.5"
              letterSpacing="-0.5px"
              filter="drop-shadow(0 1.5px 2px rgba(0,0,0,0.85))"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {seg.num}
            </text>
          </g>
        ))}

        {/* Top Winner Wedge Overlay Highlight (to ensure top wedge border layers crisp on top) */}
        <g transform="rotate(0 100 100)">
          <path
            d="M 72.19 14.40 A 90 90 0 0 1 127.81 14.40 L 115.61 51.97 A 50.5 50.5 0 0 0 84.39 51.97 Z"
            fill="#28273d"
            stroke="#454462"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <text
            x="100"
            y="33.5"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#ffffff"
            fontWeight="900"
            fontSize="13.5"
            letterSpacing="-0.5px"
            filter="drop-shadow(0 1.5px 2px rgba(0,0,0,0.85))"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            200
          </text>
        </g>

        {/* Center Hub */}
        <circle cx="100" cy="100" r="50.5" fill="#161825" stroke="#252839" strokeWidth="2.5" />

        {/* ZZ Logo in Center Hub */}
        <g transform="translate(100, 100) scale(1.15)" fill="#42395d">
          {/* Left Z */}
          <path d="M -18 -8 L -4 -8 L -13 5 L -2 5 L -4 9 L -20 9 L -11 -4 L -19 -4 Z" />
          {/* Right Z */}
          <path d="M 2 -8 L 16 -8 L 7 5 L 18 5 L 16 9 L 0 9 L 9 -4 L 1 -4 Z" />
        </g>

        {/* Top Pointer (Warm Khaki/Stone Slate Triangle pointing down into top wedge) */}
        <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.7))">
          <polygon
            points="89,4 111,4 100,24"
            fill="#6f6b63"
            stroke="#252839"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <polygon
            points="91,5 109,5 100,21"
            fill="#79746b"
            opacity="0.6"
          />
        </g>
      </svg>
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
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#111220] border border-[#2b274c] border-b-[4px] border-b-[#0c0d15] shadow-2xl p-6 sm:p-8 min-h-[275px] sm:min-h-[295px] lg:min-h-[315px] flex flex-col justify-between">
            {/* Background Purple Curves */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Bottom Left Purple Mound */}
              <div className="absolute -bottom-24 -left-12 w-64 h-64 rounded-full bg-[#6d28d9]/90" />
              <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-[#4c1d95]/70" />

              {/* Bottom Center Purple Mound */}
              <div className="absolute -bottom-10 left-[34%] sm:left-[36%] w-44 sm:w-52 h-28 rounded-t-full bg-[#581c87]" />

              {/* Bottom Right Purple Mound */}
              <div className="absolute -bottom-24 -right-12 w-68 h-68 rounded-full bg-[#6d28d9]/90" />
              <div className="absolute -bottom-32 -right-16 w-80 h-80 rounded-full bg-[#4c1d95]/70" />
            </div>

            {/* Card Content Layout */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 h-full my-auto">

              {/* Left Side: Mascot, Check & Ticket Plaque Composition */}
              <div className="relative flex items-end justify-center w-full sm:w-auto pt-14 sm:pt-16">
                <div className="relative flex items-end">
                  {/* Peeking Purple Mascot */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://zulti.com/images/home/lottery-mascot-057c16d6688f2a0ae1fd4e2e170e25f8.webp?vsn=d"
                    alt="Lottery mascot"
                    className="absolute -top-[62px] sm:-top-[74px] left-[52px] sm:left-[66px] h-[86px] sm:h-[100px] w-auto z-10 pointer-events-none drop-shadow-md"
                  />

                  {/* Lottery Check ($100,000) Held by Mascot */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://zulti.com/images/home/lottery-check-a80f52ff21935c24f2c238c12029f5d0.webp?vsn=d"
                    alt="Lottery check 100k"
                    className="absolute -top-[56px] sm:-top-[68px] left-[108px] sm:left-[130px] h-[58px] sm:h-[68px] w-auto z-10 pointer-events-none drop-shadow-lg"
                  />

                  {/* Ticket Plaque with Cutouts, Sunburst Badge & Text */}
                  <div className="relative z-20 w-[250px] sm:w-[290px] h-[88px] sm:h-[100px] drop-shadow-xl">
                    {/* Official SVG Ticket Background */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zulti.com/images/home/lottery-ticket-plaque-7472467792ff2317d00062cdea95570c.svg?vsn=d"
                      alt="Ticket background"
                      className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                    />

                    {/* Content inside the ticket plaque */}
                    <div className="relative z-10 flex items-center h-full px-3.5 sm:px-4 gap-2.5 sm:gap-3">
                      {/* Sunburst Logo Image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://zulti.com/images/draws/zultiball-logo-2-a88eff9527832164a5a8d0b3e22055bd.webp?vsn=d"
                        alt="Zultiball badge"
                        className="h-[54px] sm:h-[64px] w-auto object-contain shrink-0 drop-shadow-md"
                      />

                      {/* Zultiball / Every day text */}
                      <div className="flex flex-col justify-center">
                        <span className="text-[22px] sm:text-[25px] font-black text-white leading-none tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                          Zultiball
                        </span>
                        <span className="text-[13px] sm:text-[14px] font-semibold text-purple-100 leading-none mt-1">
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
                <span className="text-[24px] sm:text-[26px] font-black text-white tracking-tight my-1 leading-none">
                  7:58 PM
                </span>
                <span className="text-[11px] font-extrabold text-[#94a3b8] tracking-widest uppercase leading-none mb-3.5">
                  TODAY
                </span>

                {/* 3D Golden Enter Button */}
                <button
                  type="button"
                  className="w-full sm:w-auto min-w-[145px] px-8 py-3 rounded-xl bg-[#f59e0b] hover:bg-[#fbbf24] active:translate-y-[2px] active:border-b-[2px] border-b-[3.5px] border-b-[#b45309] shadow-md transition-all font-black text-[#151726] text-[16px] cursor-pointer mb-3"
                >
                  Enter now!
                </button>

                {/* Entry Counters */}
                <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                  {/* 44824 PEOPLE ENTERED */}
                  <div className="flex items-baseline gap-2 whitespace-nowrap">
                    <span className="text-[20px] sm:text-[23px] font-black text-[#facc15] tracking-tight leading-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                      44824
                    </span>
                    <span className="text-[14px] sm:text-[16px] md:text-[17px] font-black text-[#d4af37] tracking-[0.14em] uppercase leading-none">
                      PEOPLE ENTERED
                    </span>
                  </div>

                  {/* Your tickets ticket-icon 10 */}
                  <div className="flex items-center gap-2 text-[14px] sm:text-[15px] font-bold text-[#cbd5e1] leading-none">
                    <span>Your tickets</span>
                    {/* Tilted Ticket Icon */}
                    <svg
                      viewBox="0 0 20 14"
                      className="w-[14px] h-[10px] sm:w-[15px] sm:h-[11px] -rotate-45 text-white block shrink-0"
                      fill="currentColor"
                    >
                      <path d="M19.5 4.5H19C18.337 4.5 17.7013 4.76358 17.2324 5.23242C16.7636 5.70126 16.5 6.33696 16.5 7L16.5127 7.24707C16.5695 7.81937 16.8222 8.35735 17.2324 8.76758C17.7013 9.23642 18.337 9.5 19 9.5H19.5V12.25C19.5 12.9416 18.9416 13.5 18.25 13.5H14V10.75C14 10.6837 13.9736 10.6201 13.9268 10.5732C13.8799 10.5264 13.8163 10.5 13.75 10.5C13.6837 10.5 13.6201 10.5264 13.5732 10.5732C13.5264 10.6201 13.5 10.6837 13.5 10.75V13.5L1.75 13.5C1.05836 13.5 0.5 12.9416 0.5 12.25V9.5H1C1.66304 9.5 2.29874 9.23642 2.76758 8.76758C3.17781 8.35735 3.43048 7.81937 3.4873 7.24707L3.5 7C3.5 6.33696 3.23642 5.70126 2.76758 5.23242C2.29874 4.76358 1.66304 4.5 1 4.5H0.5V1.75C0.5 1.05836 1.05836 0.5 1.75 0.5L13.5 0.5V3.25L13.5049 3.29883C13.5145 3.34694 13.538 3.39156 13.5732 3.42676C13.6201 3.47364 13.6837 3.5 13.75 3.5C13.8163 3.5 13.8799 3.47364 13.9268 3.42676C13.962 3.39156 13.9855 3.34694 13.9951 3.29883L14 3.25V0.5L18.25 0.5C18.9416 0.5 19.5 1.05836 19.5 1.75V4.5ZM14 6.25C14 6.1837 13.9736 6.12013 13.9268 6.07324C13.8799 6.02636 13.8163 6 13.75 6C13.6837 6 13.6201 6.02636 13.5732 6.07324C13.5264 6.12013 13.5 6.1837 13.5 6.25V7.75L13.5049 7.79883C13.5145 7.84694 13.538 7.89156 13.5732 7.92676C13.6201 7.97364 13.6837 8 13.75 8C13.8163 8 13.8799 7.97364 13.9268 7.92676C13.962 7.89156 13.9855 7.84694 13.9951 7.79883L14 7.75V6.25Z" />
                    </svg>
                    <strong className="text-white font-black text-[15px] sm:text-[17px]">10</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ================= CARD 2: DAILY FREE SPIN WHEEL (DISABLED STATE) ================= */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#1c2035] border border-[#2b304c] border-b-[4px] border-b-[#121422] shadow-2xl p-6 sm:p-8 min-h-[275px] sm:min-h-[295px] lg:min-h-[315px] flex items-center justify-between">
            {/* Background Mounds & Faceted Floating Gems */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Top Center-Left Spotlight Circle */}
              <div className="absolute -top-12 left-[33%] w-44 h-44 rounded-full bg-[#3d4257]/35" />
              {/* Bottom Left Mound */}
              <div className="absolute -bottom-16 -left-12 w-48 h-48 rounded-full bg-[#272b43]/70" />
              {/* Top Left Mound */}
              <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-[#21253a]/60" />

              {/* 3D Faceted Diamond Gems */}
              <FacetedGem size={46} className="absolute top-3 left-[34%] -rotate-12 drop-shadow-md" />
              <FacetedGem size={28} className="absolute top-3 right-8 rotate-15 drop-shadow-sm opacity-75" />
              <FacetedGem size={88} className="absolute -bottom-8 left-[39%] -rotate-6 drop-shadow-xl opacity-90" />
              <FacetedGem size={34} className="absolute bottom-2 left-6 rotate-12 drop-shadow-md opacity-70" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-between h-full max-w-[220px] sm:max-w-[260px] py-1">
              <h2 className="text-[18px] sm:text-[21px] md:text-[22px] font-black text-white leading-snug mb-5">
                Don&apos;t miss out on your free daily gems!
              </h2>

              {/* Next Free Spin Box with Lavender Border & Glow */}
              <div className="rounded-[22px] border border-[#a855f7]/60 bg-[#131524] px-5 py-3.5 shadow-[0_0_20px_rgba(168,85,247,0.18)] max-w-[210px] sm:max-w-[230px]">
                <span className="text-[13px] sm:text-[14px] font-bold text-[#c4b5fd] block leading-tight">
                  Next free spin
                </span>
                <span className="text-[19px] sm:text-[22px] font-black text-white tracking-wide block mt-1.5 leading-none">
                  {formatTime(timeLeft.hours)}h {formatTime(timeLeft.minutes)}m {formatTime(timeLeft.seconds)}s
                </span>
              </div>
            </div>

            {/* Right Side: Exact Disabled Lucky Spinning Wheel */}
            <div className="relative z-10 flex items-center justify-center shrink-0 ml-3">
              <DisabledSpinWheel className="w-[195px] h-[195px] sm:w-[225px] sm:h-[225px] lg:w-[245px] lg:h-[245px]" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
