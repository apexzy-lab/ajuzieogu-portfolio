import "./globals.css";

export const metadata = {
  title: "Apex — Six Portfolio Directions",
  description: "Six interactive redesign directions for ajuzieogu.com"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
