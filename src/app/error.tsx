// app/error.tsx
'use client'

export default function ErrorBoundary({ error, reset }: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Cart Error: {error.message}</h2>
      <button onClick={reset}>Retry</button>
    </div>
  )
}