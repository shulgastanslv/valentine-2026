import type {Metadata} from "next";
import {Geist, Montserrat, Raleway} from "next/font/google";
import "./globals.css";

const geistSans = Raleway({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Raleway({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Моей буське",
    description: "Поздравляю тебя от всей души",
    icons: {
        icon: "/logo-browser.svg",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
