"use client";
import { Bug } from "lucide-react";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const routes = [
  { path: "/", name: "Dashboard" },
  { path: "/issues", name: "Issues" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className="h-16 border-b shadow-sm">
      <Container className="flex justify-between items-center">
        <div className="space-x-6 flex items-center">
          <Link href="/">
            <Bug />
          </Link>
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
        </div>
        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Container>
    </header>
  );
};

export default NavBar;
