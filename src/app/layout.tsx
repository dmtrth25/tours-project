import './globals.css';
import { Nunito } from 'next/font/google';

export const metadata = {
  title: 'Tours',
  description: 'Tours description',
};

const nunitoFont = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>{children}</body>
    </html>
  );
}