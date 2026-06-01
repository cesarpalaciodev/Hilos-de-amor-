export function ChristmasOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width="1em"
      height="1em"
      style={{ display: "block" }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="14" r="8" fill="currentColor" opacity="0.15" />
      <circle cx="12" cy="14" r="6" fill="currentColor" opacity="0.2" />
      <rect x="11" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.3" />
      <path d="M10 4 L14 4" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    </svg>
  )
}

export function PineBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 40"
      fill="none"
      width="1em"
      height="1em"
      style={{ display: "block" }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20 Q30 10 50 20 Q70 30 90 20"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M20 18 L25 12 M30 16 L35 10 M40 18 L45 12 M50 20 L55 14 M60 22 L65 16 M70 20 L75 14 M80 18 L85 12" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeLinecap="round" />
      <path d="M20 22 L25 28 M30 24 L35 30 M40 22 L45 28 M50 20 L55 26 M60 18 L65 24 M70 20 L75 26 M80 22 L85 28" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeLinecap="round" />
    </svg>
  )
}

export function Star({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      style={{ display: "block", ...style }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L14.09 8.26L20.18 8.63L15.54 12.77L16.82 19.02L12 15.77L7.18 19.02L8.46 12.77L3.82 8.63L9.91 8.26L12 2Z" />
    </svg>
  )
}

export function HollyLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      width="1em"
      height="1em"
      style={{ display: "block" }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 8 Q25 12 28 10 Q30 15 35 18 Q30 20 32 25 Q28 24 25 28 Q22 24 20 28 Q18 24 15 28 Q12 24 8 25 Q10 20 5 18 Q10 15 12 10 Q15 12 20 8Z"
        fill="currentColor"
        opacity="0.15"
      />
      <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="22" cy="18" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  )
}
