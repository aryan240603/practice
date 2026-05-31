"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { name: "login", href: "/login" },
  { name: "register", href: "/register" },
  { name: "forgot-password", href: "/forgot-password" },
];

// Main Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen antialiased`}>
      <body className="min-h-full flex flex-col">
        <div>{children}</div>
        <input type="text" placeholder="Name" onChange = {(e)=>(e.target.value)}/>
        <div>
          {navLinks.map((links) => (
            <a
              key={links.name}
              href={links.href}
              className="text-blue-500 underline m-4"
            >
              {links.name}
            </a>
          ))}
        </div>
      </body>
    </html>
  );
}
