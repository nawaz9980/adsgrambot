"use client";

import React, { useState, useRef, useEffect } from "react";

export interface HeaderProps {
  balance?: number;
  level?: number;
  username?: string;
  currentXp?: number;
  maxXp?: number;
  gems?: number;
  streak?: number;
  tickets?: number;
  onBalanceClick?: () => void;
}

const NAV_ITEMS = [
  {
    label: "Account",
    bg: "transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, color: "#94a3b8" }}>
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    ),
  },
  {
    label: "My Winnings",
    bg: "#2d2561",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, color: "#a78bfa" }}>
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4v-2a2 2 0 0 0 0-4V6z" />
        <circle cx="12" cy="12" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    label: "Referral",
    bg: "#1e2235",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20, color: "#94a3b8" }}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    ),
  },
  {
    label: "Clans",
    bg: "#2d2561",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, color: "#a78bfa" }}>
        <path d="M12 2L6 6v6c0 4.4 2.5 8.5 6 10.3C15.5 20.5 18 16.4 18 12V6l-6-4z" />
      </svg>
    ),
  },
  {
    label: "My Rewards",
    bg: "#252535",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, color: "#94a3b8" }}>
        <path d="M20 7h-1.26A4 4 0 0 0 12 4.68 4 4 0 0 0 5.26 7H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM12 6a2 2 0 0 1 1.94 1H10.06A2 2 0 0 1 12 6zM4 11V9h7v2H4zm9 8H7v-7h6v7zm4-8h-2V9h2v2z" />
      </svg>
    ),
  },
  {
    label: "Withdraw",
    bg: "#1a3a38",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 20, height: 20, color: "#34d399" }}>
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <circle cx="12" cy="15" r="2" />
        <path d="M8 6V4a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
  {
    label: "Tutorial",
    bg: "transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, color: "#94a3b8" }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
  },
  {
    label: "Support",
    bg: "transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 20, height: 20, color: "#94a3b8" }}>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
];

export default function Header({
  balance = 19.58,
  level = 23,
  username = "CriticalMead...",
  currentXp = 66,
  maxXp = 72,
  gems = 7,
  streak = 2,
  tickets = 11,
  onBalanceClick,
}: HeaderProps) {
  const xpPercentage = Math.min(100, Math.max(0, (currentXp / maxXp) * 100));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <header className="w-full bg-[#12131e] px-3 py-6 sm:px-6 select-none">
      <div className="mx-auto max-w-7xl">
        {/* Main Floating Bar */}
        <div className="relative flex h-[66px] sm:h-[70px] items-center justify-between rounded-2xl bg-[#202436] border-b-[4px] border-b-[#141624] px-4 sm:px-6 shadow-2xl">

          {/* LEFT: Logo & Balance */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", zIndex: 10 }}>
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://zulti.com/images/zulti-logo-b251bf00f76a64ceb7a4f8588fd1098c.svg?vsn=d"
                alt="zulti logo"
                style={{ height: "32px", width: "auto", display: "block" }}
              />
            </div>
            <button
              onClick={onBalanceClick}
              type="button"
              className="flex items-center justify-center gap-1 h-[42px] px-4 rounded-xl bg-[#27493f] border-b-[4px] border-[#18332b] shadow-md transition-all hover:brightness-105 active:translate-y-[2px] active:border-b-[2px] cursor-pointer"
            >
              <span className="text-[22px] font-black text-[#2cd46f]" style={{ lineHeight: 1, display: "flex", alignItems: "center" }}>$</span>
              <span className="text-[17px] font-extrabold text-white tracking-tight" style={{ lineHeight: 1, display: "flex", alignItems: "center" }}>{balance.toFixed(2)}</span>
            </button>
          </div>

          {/* CENTER: Level Badge & XP */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center z-20">
            <div className="relative flex items-center">
              <div className="relative z-20 flex h-[78px] w-[68px] shrink-0 items-center justify-center -mr-3 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
                <svg viewBox="0 0 66 76" className="absolute inset-0 h-full w-full">
                  <polygon points="14,56 4,66 18,63" fill="#d97706" stroke="#b45309" strokeWidth="1.5" />
                  <polygon points="52,56 62,66 48,63" fill="#d97706" stroke="#b45309" strokeWidth="1.5" />
                  <polygon points="33,2 62,18 62,52 33,68 4,52 4,18" fill="#1b1d2c" stroke="#f59e0b" strokeWidth="4" strokeLinejoin="round" />
                  <polygon points="33,7 57,20 57,50 33,63 9,50 9,20" fill="#1e2133" stroke="#fbbf24" strokeWidth="1.5" strokeOpacity="0.8" strokeLinejoin="round" />
                  <path d="M12 48 L33 60 L54 48" fill="none" stroke="#b45309" strokeWidth="2.5" />
                </svg>
                <span className="relative z-10 text-xl font-black text-[#fbbf24] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-1">{level}</span>
              </div>
              <div className="relative flex flex-col justify-center rounded-r-xl bg-[#171928] border border-[#2b2f48] border-b-[3px] border-b-[#111320] pl-6 pr-4 py-2 shadow-inner min-w-[200px]">
                <div className="flex items-center justify-between gap-3 text-xs leading-none mb-1.5">
                  <span className="font-bold text-white tracking-wide truncate max-w-[110px]">{username}</span>
                  <span className="font-semibold text-zinc-400 text-[11px] whitespace-nowrap"><strong className="text-zinc-200">{currentXp}</strong> / {maxXp} XP</span>
                </div>
                <div className="h-[9px] w-48 sm:w-56 rounded-full bg-[#10121d] p-[1.5px] overflow-hidden border border-[#21253a]">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] transition-all duration-300" style={{ width: `${xpPercentage}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Currencies & Hamburger with Dropdown */}
          <div className="flex items-center gap-5 sm:gap-6 z-10">
            {/* Gem */}
            <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://zulti.com/images/landing/gem-1-ee5f2a668ec30e4530797ca75efb1ded.svg?vsn=d" alt="gems" style={{ height: "20px", width: "20px", display: "block" }} />
              <span style={{ fontSize: "15px", fontWeight: 700, color: "white", lineHeight: 1 }}>{gems}</span>
            </div>
            {/* Flame */}
            <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition">
              <svg viewBox="0 0 24 24" style={{ height: "20px", width: "20px", display: "block" }} fill="none">
                <path d="M12 2C11.5 4 10.5 5.5 9 7.5C7.5 9.5 7 11.5 7 13.5C7 17.09 9.24 20 12 20C14.76 20 17 17.09 17 13.5C17 10.5 15 7.5 13.5 5C13 4 12.5 3 12 2Z" fill="#f97316" />
                <path d="M12 9C11.7 10.5 10.8 11.8 10 13C9.2 14.2 9 15.2 9 16C9 17.66 10.34 19 12 19C13.66 19 15 17.66 15 16C15 14.2 13.8 12.5 13 11C12.5 10 12.2 9.5 12 9Z" fill="#fbbf24" />
              </svg>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "white", lineHeight: 1 }}>{streak}</span>
            </div>
            {/* Ticket */}
            <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition">
              <svg viewBox="0 0 24 24" style={{ height: "20px", width: "20px", display: "block", transform: "rotate(-15deg)" }} fill="none">
                <path d="M3 8.5C3 7.4 3.9 6.5 5 6.5H19C20.1 6.5 21 7.4 21 8.5V10C19.9 10 19 10.9 19 12C19 13.1 19.9 14 21 14V15.5C21 16.6 20.1 17.5 19 17.5H5C3.9 17.5 3 16.6 3 15.5V14C4.1 14 5 13.1 5 12C5 10.9 4.1 10 3 10V8.5Z" fill="#a855f7" />
                <line x1="8" y1="6.5" x2="8" y2="17.5" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "white", lineHeight: 1 }}>{tickets}</span>
            </div>

            {/* Hamburger + Dropdown — positioned relative so dropdown anchors to button */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              {/* Hamburger Button */}
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={dropdownOpen}
                style={{
                  width: "22px",
                  height: "20px",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <span style={{ display: "block", height: "2.5px", width: "100%", borderRadius: "2px", backgroundColor: dropdownOpen ? "#e2e8f0" : "#94a3b8", transition: "background-color 0.15s" }} />
                <span style={{ display: "block", height: "2.5px", width: "100%", borderRadius: "2px", backgroundColor: dropdownOpen ? "#e2e8f0" : "#94a3b8", transition: "background-color 0.15s" }} />
                <span style={{ display: "block", height: "2.5px", width: "100%", borderRadius: "2px", backgroundColor: dropdownOpen ? "#e2e8f0" : "#94a3b8", transition: "background-color 0.15s" }} />
              </button>

              {/* Dropdown Panel — slides down from hamburger, anchored top-right */}
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 14px)",
                  right: 0,
                  width: "260px",
                  backgroundColor: "#181b2e",
                  borderRadius: "16px",
                  padding: "8px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                  border: "1px solid #252842",
                  zIndex: 100,
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                  opacity: dropdownOpen ? 1 : 0,
                  transform: dropdownOpen ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.97)",
                  pointerEvents: dropdownOpen ? "auto" : "none",
                  transition: "opacity 0.18s ease, transform 0.18s ease",
                  transformOrigin: "top right",
                }}
              >
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      width: "100%",
                      padding: "13px 14px",
                      borderRadius: "10px",
                      backgroundColor: item.bg === "transparent" ? "transparent" : item.bg,
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.12s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (item.bg === "transparent") (e.currentTarget as HTMLElement).style.backgroundColor = "#1e2235";
                    }}
                    onMouseLeave={(e) => {
                      if (item.bg === "transparent") (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>{item.icon}</span>
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "white", letterSpacing: "-0.01em" }}>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Mobile XP Bar */}
        <div className="mt-3 flex lg:hidden items-center justify-center">
          <div className="flex items-center gap-3 rounded-xl bg-[#171928] border border-[#2b2f48] border-b-[3px] border-b-[#111320] px-4 py-2 shadow-lg">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f59e0b] text-xs font-black text-[#1a1c2b] shadow">{level}</span>
            <div className="flex flex-col">
              <div className="flex justify-between items-center text-xs font-bold text-white mb-1">
                <span className="truncate max-w-[100px]">{username}</span>
                <span className="text-[11px] font-semibold text-zinc-400 ml-3"><strong className="text-zinc-200">{currentXp}</strong> / {maxXp} XP</span>
              </div>
              <div className="h-2 w-36 sm:w-48 rounded-full bg-[#10121d] overflow-hidden border border-[#21253a]">
                <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]" style={{ width: `${xpPercentage}%` }} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
