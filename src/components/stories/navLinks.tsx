"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FC } from "react";
import { links } from "@/utils/stories/const";

export const NavLinks: FC = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={clsx("", {
              "bg-sky-100 text-blue-600": pathname === link.href,
            })}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};
