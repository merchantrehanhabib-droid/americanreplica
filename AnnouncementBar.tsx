import { Star } from "lucide-react";

function AnimatedFlag({ size = "sm" }: { size?: "sm" | "lg" }) {
  const w = size === "lg" ? 52 : 28;
  const h = size === "lg" ? 34 : 18;
  const canton = { w: size === "lg" ? 20 : 11, h: size === "lg" ? 17 : 9 };
  const r = size === "lg" ? 1 : 0.55;

  return (
    <span
      className="inline-flex items-center relative overflow-hidden flex-shrink-0"
      style={{ width: w, height: h }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
        style={{
          animation: "flagWave 1.8s ease-in-out infinite",
          transformOrigin: "left center",
          display: "block",
        }}
      >
        {[0, 2, 4, 6, 8, 10, 12].map((y) => (
          <rect key={`r${y}`} x="0" y={y * (h / 13)} width={w} height={h / 13} fill="#B22234" />
        ))}
        {[1, 3, 5, 7, 9, 11].map((y) => (
          <rect key={`w${y}`} x="0" y={y * (h / 13)} width={w} height={h / 13} fill="#FFFFFF" />
        ))}
        <rect x="0" y="0" width={canton.w} height={canton.h} fill="#3C3B6E" />
        {[canton.w * 0.18, canton.w * 0.36, canton.w * 0.54, canton.w * 0.72, canton.w * 0.9].map((cx) =>
          [canton.h * 0.17, canton.h * 0.5, canton.h * 0.83].map((cy) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#FFFFFF" />
          ))
        )}
      </svg>
      <style>{`
        @keyframes flagWave {
          0%   { transform: skewY(0deg) scaleX(1); }
          25%  { transform: skewY(-2deg) scaleX(0.97); }
          50%  { transform: skewY(0deg) scaleX(1); }
          75%  { transform: skewY(2deg) scaleX(0.97); }
          100% { transform: skewY(0deg) scaleX(1); }
        }
      `}</style>
    </span>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="bg-[#121212] text-white py-2 px-3 w-full flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-medium">
      {/* Mobile: large flag only; desktop: large flag + stars + text */}
      <AnimatedFlag size="lg" />

      <div className="hidden sm:flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-gold text-gold" />
        ))}
      </div>

      <span className="text-center leading-tight">
        <span className="hidden sm:inline">Featuring Trust On Top Review Platforms</span>
        <span className="sm:hidden text-[11px]">Trust On Top Review Platforms</span>
      </span>

      <div className="hidden sm:flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-gold text-gold" />
        ))}
      </div>

      <AnimatedFlag size="lg" />
    </div>
  );
}
