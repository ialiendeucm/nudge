import "./globals.css";

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
      </body>
    </html>
  );
}