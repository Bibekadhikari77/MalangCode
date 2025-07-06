"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";

import {
  HiHome,
  HiQuestionMarkCircle,
  HiX,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { GrServices } from "react-icons/gr";
import { FiSun, FiMoon } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { FaDiagramProject } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "/", icon: HiHome },
  { name: "About", href: "#about", icon: HiQuestionMarkCircle },
  { name: "Service", href: "#service", icon: GrServices },
  { name: "Contact", href: "#contact", icon: IoMdContact },
  { name: "Project", href: "#project", icon: FaDiagramProject },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  //Initial theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setIsDarkMode(true);
  }, []);

  // Apply theme via data-theme
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <>
      <nav className="shadow-md sticky top-0 z-50" style={{backgroundColor:"var(--bg-color)"}}>
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 dark:text-white tracking-tight" style={{color:"var(--text-color)"}}
          >
            MalangCode
          </Link>

          {/* Centered Nav Links */}
          <div className="hidden md:flex items-center justify-center gap-x-15 mx-auto">
            {navLinks.map(({ name, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col items-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                >
                  <div
                    className={cn(
                      "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200",
                      isActive
                        ? "bg-blue-600 text-white shadow"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                    )}
                  >
                    <Icon className="text-lg" />
                  </div>
                  <span className="mt-[6px]" style={{color:"var(--text-color)"}}>{name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="md:flex items-center gap-4 hidden">
            <button
              onClick={() =>{
                setIsDarkMode(!isDarkMode)
              }}
              className="text-xl bg-gray-100  w-10 h-10 justify-center items-center flex rounded-full text-gray-600 dark:text-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
              title="Toggle dark mode"
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={()=>setIsDarkMode(!isDarkMode)}
              className="text-xl text-gray-700 dark:text-gray-300"
              title="Toggle dark mode"
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button
              onClick={toggleSidebar}
              className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition duration-200 flex items-center justify-center"
            >
              <HiOutlineUserCircle className="text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-400">
            MalangCode
          </h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-red-500"
          >
            <HiX className="text-2xl" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {isSmallScreen &&
            navLinks.map(({ href, name, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={toggleSidebar}
                  className="flex items-center space-x-3 px-3 py-2 transition"
                >
                  <div
                    className={cn(
                      "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200",
                      isActive
                        ? "bg-blue-600 text-white shadow"
                        : "bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700"
                    )}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <span>{name}</span>
                </Link>
              );
            })}
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40" onClick={toggleSidebar} />
      )}
    </>
  );
}
