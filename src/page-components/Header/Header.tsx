import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import data from "@/data/projects.json";

export const Header: FC = () => {
  const { pathname } = useRouter();
  return (
    <header className="bg-gray-900 bg-opacity-70 py-4 fixed top-0 left-0 w-full z-10">
      <div className="container ">
        <nav className="flex justify-evenly flex-wrap items-center gap-4">
          {data.navigate.navLink.map(({ link }) => (
            <Link
              className={`font-semibold text-lg ${
                pathname === link.url ? "text-red-500" : "text-gray-300"
              }`}
              key={link.title}
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
          <ScrollLink
            className="font-semibold text-lg text-gray-300 cursor-pointer"
            to={data.navigate.scrollLink.url}
            smooth={true}
            duration={500}
          >
            {data.navigate.scrollLink.title}
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};
