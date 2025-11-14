import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Finac - Personal Finance Tracker",
  description: "Track real-time stock prices, manage your portfolio, and set custom alerts with Finac, your personal finance tracker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
