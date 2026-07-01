import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Form Studio — Brand Identity Studio',
  description:
    'Form Studio is a London-based brand identity studio. Strategy. Identity. Motion. Web. Everything your brand needs to compete.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
    apple: '/icons/icon-192x192.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Form Studio',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    title: 'Form Studio — Brand Identity Studio',
    description:
      'Form Studio is a London-based brand identity studio. Strategy. Identity. Motion. Web.',
    siteName: 'Form Studio',
  },
};

export const viewport: Viewport = {
  themeColor: '#f5f4f2',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
