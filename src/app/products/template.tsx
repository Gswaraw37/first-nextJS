"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="flex text-sm text-blue-300 gap-4">
        <Link
          className={pathname === "/products/fashion" ? "text-red-200" : ""}
          prefetch={false}
          scroll={false}
          href={"/products/fashion"}
        >
          Fashion
        </Link>
        <Link
          className={pathname === "/products/sport" ? "text-red-200" : ""}
          replace={true}
          href={"/products/sport"}
        >
          Sports
        </Link>
        <Link
          className={pathname === "/products/technology" ? "text-red-200" : ""}
          href={"/products/technology"}
        >
          Technology
        </Link>
      </ul>
      {children}
    </>
  );
}
