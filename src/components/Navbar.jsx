"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // BetterAuth Session Logic
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/all-photo" },
    { name: "My Profile", href: "/profile" },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    setIsOpen(false);
  };

  return (
    <header className="border-b border-orange-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 🔹 Logo: SunCart Theme */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-orange-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Sun className="text-white w-6 h-6 fill-current" />
            </div>
            <h3 className="font-black text-2xl tracking-tighter text-gray-900">
              Sun<span className="text-orange-500">Cart</span>
            </h3>
          </Link>

          {/* 🔹 Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] font-bold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-orange-600"
                      : "text-gray-600 hover:text-orange-500"
                  } transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* 🔹 Auth Section */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-4">
                  {/* User Profile */}
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 group"
                  >
                    <Avatar size="sm">
                      <Avatar.Image
                        alt="John Doe"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                      />
                      <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-xs font-black text-gray-900 leading-none">
                        {user?.name}
                      </p>
                      <p className="text-[10px] text-gray-500 font-bold">
                        Customer
                      </p>
                    </div>
                  </Link>

                  <Button
                    onClick={handleLogout}
                    variant="danger"
                    size="sm"
                    className="font-bold"
                    startContent={<LogOut size={16} />}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="text-sm font-bold text-gray-700 hover:text-orange-600 transition"
                  >
                    Sign in
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-orange-500 text-white font-bold rounded-full px-6 shadow-md shadow-orange-100 hover:bg-orange-600">
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-orange-50 py-6 space-y-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-lg font-bold transition-all ${
                    pathname === link.href
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:bg-orange-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <hr className="border-orange-50 mx-4" />

            <div className="px-4">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl border border-orange-100">
                    <Avatar
                      size="md"
                      src={
                        user?.image ||
                        "https://ui-avatars.com/api/?name=" + user?.name
                      }
                    />
                    <span className="font-bold text-gray-800">
                      {user?.name}
                    </span>
                  </div>
                  <Button
                    onClick={handleLogout}
                    fullWidth
                    color="danger"
                    variant="flat"
                    className="font-bold py-6 rounded-xl"
                    startContent={<LogOut size={20} />}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/signin" onClick={() => setIsOpen(false)}>
                    <Button
                      fullWidth
                      variant="bordered"
                      color="warning"
                      className="font-bold py-6 border-2"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <Button
                      fullWidth
                      className="bg-orange-500 text-white font-bold py-6 shadow-lg shadow-orange-200"
                    >
                      Register Now
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
