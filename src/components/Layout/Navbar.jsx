import { useRouter } from "next/navigation";
import React from "react";
import ButtonBar from "../shared/ButtonBar";

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
      <ul className="w-1/2 justify-between gap-2 items-center cursor-pointer hidden sm:flex">
        {navlinks.map((navlink, index) => (
          <li key={index} onClick={() => router.push(navlink.href)}>
            {navlink.name}
          </li>
        ))}
      </ul>
      <div className="w-8 h-8 border  sm:hidden">
        <ButtonBar />
      </div>
    </nav>
  );
}

export default Navbar;
