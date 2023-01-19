import '../styles/globals.css'
import Navbar from './components/Navbar';
import Providers from './Providers';
import { Explora, Comfortaa, } from "@next/font/google";

const explora = Explora({
  variable: "--explora-font",
  weight: ['400'],
  subsets: ['latin'],
});

const comfortaa = Comfortaa({
  variable: "--comfortaa-font",
  weight: ['500'],
  subsets: ['latin'],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${explora.variable} ${comfortaa.variable}`}>
      <head />
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>

      </body>
    </html>
  );
}

