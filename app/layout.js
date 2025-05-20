import Head from 'next/head'
import "./globals.css";

export const metadata = {
  title: "Azure Thompson",
  description: "Professional Web Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/ico" href="/favicon.ico" sizes="any"/>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
