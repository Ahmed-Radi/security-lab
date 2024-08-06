"use client";

import { NavbarLink, DropdownListProps } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DropdownList = ({
  listItems,
  isOpenDropdown,
  sidebar = false,
}: DropdownListProps) => {
  const pathname = usePathname().slice(1);

  return (
    <ul
      className={cn(
        `flex flex-col bg-white min-w-max shadow-md rounded-md top-14 left-0 z-50`, {
        absolute: isOpenDropdown === true,
        hidden: isOpenDropdown === false,
        "h-auto sticky flex": sidebar,
      }
      )}>
      {listItems.map(({ name, href }: NavbarLink) => (
        <li
          className={cn(
            "text-black text-lg font-semibold py-3 px-3 hover:bg-gray-100", {
            "text-blue-400": pathname.toLowerCase().includes(name.toLowerCase()),
          }
          )}
          key={name}>
          <Link
            href={href}
            className={sidebar ? "truncate inline-block w-[138px]" : ""}
            title={name}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownList;
