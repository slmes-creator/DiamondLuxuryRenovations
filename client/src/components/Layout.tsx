import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-['Montserrat',sans-serif]">
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
