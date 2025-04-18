import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "portfolio",
    description: "mahan's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa">
            <body>{children}</body>
            <GoogleAnalytics gaId="G-YM2LN6B5GF" />
        </html>
    );
}
