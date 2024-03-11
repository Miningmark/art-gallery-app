import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="/">Homepage</Link>
      <Link href="/favorites">Favorites</Link>
      <Link href="/art-pieces/">Gallery</Link>
    </div>
  );
}
