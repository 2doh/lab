import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "../styles/globals.css";
import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
