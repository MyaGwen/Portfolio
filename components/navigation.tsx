"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "./themeToggle";

import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Case Studies", path: "/case-studies" },
  { name: "Resume", path: "/resume" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();

  const NavLinks = (
    <div className="flex flex-col md:flex-row items-center gap-4">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={cn(
            "relative px-3 py-2 text-xl md:text-lg transition-all",
            pathname === item.path
              ? "text-primary font-semibold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {item.name}
          {pathname === item.path && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 w-full bg-foreground"
              layoutId="navbar-underline"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm shadow-md dark:shadow-sm dark:shadow-primary">
      <div className="max-w-7xl mx-auto md:px-4 px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-4xl font-semibold mr-auto cursor-pointer"
          >
            M<span className="-ml-2">G</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {NavLinks}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="h-7 w-7 cursor-pointer transition-transform hover:scale-110" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background w-[70%] h-full flex flex-col justify-center items-center gap-6"
              >
                {/* Close Button */}
                <div className="absolute top-4 right-4">
                  <SheetTrigger asChild>
                    <X className="h-6 w-6 cursor-pointer text-muted-foreground hover:text-foreground" />
                  </SheetTrigger>
                </div>

                {/* Navigation Links */}
                {NavLinks}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
