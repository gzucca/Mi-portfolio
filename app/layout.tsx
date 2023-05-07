import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Providers from "./Providers";
import { Explora, Comfortaa } from "next/font/google";

const explora = Explora({
  variable: "--explora-font",
  weight: ["400"],
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--comfortaa-font",
  weight: ["500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${explora.variable} ${comfortaa.variable}`}>
      <title>My Portfolio</title>
      <body className=" overflow-y-hidden">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
