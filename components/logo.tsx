export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="30" rx="6" className="fill-primary/10 stroke-primary/40" strokeWidth="1.5" />
      {/* network nodes */}
      <circle cx="9" cy="9" r="2.4" className="fill-primary" />
      <circle cx="23" cy="9" r="2.4" className="fill-foreground/70" />
      <circle cx="16" cy="23" r="2.4" className="fill-primary" />
      {/* links */}
      <path d="M9 9 L23 9 M9 9 L16 23 M23 9 L16 23" className="stroke-primary/60" strokeWidth="1.5" />
    </svg>
  )
}
