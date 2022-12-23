import '../styles/globals.css'
import Navbar from './components/Navbar';




export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className='bg-blue-500 overflow-hidden h-screen'>
          <Navbar />
          {children}
      </body>
    </html>
  );
}

