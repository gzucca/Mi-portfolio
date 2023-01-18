import '../styles/globals.css'
import Navbar from './components/Navbar';
import Providers from './Providers';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html >
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

