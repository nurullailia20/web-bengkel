import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
