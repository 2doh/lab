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
          <main className="flex-center">
            <div className="max-w-[1440px] w-[100%] mt-5">{children}</div>
          </main>
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
}
