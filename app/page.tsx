import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Link href="/issues/new/">
        <Button>New Issue</Button>
      </Link>
    </main>
  );
}
