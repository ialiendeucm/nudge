import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Iñaki Aliende, PhD",
  description: "Behavioural Economics Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BQ3S1S9QP2"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-BQ3S1S9QP2');
          `}
        </Script>
      </body>
    </html>
  );
}