import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
