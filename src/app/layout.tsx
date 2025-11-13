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
  const theme = useThemeStore(state => state.theme);
  const setTheme = useThemeStore(state => state.setTheme);

  useEffect(() => {
    // 페이지 로드 시 Tailwind dark 클래스 초기화
    if (theme === "darkMode") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
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
