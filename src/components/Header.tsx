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
    bg: "bg-[#352e5c] hover:bg-[#3d356b]",
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
    bg: "bg-[#2a3754] hover:bg-[#314062]",
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
    bg: "bg-[#382f4e] hover:bg-[#43375e]",
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
    bg: "bg-[#3e3836] hover:bg-[#4a423f]",
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
    bg: "bg-[#203c3e] hover:bg-[#27484a]",
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
  level = 24,
  username = "CriticalMeado...",
  currentXp = 29,
  maxXp = 79,
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
    <header className="w-full bg-[#12131e] px-2.5 py-3 sm:px-6 sm:py-6 select-none">
      <div className="mx-auto max-w-7xl">
        {/* Main Floating Bar */}
        <div className="relative flex h-[58px] sm:h-[66px] md:h-[70px] items-center justify-between rounded-xl sm:rounded-2xl bg-[#202436] border-b-[3px] sm:border-b-[4px] border-b-[#141624] px-2.5 sm:px-5 md:px-6 shadow-2xl">

          {/* ================= LEFT SECTION: Logo & 3D Balance Button ================= */}
          <div className="flex items-center gap-2 sm:gap-3.5 md:gap-5 z-10">
            {/* Zulti Logo */}
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://zulti.com/images/zulti-logo-b251bf00f76a64ceb7a4f8588fd1098c.svg?vsn=d"
                alt="zulti logo"
                className="h-[24px] sm:h-[28px] md:h-[32px] w-auto block"
              />
            </div>

            {/* 3D Green Balance Button */}
            <button
              onClick={onBalanceClick}
              type="button"
              className="flex items-center justify-center gap-1 h-[36px] sm:h-[40px] md:h-[42px] px-2.5 sm:px-3.5 md:px-4 rounded-lg sm:rounded-xl bg-[#27493f] border-b-[3px] sm:border-b-[4px] border-[#18332b] shadow-md transition-all hover:brightness-105 active:translate-y-[2px] active:border-b-[2px] cursor-pointer"
            >
              <span className="text-[18px] sm:text-[20px] md:text-[22px] font-black text-[#2cd46f]" style={{ lineHeight: 1, display: "flex", alignItems: "center" }}>
                $
              </span>
              <span className="text-[14px] sm:text-[16px] md:text-[17px] font-extrabold text-white tracking-tight" style={{ lineHeight: 1, display: "flex", alignItems: "center" }}>
                {balance.toFixed(2)}
              </span>
            </button>
          </div>

          {/* ================= CENTER SECTION: Overlapping Level Badge & XP ================= */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center z-20">
            <div className="relative flex items-center">
              {/* Golden Level Hexagon Badge */}
              <div className="relative z-20 flex h-[76px] w-[66px] shrink-0 items-center justify-center -mr-3 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
                <svg viewBox="0 0 64 72" className="absolute inset-0 h-full w-full">
                  {/* Left bottom wing tab */}
                  <polygon points="10,48 2,48 4,53 10,53" fill="#f59e0b" />
                  <polygon points="4,53 2,48 4,56 9,54" fill="#b45309" />

                  {/* Right bottom wing tab */}
                  <polygon points="54,48 62,48 60,53 54,53" fill="#f59e0b" />
                  <polygon points="60,53 62,48 60,56 55,54" fill="#b45309" />

                  {/* 3D Bottom Bevel Shadow under bottom point */}
                  <path
                    d="M8 50 L32 66 L56 50"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Outer Hexagon with Thick Gold Border */}
                  <polygon
                    points="32,5 56,17 56,49 32,63 8,49 8,17"
                    fill="#181a29"
                    stroke="#f59e0b"
                    strokeWidth="4.5"
                    strokeLinejoin="round"
                  />

                  {/* Inner Stitched / Dotted Accent Outline */}
                  <polygon
                    points="32,9 52,19 52,47 32,59 12,47 12,19"
                    fill="#1b1d2e"
                    stroke="#fbbf24"
                    strokeWidth="1.2"
                    strokeDasharray="2.5 1.5"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Level Number */}
                <span className="relative z-10 text-[23px] font-black text-[#fbbf24] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pb-1">
                  {level}
                </span>
              </div>

              {/* XP Track Box */}
              <div className="relative flex flex-col justify-center rounded-2xl bg-[#171929] border border-[#252942] border-b-[3px] border-b-[#0e101a] pl-6 pr-4 py-2 shadow-inner min-w-[260px] sm:min-w-[290px]">
                {/* Username and XP Numbers */}
                <div className="flex items-center justify-between gap-4 text-xs leading-none mb-1.5">
                  <span className="font-extrabold text-white text-[13px] tracking-wide truncate max-w-[130px]">
                    {username}
                  </span>
                  <span className="font-bold text-zinc-300 text-[12px] whitespace-nowrap">
                    <strong className="text-white font-extrabold">{currentXp}</strong> / {maxXp} XP
                  </span>
                </div>

                {/* Golden XP Progress Bar Track */}
                <div className="h-[8.5px] w-full rounded-full bg-[#10121d] p-[0.5px] overflow-hidden border border-[#1f2338]">
                  <div
                    className="h-full rounded-full bg-[#f59e0b] shadow-[0_0_6px_rgba(245,158,11,0.5)] transition-all duration-300"
                    style={{ width: `${xpPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SECTION: Currencies & Hamburger / Close ================= */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 z-30">
            {/* Gem / Diamond */}
            <button
              id="ftp-token-balance-button"
              type="button"
              aria-label="Use gems to enter tickets in open draws to win the USD jackpot!"
              title="Use gems to enter tickets in open draws to win the USD jackpot!"
              className="flex shrink-0 flex-col lg:flex-row items-center justify-center gap-1 lg:gap-1.5 min-w-[26px] sm:min-w-[30px] lg:min-w-0 cursor-pointer hover:opacity-80 transition bg-transparent border-0 p-0"
            >
              <span className="pointer-events-none flex h-[20px] items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 68 56"
                  fill="none"
                  className="h-[16px] w-[19px] sm:h-[18px] sm:w-[22px] block"
                  focusable="false"
                >
                  <path
                    d="M49.665 0.5C51.7251 0.5 53.6516 1.53017 54.7959 3.24707H54.7969L66.2949 20.5303H66.2939C66.4847 20.8079 66.6069 21.0973 66.7002 21.3584L66.7148 21.4014C66.7514 21.4806 66.7942 21.5982 66.8086 21.7363C66.902 22.0771 66.9394 22.439 66.9394 22.7705V22.7812C66.9206 23.7003 66.5847 24.6253 65.9111 25.3525L65.7715 25.4951L36.4482 54.1191L36.4473 54.1201C35.6827 54.8646 34.6964 55.2256 33.7148 55.2256C32.7333 55.2255 31.7469 54.8647 30.9824 54.1201L30.9814 54.1191L1.67578 25.4951V25.4941C0.325664 24.1831 0.131504 22.0976 1.13086 20.5381L1.13477 20.5303H1.13574L12.6338 3.24707L12.8574 2.93262C14.0195 1.40501 15.8335 0.500046 17.7646 0.5H49.665Z"
                    fill="#5DADEC"
                    stroke="#AAD4F2"
                  />
                  <path
                    d="M1.10574 22.7202C1.1233 23.579 1.4562 24.438 2.12237 25.0865L31.4462 53.7112C32.1122 54.3596 32.9712 54.6752 33.83 54.6752L27.9516 44.6663L21.8761 33.0972C20.6491 30.4153 19.3171 27.9087 16.3023 26.5764C13.4101 25.3144 2.42034 19.6525 1.31609 21.4756C1.07062 21.9488 1.10574 22.4571 1.10574 22.7202Z"
                    fill="#8CCAF7"
                  />
                  <path
                    d="M66.5553 22.7212C66.5377 23.58 66.2046 24.439 65.5386 25.0875L36.2148 53.7122C35.5488 54.3606 34.6898 54.6762 33.8311 54.6762L39.8955 43.9849L45.785 33.0981C47.0119 30.4163 48.3439 27.9097 51.3587 26.5774C54.2509 25.3154 65.2231 19.6535 66.3274 21.4765C66.3274 21.4941 66.5377 22.4581 66.5377 22.7212H66.5553Z"
                    fill="#4289C1"
                  />
                  <path
                    d="M32.0428 53.3322L21.8767 33.104C20.7024 30.755 21.754 27.3018 23.6645 27.3018H43.9967C45.9072 27.3018 46.9764 30.755 45.7845 33.104L35.6184 53.3322C34.7069 55.1552 32.9543 55.1552 32.0253 53.3322H32.0428Z"
                    fill="#5DADEC"
                  />
                  <path
                    opacity="0.8"
                    d="M32.0399 10.0043L21.8738 22.8881C20.6995 24.378 21.751 26.5867 23.6616 26.5867H43.9938C45.9043 26.5867 46.9734 24.378 45.7816 22.8881L35.6155 10.0043C34.704 8.84751 32.9513 8.84751 32.0223 10.0043H32.0399Z"
                    fill="#DCF6F9"
                  />
                  <path
                    d="M32.3398 8.87343L17.1257 2.10721C15.4782 1.37094 15.1802 0.28418 17.8443 0.28418L49.8325 0.28418C52.4966 0.28418 52.1987 1.37094 50.551 2.10721L35.337 8.87343C34.5132 9.24147 33.1636 9.24147 32.3398 8.87343Z"
                    fill="#8CCAF7"
                  />
                </svg>
              </span>
              <span className="pointer-events-none flex h-[15px] items-center justify-center leading-none">
                <span id="token-balance" className="inline-flex items-center gap-1 whitespace-nowrap text-[12px] sm:text-[13px] lg:text-[14px] font-bold text-white leading-none">
                  <span id="token-balance-value">{gems}</span>
                </span>
              </span>
            </button>

            {/* Streak Flame */}
            <button
              id="spin-streak-navbar-button"
              type="button"
              aria-label={`You've spun the wheel ${streak} days in a row. Spin every day for more rewards!`}
              title={`You've spun the wheel ${streak} days in a row. Spin every day for more rewards!`}
              className="flex shrink-0 flex-col lg:flex-row items-center justify-center gap-1 lg:gap-1.5 min-w-[26px] sm:min-w-[30px] lg:min-w-0 cursor-pointer hover:opacity-80 transition bg-transparent border-0 p-0"
            >
              <span className="pointer-events-none flex h-[20px] items-center justify-center">
                <svg
                  className="h-[18px] w-[13px] sm:h-[20px] sm:w-[15px] text-[#ff7a00] block"
                  viewBox="0 0 22 30"
                  fill="currentColor"
                  focusable="false"
                >
                  <path d="M19.1383 11.4666C19.0584 11.3675 18.9615 11.387 18.9107 11.4072C18.8682 11.4243 18.7707 11.4789 18.7842 11.6155C18.8004 11.7797 18.8095 11.947 18.8112 12.113C18.8185 12.8015 18.5395 13.4761 18.0458 13.9637C17.5552 14.4482 16.91 14.7092 16.2231 14.7016C15.2847 14.6898 14.5064 14.2052 13.9722 13.3004C13.5306 12.5523 13.7247 11.5873 13.9302 10.5656C14.0505 9.96762 14.1749 9.34921 14.1749 8.76066C14.1749 4.17797 11.0627 1.53409 9.20755 0.365973C9.16918 0.341853 9.13266 0.333374 9.10031 0.333374C9.0477 0.333374 9.00603 0.355832 8.98548 0.369582C8.94566 0.39628 8.88194 0.457124 8.90243 0.564831C9.61152 4.29233 7.49653 6.5342 5.25733 8.90767C2.94927 11.3542 0.333252 14.1271 0.333252 19.1282C0.333252 24.9392 5.10894 29.6667 10.9791 29.6667C15.8124 29.6667 20.0738 26.331 21.342 21.5548C22.2067 18.2982 21.3005 14.1498 19.1383 11.4666V11.4666ZM11.2447 27.4173C9.77478 27.4836 8.37687 26.9618 7.30913 25.9511C6.25285 24.9513 5.64701 23.5559 5.64701 22.1229C5.64701 19.4335 6.68575 17.4593 9.47962 14.8383C9.52534 14.7954 9.57216 14.7818 9.61297 14.7818C9.64995 14.7818 9.68201 14.793 9.70406 14.8035C9.75054 14.8256 9.82693 14.8805 9.81663 14.9992C9.71674 16.1499 9.71847 17.105 9.82172 17.8381C10.0856 19.7107 11.4704 20.9689 13.2677 20.9689C14.1489 20.9689 14.9883 20.6406 15.6312 20.0445C15.7058 19.9753 15.7892 19.9841 15.8211 19.9908C15.8634 19.9999 15.9201 20.0255 15.9498 20.0964C16.2164 20.7335 16.3526 21.4099 16.3547 22.1065C16.3632 24.9095 14.0709 27.2919 11.2447 27.4173V27.4173Z" />
                </svg>
              </span>
              <span className="pointer-events-none flex h-[15px] items-center justify-center leading-none">
                <span id="spin-streak" className="text-[12px] sm:text-[13px] lg:text-[14px] font-bold text-white leading-none">
                  {streak}
                </span>
              </span>
            </button>

            {/* Ticket */}
            <button
              id="tickets-navbar-button"
              type="button"
              aria-label={`You have ${tickets} active tickets. Select an Open draw to enter more`}
              title={`You have ${tickets} active tickets. Select an Open draw to enter more`}
              className="flex shrink-0 flex-col lg:flex-row items-center justify-center gap-1 lg:gap-1.5 min-w-[26px] sm:min-w-[30px] lg:min-w-0 cursor-pointer hover:opacity-80 transition bg-transparent border-0 p-0"
            >
              <span className="pointer-events-none flex h-[20px] items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 14"
                  className="w-[18px] h-[13px] sm:w-[20px] sm:h-[14px] -rotate-45 text-[#c4b5fd] block"
                  fill="currentColor"
                  focusable="false"
                >
                  <path
                    d="M19.5 4.5H19C18.337 4.5 17.7013 4.76358 17.2324 5.23242C16.7636 5.70126 16.5 6.33696 16.5 7L16.5127 7.24707C16.5695 7.81937 16.8222 8.35735 17.2324 8.76758C17.7013 9.23642 18.337 9.5 19 9.5H19.5V12.25C19.5 12.9416 18.9416 13.5 18.25 13.5H14V10.75C14 10.6837 13.9736 10.6201 13.9268 10.5732C13.8799 10.5264 13.8163 10.5 13.75 10.5C13.6837 10.5 13.6201 10.5264 13.5732 10.5732C13.5264 10.6201 13.5 10.6837 13.5 10.75V13.5L1.75 13.5C1.05836 13.5 0.5 12.9416 0.5 12.25V9.5H1C1.66304 9.5 2.29874 9.23642 2.76758 8.76758C3.17781 8.35735 3.43048 7.81937 3.4873 7.24707L3.5 7C3.5 6.33696 3.23642 5.70126 2.76758 5.23242C2.29874 4.76358 1.66304 4.5 1 4.5H0.5V1.75C0.5 1.05836 1.05836 0.5 1.75 0.5L13.5 0.5V3.25L13.5049 3.29883C13.5145 3.34694 13.538 3.39156 13.5732 3.42676C13.6201 3.47364 13.6837 3.5 13.75 3.5C13.8163 3.5 13.8799 3.47364 13.9268 3.42676C13.962 3.39156 13.9855 3.34694 13.9951 3.29883L14 3.25V0.5L18.25 0.5C18.9416 0.5 19.5 1.05836 19.5 1.75V4.5ZM14 6.25C14 6.1837 13.9736 6.12013 13.9268 6.07324C13.8799 6.02636 13.8163 6 13.75 6C13.6837 6 13.6201 6.02636 13.5732 6.07324C13.5264 6.12013 13.5 6.1837 13.5 6.25V7.75L13.5049 7.79883C13.5145 7.84694 13.538 7.89156 13.5732 7.92676C13.6201 7.97364 13.6837 8 13.75 8C13.8163 8 13.8799 7.97364 13.9268 7.92676C13.962 7.89156 13.9855 7.84694 13.9951 7.79883L14 7.75V6.25Z"
                    stroke="currentColor"
                  />
                </svg>
              </span>
              <span className="pointer-events-none flex h-[15px] items-center justify-center leading-none">
                <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-bold text-white leading-none">
                  {tickets}
                </span>
              </span>
            </button>

            {/* Hamburger / Close Toggle Button */}
            <button
              onClick={() => {
                setDropdownOpen((prev) => !prev);
                onMenuClick?.();
              }}
              type="button"
              aria-label={dropdownOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={dropdownOpen}
              className="flex items-center justify-center cursor-pointer transition hover:opacity-80 active:scale-95 ml-1 sm:ml-2"
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
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] text-[#cbd5e1]">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              ) : (
                // 3-Bar Hamburger Menu
                <div className="flex flex-col justify-center gap-[4px] sm:gap-[4.5px] w-[20px] sm:w-[22px] h-[18px] sm:h-[20px]">
                  <span style={{ display: "block", height: "2.5px", width: "100%", borderRadius: "2px", backgroundColor: "#94a3b8" }} />
                  <span style={{ display: "block", height: "2.5px", width: "100%", borderRadius: "2px", backgroundColor: "#94a3b8" }} />
                  <span style={{ display: "block", height: "2.5px", width: "100%", borderRadius: "2px", backgroundColor: "#94a3b8" }} />
                </div>
              )}
            </button>
          </div>

          {/* ================= DROPDOWN MENU (Anchored directly under header with clean gap) ================= */}
          <div
            ref={dropdownRef}
            className={`absolute top-[calc(100%+12px)] sm:top-[calc(100%+14px)] right-0 w-[calc(100vw-20px)] max-w-[280px] sm:w-[300px] rounded-2xl bg-[#1c2035] border border-[#2b304c] border-b-[4px] border-b-[#121422] p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.7)] z-50 flex flex-col gap-1.5 sm:gap-2 transition-all duration-200 origin-top-right ${
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
                className={`flex items-center gap-3 sm:gap-3.5 w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl transition-all text-left cursor-pointer ${item.bg}`}
              >
                <span className={`shrink-0 flex items-center justify-center ${item.iconColor}`}>
                  {item.icon}
                </span>
                <span className="text-[14px] sm:text-[15px] font-bold text-white tracking-wide">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Mobile XP Bar */}
        <div className="mt-2.5 sm:mt-3.5 flex lg:hidden items-center justify-center w-full">
          <div className="relative flex items-center gap-3 rounded-xl sm:rounded-2xl bg-[#171929] border border-[#252942] border-b-[3px] border-b-[#0e101a] px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-lg w-full max-w-[360px] sm:max-w-[420px]">
            {/* Golden Level Hexagon Badge (Scaled for Mobile) */}
            <div className="relative z-10 flex h-[48px] w-[42px] shrink-0 items-center justify-center filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              <svg viewBox="0 0 64 72" className="absolute inset-0 h-full w-full">
                {/* Left bottom wing tab */}
                <polygon points="10,48 2,48 4,53 10,53" fill="#f59e0b" />
                <polygon points="4,53 2,48 4,56 9,54" fill="#b45309" />

                {/* Right bottom wing tab */}
                <polygon points="54,48 62,48 60,53 54,53" fill="#f59e0b" />
                <polygon points="60,53 62,48 60,56 55,54" fill="#b45309" />

                {/* 3D Bottom Bevel Shadow under bottom point */}
                <path
                  d="M8 50 L32 66 L56 50"
                  fill="none"
                  stroke="#b45309"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Outer Hexagon with Thick Gold Border */}
                <polygon
                  points="32,5 56,17 56,49 32,63 8,49 8,17"
                  fill="#181a29"
                  stroke="#f59e0b"
                  strokeWidth="4.5"
                  strokeLinejoin="round"
                />

                {/* Inner Stitched / Dotted Accent Outline */}
                <polygon
                  points="32,9 52,19 52,47 32,59 12,47 12,19"
                  fill="#1b1d2e"
                  stroke="#fbbf24"
                  strokeWidth="1.2"
                  strokeDasharray="2.5 1.5"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Level Number */}
              <span className="relative z-10 text-[15px] font-black text-[#fbbf24] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pb-0.5">
                {level}
              </span>
            </div>

            {/* Mobile Username & XP Bar */}
            <div className="flex flex-col flex-1 min-w-0 justify-center">
              <div className="flex justify-between items-center text-xs leading-none mb-1.5">
                <span className="truncate max-w-[130px] sm:max-w-[160px] font-extrabold text-[12px] sm:text-[13px] text-white">
                  {username}
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold text-zinc-300 ml-2 shrink-0">
                  <strong className="text-white font-extrabold">{currentXp}</strong> / {maxXp} XP
                </span>
              </div>
              <div className="h-[7.5px] sm:h-[8px] w-full rounded-full bg-[#10121d] overflow-hidden border border-[#1f2338] p-[0.5px]">
                <div
                  className="h-full rounded-full bg-[#f59e0b] shadow-[0_0_6px_rgba(245,158,11,0.5)] transition-all duration-300"
                  style={{ width: `${xpPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
