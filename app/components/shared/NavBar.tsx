"use client";
import { Bug } from "lucide-react";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { path: "/", name: "Dashboard" },
  { path: "/issues", name: "Issues" },
  { path: "create", name: "Create" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className="h-14 border-b">
      <Container className="flex items-center space-x-6">
        <Link href="/">
          <Bug />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {routes.map((route) => (
              <li
                key={route.path}
                className={cn({
                  "text-zinc-500 hover:text-blue-400 transition-colors": true,
                  "text-blue-500": pathname === route.path,
                })}
              >
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default NavBar;
