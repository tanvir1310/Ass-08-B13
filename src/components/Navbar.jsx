"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, LogOut, User } from "lucide-react";
// Import your auth client (BetterAuth)
// import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Fake session state for design (Replace with your BetterAuth logic)
  const session = null; // authClient.useSession().data

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/all-photo" },
    { name: "My Profile", href: "/profile" },
  ];

  const handleLogout = async () => {
    // await authClient.signOut();
    console.log("Logged out");
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
          <ul className="hidden md:flex items-center gap-8 text-[15px] font-semibold">
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
              {session ? (
                <div className="flex items-center gap-4">
                  {/* User Avatar */}
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 group"
                  >
                    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-200 group-hover:border-orange-500 transition-all">
                      <img
                        src={
                          session.user.image ||
                          "https://ui-avatars.com/api/?name=User"
                        }
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 text-sm font-medium text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="text-sm font-bold text-gray-700 hover:text-orange-600 transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition shadow-md shadow-orange-200 active:scale-95"
                  >
                    Register
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
          <div className="md:hidden border-t border-orange-50 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
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
              {session ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    <img
                      src={session.user.image}
                      className="w-10 h-10 rounded-full"
                      alt="User"
                    />
                    <span className="font-bold text-gray-700">
                      {session.user.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-red-50 text-red-600 rounded-xl font-bold"
                  >
                    <LogOut size={20} /> Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/signin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 border-2 border-orange-500 text-orange-600 rounded-xl font-bold"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-200"
                  >
                    Register Now
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
