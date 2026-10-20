import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: "1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 600 }}>404</h1>
      <p style={{ color: "#888" }}>Page not found.</p>
      <Link href="/" style={{ color: "#3b82f6" }}>Go home</Link>
    </div>
  );
}
