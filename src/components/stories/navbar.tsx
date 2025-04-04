import Link from "next/link";
import { NavLinks } from "./navLinks";
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="shadow-md bg-violet-100 fixed z-40 h-15 w-full">
      <div className="flex justify-between p-4">
        <Link className="" href="/">
          <div className="w-32">ロゴ</div>
        </Link>
        <div className="flex gap-4">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};
