import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="/">Homepage</Link>
      <Link href="/favorite">Favorites</Link>
      <Link href="/art-pieces/">Gallery</Link>
    </div>
  );
}
