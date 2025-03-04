import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1A1A1A]`}>
        <div className="bg-[#0D0D0D]/40 w-full py-10 px-6 mb-6">
          <div className="max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Image src={"/image.png"} alt="logo" width={22} height={36} />
            <h1 className="text-2xl font-bold">
              <span className="text-blue-400">Todo</span>
              <span className="text-purple-400">App</span>
            </h1>
          </div>
        </div>

        {/* Main content */}
        <div className="px-6">
          <div className="max-w-2xl mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
