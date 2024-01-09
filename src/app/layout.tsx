import './index.css';

export const metadata = {
  title: 'BlazeBooks',
  description:
    'A bookstore app to showcase front-end development skills as part of the BlazeSoft interview process.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
