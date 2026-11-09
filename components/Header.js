"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !overHero || scrolled;

  return (
    <header
      className={`site-header${solid ? " is-solid" : ""}${open ? " is-open" : ""}`}
    >
      <div className="header-bar">
        <Link href="/" className="logo-link" aria-label="Ryan Lo, home">
          <img src="/images/logo.png" alt="Ryan Lo" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "is-active" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
      <nav className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Mobile">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "is-active" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
