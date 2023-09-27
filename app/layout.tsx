import "../styles/globals.css";
import Navbar from "./components/Navbar";
import { Explora, Comfortaa } from "next/font/google";
import dynamic from "next/dynamic"
const Providers = dynamic(
  () => import("./Providers"),
  { ssr: false }
)

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
    <html lang="en" className={`${explora.variable} ${comfortaa.variable} scroll-smooth`}>
      <title>My Portfolio</title>
      <body >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
