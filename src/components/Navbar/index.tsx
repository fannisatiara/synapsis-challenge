"use client";
import { FC } from "react";
import { TypeNavbar } from "@/data/Type/type-navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar: FC<TypeNavbar> = (props) => {
  const pathname = usePathname();
  const style = (path: string) => {
    return pathname === path ? "font-bold text-yellow-500" : "";
  };
  return (
    <div className="gap-5 flex justify-around px-2.5 py-2.5 w-full ">
      {props.menu.map((e) => (
        <div key={e} className="focus:font-bold hover:font-bold hover:text-yellow-500"> 
          {e === "Posts" ? (
            <Link className={style("/")} href={"/"}>
              {e}
            </Link>
          ) : (
            <Link
              className={style(`/${e.toLowerCase()}`)}
              href={`/${e.toLowerCase()}`}
            >
              {e}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
