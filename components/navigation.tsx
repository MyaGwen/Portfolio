"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "./themeToggle";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

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
            "relative px-3 py-2 text-lg transition-colors",
            pathname === item.path
              ? "text-foreground font-semibold"
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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-4xl font-semibold mr-auto cursor-pointer"
          >
            M<span className="-ml-2">G</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            {NavLinks}
          </div>

          {/* Theme Toggle for Desktop */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="h-6 w-6 cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <SheetHeader className="mt-10">{NavLinks}</SheetHeader>
                <div className="mt-4 flex justify-center">
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
