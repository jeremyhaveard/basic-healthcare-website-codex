import type { Metadata } from "next";
import "./globals.css";
import "./login/login.css";

export const metadata: Metadata = {
  title: "Pulse Health | Care that fits your life",
  description: "Accessible, coordinated virtual care from Pulse Health.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
