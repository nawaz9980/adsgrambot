"use client";

import Header from "@/components/Header";
import PromoSection from "@/components/PromoSection";
import RecentWinners from "@/components/RecentWinners";
import DrawHistory from "@/components/DrawHistory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#11121d] text-white">
      {/* Header with matching exact UI & 3D chunky borders */}
      <Header
        balance={19.58}
        level={24}
        username="CriticalMeado..."
        currentXp={29}
        maxXp={79}
        gems={7}
        streak={2}
        tickets={11}
      />

      {/* Promo Cards: Zultiball Lottery & Free Daily Gems Wheel */}
      <PromoSection />

      {/* Recent Winners Auto-scrolling Ribbon */}
      <RecentWinners />

      {/* Draw History Section */}
      <DrawHistory />

      {/* Footer */}
      <Footer />
    </div>
  );
}
