import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "../styles/globals.css";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="dark:bg-black dark:text-light">
        <Provider>
          <Header></Header>
          {children}
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
}
