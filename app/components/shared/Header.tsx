import { Bug } from "lucide-react";
import Link from "next/link";
import Container from "./Container";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { getUser } from "@/lib/user";
import { User } from "@prisma/client";

const Header = async () => {
  const user = (await getUser()) as { user: User };

  return (
    <header className="h-16 border-b shadow-sm">
      <Container className="flex justify-between items-center">
        <div className="space-x-6 flex items-center">
          <Link href="/">
            <Bug />
          </Link>
          <NavLinks />
        </div>
        
        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>

        {user && <UserButton />}
      </Container>
    </header>
  );
};

export default Header;
