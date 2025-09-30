import './globals.css';
import React from 'react';

export const metadata = {
  title: 'EasyASTA',
  description: 'Apply for your ESTA to visit the United States',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
