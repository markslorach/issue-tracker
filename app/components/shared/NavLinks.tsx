"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  { path: "/", name: "Dashboard" },
  { path: "/issues", name: "Issues" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-6">
        {routes.map((route) => (
          <li
            key={route.path}
            className={cn({
              "text-zinc-500 hover:text-blue-500 transition-colors font-medium":
                true,
              "text-blue-500": pathname === route.path,
            })}
          >
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
