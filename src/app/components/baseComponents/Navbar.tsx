"use client";

import { Github, Instagram, Linkedin, LucideIcon, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

// Inside Navbar component

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT ME", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];
const SocialLink = ({
  icon: Icon,
  href,
  label,
}: {
  icon: LucideIcon;
  href: string;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 border border-gray-300 rounded-full transition-colors hover:bg-gray-100"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a className="text-xl font-semibold tracking-wider font-['Segoe_UI']">
                PORTFOLIO<span className="text-gray-400">.</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 z-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 py-1 border border-gray-300 rounded-[30px] transition-colors ${
                    pathname === item.href
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-1 z-10">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.label}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden ml-auto">
              <button className="ghost" onClick={toggleMenu}>
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <div className="flex flex-col space-y-4 m-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium hover:text-gray-600 font-['Segoe_UI']"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="flex space-x-4 mt-4">
                      {socialLinks.map((social) => (
                        <SocialLink
                          key={social.label}
                          icon={social.icon}
                          href={social.href}
                          label={social.label}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
