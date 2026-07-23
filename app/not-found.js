import Link from "next/link";
import { Arrow } from "./components";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>This idea<br />moved elsewhere.</h1>
      <p>The page you requested could not be found.</p>
      <Link href="/">Return home <Arrow /></Link>
    </main>
  );
}
