import Link from "next/link";

export default function navbar() {
  return (
    <nav className="bg-white p-5 text-black place-items-center">
      <ul className="flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
