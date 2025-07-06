import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Github, href: "https://github.com" },
  { icon: Mail, href: "mailto:info@malangcoders.com" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border-color)] text-[var(--text-color)] py-10 mt-16" style={{backgroundColor:"var(--bg-color)"}}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-[var(--primary-color)]">Malang Coders</span>
        </div>
        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 text-sm"style={{ color: "var(--text-color)" }}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[var(--primary-color)] transition-colors duration-200">
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Social Icons */}
        <div className="flex space-x-4">
          {socialLinks.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[var(--primary-color)]/10 transition-colors duration-200"
              aria-label="Social link"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-xs mt-8"style={{ color: "var(--text-color)" }}>
        &copy; {new Date().getFullYear()} Malang Coders. All rights reserved.
      </div>
    </footer>
  );
}
