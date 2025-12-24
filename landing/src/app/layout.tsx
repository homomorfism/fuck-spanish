import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FuckLanguage - Best Spanish Learning App",
  description:
    "Learn Spanish by understanding words in context with listening audio and reading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
