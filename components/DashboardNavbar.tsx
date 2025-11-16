"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useDarkMode } from "../lib/hooks/useDarkMode";
import { 
  Search, 
  Bell, 
  Menu, 
  X, 
  User, 
  Settings, 
  LogOut,
  ChevronDown,
  Sun,
  Moon
} from "lucide-react";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { isDark, toggleDark } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const profileRef = useRef<HTMLDivElement | null>(null);
  const notifRef = useRef<HTMLDivElement | null>(null);

  const navigationLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Goals", href: "/goals" },
    { name: "Roadmaps", href: "/roadmaps" },
    { name: "Community", href: "/community" },
  ];

  const profileMenuItems = [
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Logout", href: "/logout", icon: LogOut },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((v) => !v);
    setIsProfileDropdownOpen(false);
    setIsNotifOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((v) => !v);
    setIsNotifOpen(false);
  };

  const toggleNotif = () => {
    setIsNotifOpen((v) => !v);
    setIsProfileDropdownOpen(false);
  };

  // Close menus on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const t = e.target as Node;
      if (profileRef.current && !profileRef.current.contains(t)) {
        setIsProfileDropdownOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(t)) {
        setIsNotifOpen(false);
      }
    }
    if (isProfileDropdownOpen || isNotifOpen) {
      window.addEventListener("click", onClick);
      return () => window.removeEventListener("click", onClick);
    }
  }, [isProfileDropdownOpen, isNotifOpen]);

  // ESC to close menus
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsProfileDropdownOpen(false);
        setIsNotifOpen(false);
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm dark:bg-slate-900/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center">
                <span className="text-xl font-semibold text-slate-900 dark:text-white">Route F5</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800 ${
                        pathname?.startsWith(link.href)
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side items */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Dark mode toggle */}
              <motion.button
                initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.35 }}
                aria-label="Toggle dark mode"
                onClick={toggleDark}
                className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>
              
              {/* Search Bar */}
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="relative"
              >
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:border-slate-400 transition-colors dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200"
                  />
                </div>
              </motion.div>

              {/* Notification Bell + Dropdown */}
              <motion.div
                ref={notifRef}
                initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="relative"
              >
                <button
                  aria-haspopup="menu"
                  aria-expanded={isNotifOpen}
                  onClick={toggleNotif}
                  className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-colors dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
                <AnimatePresence>
                  {isNotifOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50 dark:bg-slate-900 dark:border-slate-800"
                    >
                      <div className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200">Notifications</div>
                      <div className="px-4 py-2 text-sm text-slate-500 dark:text-slate-400">No new notifications</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Profile Dropdown */}
              <motion.div
                ref={profileRef}
                initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="relative"
              >
                <button
                  onClick={toggleProfileDropdown}
                  aria-haspopup="menu"
                  aria-expanded={isProfileDropdownOpen}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-slate-50 transition-colors dark:hover:bg-slate-800"
                >
                  <div className="h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center dark:bg-slate-700">
                    <User className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                </button>

                <AnimatePresence>
                  {isProfileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-50 dark:bg-slate-900 dark:border-slate-800"
                    >
                      {profileMenuItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={shouldReduceMotion ? undefined : { opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
                            onClick={() => setIsProfileDropdownOpen(false)}
                          >
                            <item.icon className="h-4 w-4 mr-3" />
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-colors dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                onClick={toggleMobileMenu}
              />

              {/* Mobile Sidebar */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl md:hidden z-50 dark:bg-slate-900"
              >
                <div className="flex flex-col h-full">
                  
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xl font-semibold text-slate-900 dark:text-white">Route F5</span>
                    <button
                      onClick={toggleMobileMenu}
                      className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-colors dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Mobile Search */}
                  <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:border-slate-400 transition-colors dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200"
                      />
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex-1 p-4">
                    <nav className="space-y-2">
                      {navigationLinks.map((link, index) => (
                        <motion.div
                          key={link.name}
                          initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            className={`block px-4 py-3 rounded-lg transition-colors ${
                              pathname?.startsWith(link.href)
                                ? "text-slate-900 bg-slate-50 dark:text-white dark:bg-slate-800"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
                            }`}
                            onClick={toggleMobileMenu}
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  {/* Mobile Profile Section */}
                  <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center dark:bg-slate-700">
                        <User className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">John Doe</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">john@example.com</p>
                      </div>
                    </div>
                    
                    <nav className="space-y-1">
                      {profileMenuItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                            onClick={toggleMobileMenu}
                          >
                            <item.icon className="h-4 w-4 mr-3" />
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default DashboardNavbar;
