"use client";

import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  MessageSquareIcon,
  PhoneCallIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";

export const currentTime = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

const socialLinks = [
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    url: "https://twitter.com/yourusername",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://instagram.com/yourusername",
  },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/contact" ? (
        <div className="flex flex-col">
          <Separator />
          <div className="container mx-auto">
            <div className="flex flex-col py-8 md:flex-row  mx-auto gap-6 justify-between items-center">
              <p>
                © {new Date().getFullYear()} Wendy Edem Ahadome ——{" "}
                <span className="text-foreground italic">
                  {currentTime} GMT
                </span>
              </p>
              <div>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-20">
          <Separator />
          <div className="px-4 lg:max-w-6xl mx-auto">
            <h1 className="text-xl text-center md:text-4xl font-semibold">
              Let&apos;s work together to create something amazing!
            </h1>
            <div className="pt-10 px-4 flex items-center justify-center gap-8">
              <Link
                className="block"
                href="https://calendly.com/wendyyahadome/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full group flex justify-center items-center gap-2 bg-primary px-6 py-3">
                  <PhoneCallIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Book a call
                </Button>
              </Link>
              <Link className="block" href="/contact">
                <Button className="rounded-full group flex justify-center items-center gap-2 bg-primary px-6 py-3">
                  <MessageSquareIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Contact me
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="container mx-auto">
              <Separator />
              <div className="flex flex-col py-8 md:flex-row  mx-auto gap-6 justify-between items-center">
                <p>
                  © {new Date().getFullYear()} Wendy Edem Ahadome —{" "}
                  <span className="text-foreground italic">
                    {currentTime} GMT
                  </span>
                </p>
                <div>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
