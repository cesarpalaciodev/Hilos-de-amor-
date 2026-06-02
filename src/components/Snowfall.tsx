const snowflakes = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: ((i * 37) % 100),
  delay: ((i * 13) % 100) / 10,
  duration: 12 + ((i * 7) % 100) / 10,
  size: 2 + ((i * 3) % 5),
}))

export function Snowfall() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="animate-snowfall absolute text-forest/8"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.size}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
