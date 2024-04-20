import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const navlinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Product",
      href: "/product",
    },
    {
      name: "Service",
      href: "/service",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Login",
      href: "/login",
    },
  ];
  const router = useRouter();
  return (
    <nav className="w-full h-[60px] border flex justify-between items-center px-6 py-3">
      <div>Bengkel Variasi Mobil</div>
      <ul className="w-1/2 flex justify-between gap-2 items-center cursor-pointer">
        {navlinks.map((navlink, index) => (
          <li key={index} onClick={() => router.push(navlink.href)}>
            {navlink.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
