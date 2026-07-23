import { Theme } from "frosted-ui";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Eve",
  description: "Chat with your personal Eve agent",
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* Whop-style frosted dark theme with the classic blue accent. */}
        <Theme appearance="dark" accentColor="blue" className="min-h-dvh bg-canvas text-gray-12">
          {children}
        </Theme>
      </body>
    </html>
  );
}
