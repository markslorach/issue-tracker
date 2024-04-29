"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// icons
import { Bug } from 'lucide-react';

type NavLink = {
  name: string;
  path: string;
};

const NavBar = () => {
  const navLinks: NavLink[] = [
    { name: "Dashboard", path: "/" },
    { name: "Issues", path: "/issues" },
  ];

  const pathname = usePathname()

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/"><Bug className="w-5 h-5"/></Link>

      <ul className="flex space-x-6">
        {navLinks.map((link, idx) => (
          <li key={idx} className={cn({
            'text-zinc-900' : link.path === pathname,
            'text-zinc-500' : link.path !== pathname,
            "hover:text-zinc-800 transition-colors" : true
          })}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
