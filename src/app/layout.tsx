import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="bg-background-light dark:bg-backgrond-dark text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
