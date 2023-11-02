import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Synapsis Challenge Test (Front-End Developer)",
    description: "Blog Post",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="px-4 md:px-10 lg:px-[10%] py-0 flex flex-col md:flex-col ">
            <p className="py-4 w-full text-center md:text-center text-2xl md:text-5xl font-bold text-yellow-500">
                <Link href={"/"}>
                Synapsis Blog
                </Link>
            </p>
            <Navbar menu={["Posts", "Users"]} />
            {children}
        </div>
        </body>
        </html>
    );
}