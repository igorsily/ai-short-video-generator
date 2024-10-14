"use client";

import React from "react";
import {
  CircleUser,
  FileVideo,
  PanelsLeftBottom,
  ShieldPlus,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const MenuOptions = () => {
  const menuOptions = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelsLeftBottom,
    },
    {
      id: 2,
      name: "Create Video",
      path: "/dashboard/create-video",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Upgrade",
      path: "/upgrade",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Account",
      path: "/account",
      icon: CircleUser,
    },
  ];

  const pathName = usePathname();
  return (
    <>
      {menuOptions.map(({ id, path, icon: Icon, name }) => (
        <Link
          href={path}
          key={id}
          className={clsx(
            "flex items-center gap-3 p-3 hover:bg-primary hover:text-white hover:rounded-md",
            { "bg-primary text-white rounded-md": pathName === path },
          )}
        >
          <Icon />
          <h2>{name}</h2>
        </Link>
      ))}
    </>
  );
};

export default MenuOptions;
