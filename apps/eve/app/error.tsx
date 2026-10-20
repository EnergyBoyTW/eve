"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: "1rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>Something went wrong.</h2>
      <button onClick={reset} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Try again</button>
    </div>
  );
}
