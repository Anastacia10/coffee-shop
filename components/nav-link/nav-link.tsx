"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { joinClasses } from "utils/joinClasses";
import { INavLinkProps } from "./type";
import styles from "./nav-link.module.scss";

export const NavLink = ({ href, children }: INavLinkProps) => {
  const path = usePathname();
  const isActiveLink = path.startsWith(href);

  return (
    <Link
      href={href}
      className={joinClasses(styles.navLink, { active: isActiveLink })}
    >
      {children}
    </Link>
  );
};
