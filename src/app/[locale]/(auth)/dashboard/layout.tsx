export default function DashboardLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">
              FEVR Dashboard
            </h1>
            <h2 className="text-xl">VR Casino Gaming Platform</h2>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {`© Copyright ${new Date().getFullYear()} FEVR. `}
          VR Casino Gaming Platform
        </footer>
      </div>
    </div>
  );
}
