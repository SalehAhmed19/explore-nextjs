"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const isLoggedIn = false;
  const router = useRouter();
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      AboutPage <br />
      <Link href="/about/address">Address</Link>
      <button
        className="block cursor-pointer"
        type="button"
        onClick={handleNavigation}
      >
        Address page
      </button>
    </div>
  );
}
