import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEP 7 Printable Payment QR for Print Media",
  description: "SEP 7 Printable Payment QR for Print Media gives operators a shared settlement score trail, signed wallet actions, and a Soroban-backed release path that can be audited from dashboard to ledger.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
