export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <div className="p-4 border-b">
            App Bar Sample
          </div>
          {children}
        </body>
      </html>
    );
  }