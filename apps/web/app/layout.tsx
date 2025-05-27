import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codex",
  description: "Codex - Your Code Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex gap-4">
            <a href="/" className="hover:text-gray-300">
              首页
            </a>
            <a href="/users" className="hover:text-gray-300">
              用户
            </a>
          </div>
        </nav>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
