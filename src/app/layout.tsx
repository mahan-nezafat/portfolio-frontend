import type { Metadata } from "next";
import Head from 'next/head';
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from "@/components/footer";

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
           <Head>
            <link rel="icon" href="/favicon.ico" />
           </Head>
            <body>{children}
                <Footer/>
            </body>
            <GoogleAnalytics gaId="G-YM2LN6B5GF" />
        </html>
    );
}
