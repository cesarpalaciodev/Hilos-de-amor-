export function ChristmasTree({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L8 8H10L7 13H9L6 18H18L15 13H17L14 8H16L12 2Z"
        fill="currentColor"
        opacity="0.9"
      />
      <rect x="11" y="18" width="2" height="4" fill="currentColor" opacity="0.7" />
      <circle cx="10" cy="10" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="14" cy="12" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="11" cy="15" r="0.8" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function GiftBox({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="8" width="18" height="13" rx="1" fill="currentColor" opacity="0.85" />
      <rect x="3" y="8" width="18" height="3" fill="currentColor" opacity="0.95" />
      <path
        d="M12 8V21M3 11H21"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M12 8C12 8 9 5 9 4C9 3 10 2 11 2C12 2 12 3 12 4M12 8C12 8 15 5 15 4C15 3 14 2 13 2C12 2 12 3 12 4"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function Sparkles({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M19 15L19.75 17.25L22 18L19.75 18.75L19 21L18.25 18.75L16 18L18.25 17.25L19 15Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M5 2L5.5 3.5L7 4L5.5 4.5L5 6L4.5 4.5L3 4L4.5 3.5L5 2Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  )
}

export function SantaHat({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 16C4 16 6 14 12 14C18 14 20 16 20 16V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V16Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M12 14C12 14 8 10 8 6C8 4 10 2 12 2C14 2 16 4 16 6C16 10 12 14 12 14Z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="16" cy="6" r="2" fill="currentColor" opacity="0.9" />
      <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

export function Snowflake({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6" />
      <path
        d="M12 6L13 8L12 7L11 8L12 6ZM12 18L13 16L12 17L11 16L12 18ZM6 12L8 13L7 12L8 11L6 12ZM18 12L16 13L17 12L16 11L18 12Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  )
}

export function Bell({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M13.73 21A2 2 0 0 1 10.27 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="12" cy="3" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

export function CandyCane({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 22V10C8 7 10 5 13 5C16 5 18 7 18 10V12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M8 22V18M8 14V10M13 5H14M16 6L17 7M18 10V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}
