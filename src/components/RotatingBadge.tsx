export function RotatingBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow motion-reduce:animate-none">
        <circle cx="50" cy="50" r="49" fill="#C2456B" />
        <defs>
          <path id="badge-circle-path" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text fontSize="8" letterSpacing="2.2" fill="#FFFFFF">
          <textPath href="#badge-circle-path" startOffset="0%">
            QAPHI · THE ORIGINAL COFFEE · QAPHI · THE ORIGINAL COFFEE ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="30%" height="30%" viewBox="0 0 26 26" fill="none">
          <ellipse cx="13" cy="13" rx="9" ry="11" fill="#FFFFFF" transform="rotate(-18 13 13)" />
          <path d="M13 4 C9.5 9 9.5 17 13 22" stroke="#C2456B" strokeWidth="1.4" fill="none" transform="rotate(-18 13 13)" />
        </svg>
      </div>
    </div>
  )
}
