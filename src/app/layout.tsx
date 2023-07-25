import Header from '@/components/Header/Header';
import './globals.scss';

export const metadata = {
  title: 'Sralnik',
  description: 'Chisto prikol`chik)))',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={`container`}>{children}</main>
      </body>
    </html>
  );
}
