import {ReactNode} from 'react';

export default function PagesLayout({
                                      children,
                                    }: Readonly<{
  children: ReactNode;
}>) {
  return <section>{children}</section>;
}
