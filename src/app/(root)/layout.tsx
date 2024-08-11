import "../globals.css";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Navbar />
      <div className="pt-[52px] h-screen w-full container">
        {children}
      </div>
    </>
  );
}
