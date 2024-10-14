import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/app/provider";
import { ptBR } from "@clerk/localizations";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Ai Short Video Generator",
  description: "Generator Ai Video",
};

const roboto = Roboto({ weight: ["500"], subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={`${roboto.className}  antialiased`}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
