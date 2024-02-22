"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div>
      {pathName === "/login/loginadmin" ? (
        <li>
          <Link href="/login/loginadmin">Login Admin</Link>
        </li>
      ) : (
        <ul className="login-menu border py-4">
          <li>
            <Link href="/login/loginuser">Login Regular User</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
