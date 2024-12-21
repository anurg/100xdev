export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
        <div>
          <div className="border-b text-lg text-right">
            Authenticated App Bar
          </div>
          {children}
        </div>
    );
  }