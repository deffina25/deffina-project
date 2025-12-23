import type { ReactNode } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}
