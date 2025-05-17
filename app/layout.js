import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Iroz",
  description: "For Next Gen of Entreprenuers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" antialiased">{children}</body>
    </html>
  );
}
