import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-clip">
      <Navbar />
      <main className="flex-grow pt-[84px] md:pt-[96px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
