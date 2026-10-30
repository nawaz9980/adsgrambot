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
  onMenuClick?: () => void;
}

const NAV_ITEMS = [
  {
    label: "Account",
    bg: "bg-transparent hover:bg-[#232742]",
    iconColor: "text-zinc-400",
    icon: (
      // FontAwesome faUser
      <svg viewBox="0 0 448 512" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z" />
      </svg>
    ),
  },
  {
    label: "My Winnings",
    bg: "bg-[#2d2757] hover:bg-[#352e66]",
    iconColor: "text-[#c4b5fd]",
    icon: (
      // FontAwesome faTicket
      <svg viewBox="0 0 576 512" fill="currentColor" className="w-[18px] h-[18px] -rotate-12">
        <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.2 16 16 16 26.5 0 48 21.5 48 48s-21.5 48-48 48c-8.8 0-16 7.2-16 16v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-64c0-8.8-7.2-16-16-16-26.5 0-48-21.5-48-48s21.5-48 48-48c8.8 0 16-7.2 16-16V128c0-35.3-28.7-64-64-64H64zm112 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
      </svg>
    ),
  },
  {
    label: "Referral",
    bg: "bg-[#25324d] hover:bg-[#2b3a59]",
    iconColor: "text-[#93c5fd]",
    icon: (
      // FontAwesome faShareNodes
      <svg viewBox="0 0 448 512" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M352 224c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 127.1 160 106.7 160 47.7 160 0 207.7 0 266.7c0 59 47.7 106.7 106.7 106.7 20.4 0 38.7-10.2 55.9-25.9l94.1 47c-.5 3.9-.7 7.9-.7 11.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-20.4 0-38.7 10.2-55.9 25.9l-94.1-47c.5-3.9.7-7.9.7-11.9 0-4-.2-8-.7-11.9l94.1-47c17.2 15.7 35.5 25.9 55.9 25.9z" />
      </svg>
    ),
  },
  {
    label: "Clans",
    bg: "bg-[#34294d] hover:bg-[#3e315c]",
    iconColor: "text-[#d8b4fe]",
    icon: (
      // FontAwesome faShield
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
      </svg>
    ),
  },
  {
    label: "My Rewards",
    bg: "bg-[#383538] hover:bg-[#433f43]",
    iconColor: "text-[#d1d5db]",
    icon: (
      // FontAwesome faGift
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h64V32zm192 128h-32V96c0-35.3-28.7-64-64-64-33.8 0-61.4 26.3-63.8 59.8l121.2 68.2h38.6zm-256 0V91.8C389.4 58.3 361.8 32 328 32c-35.3 0-64 28.7-64 64v64H64v64h384v-64h-64zm-160 96v224c0 17.7 14.3 32 32 32h128V256H64zm192 256h128c17.7 0 32-14.3 32-32V256H256v256z" />
      </svg>
    ),
  },
  {
    label: "Withdraw",
    bg: "bg-[#1f3a38] hover:bg-[#264744]",
    iconColor: "text-[#5eead4]",
    icon: (
      // FontAwesome faMoneyBill
      <svg viewBox="0 0 576 512" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M0 112c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112zm64 48v192h448V160H64zm224 160a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm-160-32h-32v32h32v-32zm352 0h-32v32h32v-32zm0-96h-32v32h32V192zm-352 0h-32v32h32V192z" />
      </svg>
    ),
  },
  {
    label: "Tutorial",
    bg: "bg-transparent hover:bg-[#232742]",
    iconColor: "text-zinc-400",
    icon: (
      // FontAwesome faCircleInfo
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
      </svg>
    ),
  },
  {
    label: "Support",
    bg: "bg-transparent hover:bg-[#232742]",
    iconColor: "text-zinc-400",
    icon: (
      // FontAwesome faHeadset
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40C0 114.6 114.6 0 256 0S512 114.6 512 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64h16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H96c-35.3 0-64-28.7-64-64v-64zm352-64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h64z" />
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
  onMenuClick,
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
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="w-full bg-[#12131e] px-3 py-6 sm:px-6 select-none">
      <div className="mx-auto max-w-7xl">
        {/* Main Floating Bar */}
        <div className="relative flex h-[66px] sm:h-[70px] items-center justify-between rounded-2xl bg-[#202436] border-b-[4px] border-b-[#141624] px-4 sm:px-6 shadow-2xl">

          {/* ================= LEFT SECTION: Logo & 3D Balance Button ================= */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", zIndex: 10 }}>
            {/* Zulti Logo */}
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://zulti.com/images/zulti-logo-b251bf00f76a64ceb7a4f8588fd1098c.svg?vsn=d"
                alt="zulti logo"
                style={{ height: "32px", width: "auto", display: "block" }}
              />
            </div>

            {/* 3D Green Balance Button */}
            <button
              onClick={onBalanceClick}
              type="button"
              className="flex items-center justify-center gap-1 h-[42px] px-4 rounded-xl bg-[#27493f] border-b-[4px] border-[#18332b] shadow-md transition-all hover:brightness-105 active:translate-y-[2px] active:border-b-[2px] cursor-pointer"
            >
              <span className="text-[22px] font-black text-[#2cd46f]" style={{ lineHeight: 1, display: "flex", alignItems: "center" }}>
                $
              </span>
              <span className="text-[17px] font-extrabold text-white tracking-tight" style={{ lineHeight: 1, display: "flex", alignItems: "center" }}>
                {balance.toFixed(2)}
              </span>
            </button>
          </div>

          {/* ================= CENTER SECTION: Overlapping Level 23 Badge & XP ================= */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center z-20">
            <div className="relative flex items-center">
              {/* Golden Level 23 Hexagon Badge */}
              <div className="relative z-20 flex h-[78px] w-[68px] shrink-0 items-center justify-center -mr-3 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
                <svg viewBox="0 0 66 76" className="absolute inset-0 h-full w-full">
                  <polygon points="14,56 4,66 18,63" fill="#d97706" stroke="#b45309" strokeWidth="1.5" />
                  <polygon points="52,56 62,66 48,63" fill="#d97706" stroke="#b45309" strokeWidth="1.5" />
                  <polygon points="33,2 62,18 62,52 33,68 4,52 4,18" fill="#1b1d2c" stroke="#f59e0b" strokeWidth="4" strokeLinejoin="round" />
                  <polygon points="33,7 57,20 57,50 33,63 9,50 9,20" fill="#1e2133" stroke="#fbbf24" strokeWidth="1.5" strokeOpacity="0.8" strokeLinejoin="round" />
                  <path d="M12 48 L33 60 L54 48" fill="none" stroke="#b45309" strokeWidth="2.5" />
                </svg>
                <span className="relative z-10 text-xl font-black text-[#fbbf24] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-1">
                  {level}
                </span>
              </div>

              {/* XP Track Box */}
              <div className="relative flex flex-col justify-center rounded-r-xl bg-[#171928] border border-[#2b2f48] border-b-[3px] border-b-[#111320] pl-6 pr-4 py-2 shadow-inner min-w-[200px]">
                <div className="flex items-center justify-between gap-3 text-xs leading-none mb-1.5">
                  <span className="font-bold text-white tracking-wide truncate max-w-[110px]">
                    {username}
                  </span>
                  <span className="font-semibold text-zinc-400 text-[11px] whitespace-nowrap">
                    <strong className="text-zinc-200">{currentXp}</strong> / {maxXp} XP
                  </span>
                </div>
                <div className="h-[9px] w-48 sm:w-56 rounded-full bg-[#10121d] p-[1.5px] overflow-hidden border border-[#21253a]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] transition-all duration-300"
                    style={{ width: `${xpPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SECTION: Currencies & Hamburger / Close ================= */}
          <div ref={dropdownRef} className="relative flex items-center gap-5 sm:gap-6 z-30">
            {/* Gem */}
            <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://zulti.com/images/landing/gem-1-ee5f2a668ec30e4530797ca75efb1ded.svg?vsn=d"
                alt="gems"
                style={{ height: "20px", width: "20px", display: "block" }}
              />
              <span style={{ fontSize: "15px", fontWeight: 700, color: "white", lineHeight: 1 }}>
                {gems}
              </span>
            </div>

            {/* Streak Flame */}
            <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition">
              <svg viewBox="0 0 24 24" style={{ height: "20px", width: "20px", display: "block" }} fill="none">
                <path
                  d="M12 2C11.5 4 10.5 5.5 9 7.5C7.5 9.5 7 11.5 7 13.5C7 17.09 9.24 20 12 20C14.76 20 17 17.09 17 13.5C17 10.5 15 7.5 13.5 5C13 4 12.5 3 12 2Z"
                  fill="#f97316"
                />
                <path
                  d="M12 9C11.7 10.5 10.8 11.8 10 13C9.2 14.2 9 15.2 9 16C9 17.66 10.34 19 12 19C13.66 19 15 17.66 15 16C15 14.2 13.8 12.5 13 11C12.5 10 12.2 9.5 12 9Z"
                  fill="#fbbf24"
                />
              </svg>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "white", lineHeight: 1 }}>
                {streak}
              </span>
            </div>

            {/* Ticket */}
            <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition">
              <svg viewBox="0 0 24 24" style={{ height: "20px", width: "20px", display: "block", transform: "rotate(-15deg)" }} fill="none">
                <path
                  d="M3 8.5C3 7.4 3.9 6.5 5 6.5H19C20.1 6.5 21 7.4 21 8.5V10C19.9 10 19 10.9 19 12C19 13.1 19.9 14 21 14V15.5C21 16.6 20.1 17.5 19 17.5H5C3.9 17.5 3 16.6 3 15.5V14C4.1 14 5 13.1 5 12C5 10.9 4.1 10 3 10V8.5Z"
                  fill="#a855f7"
                />
                <line x1="8" y1="6.5" x2="8" y2="17.5" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "white", lineHeight: 1 }}>
                {tickets}
              </span>
            </div>

            {/* Hamburger / Close Toggle Button */}
            <button
              onClick={() => {
                setDropdownOpen((prev) => !prev);
                onMenuClick?.();
              }}
              type="button"
              aria-label={dropdownOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={dropdownOpen}
              className="flex items-center justify-center cursor-pointer transition hover:opacity-80 active:scale-95"
              style={{
                width: "24px",
                height: "24px",
                background: "none",
                border: "none",
                padding: 0,
              }}
            >
              {dropdownOpen ? (
                // FontAwesome faXmark
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-[19px] h-[19px] text-[#cbd5e1]">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              ) : (
                // 3-Bar Hamburger Menu
                <div className="flex flex-col justify-center gap-[5px] w-[22px] h-[20px]">
                  <span style={{ display: "block", height: "2.5px", width: "100%", borderRadius: "2px", backgroundColor: "#94a3b8" }} />
                  <span style={{ display: "block", height: "2.5px", width: "100%", borderRadius: "2px", backgroundColor: "#94a3b8" }} />
                  <span style={{ display: "block", height: "2.5px", width: "100%", borderRadius: "2px", backgroundColor: "#94a3b8" }} />
                </div>
              )}
            </button>

            {/* ================= DROPDOWN MENU ================= */}
            <div
              className={`absolute top-[calc(100%+14px)] -right-4 sm:-right-6 w-[280px] sm:w-[300px] rounded-2xl bg-[#1c2035] border border-[#2b304c] border-b-[4px] border-b-[#121422] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.7)] z-50 flex flex-col gap-1.5 transition-all duration-200 origin-top-right ${
                dropdownOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setDropdownOpen(false)}
                  className={`flex items-center gap-3.5 w-full px-4 py-3 rounded-xl transition-all text-left cursor-pointer ${item.bg}`}
                >
                  <span className={`shrink-0 flex items-center justify-center ${item.iconColor}`}>
                    {item.icon}
                  </span>
                  <span className="text-[15px] font-bold text-white tracking-wide">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Mobile XP Bar */}
        <div className="mt-3 flex lg:hidden items-center justify-center">
          <div className="flex items-center gap-3 rounded-xl bg-[#171928] border border-[#2b2f48] border-b-[3px] border-b-[#111320] px-4 py-2 shadow-lg">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f59e0b] text-xs font-black text-[#1a1c2b] shadow">
              {level}
            </span>
            <div className="flex flex-col">
              <div className="flex justify-between items-center text-xs font-bold text-white mb-1">
                <span className="truncate max-w-[100px]">{username}</span>
                <span className="text-[11px] font-semibold text-zinc-400 ml-3">
                  <strong className="text-zinc-200">{currentXp}</strong> / {maxXp} XP
                </span>
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
