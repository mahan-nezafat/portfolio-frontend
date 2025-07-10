import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
    title: "portfolio",
    description: "mahan's portfolio",
};
console.log(process.env.NEXT_PUBLIC_BACKEND_HOST_NAME)
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
