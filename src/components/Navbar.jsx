"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 🔹 Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <h3 className="font-extrabold text-xl tracking-tight">
            pixgen<span className="text-gray-400">.</span>
          </h3>
        </div>

        {/* 🔹 Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <li>
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-photos" className="hover:text-black transition">
              All Photos
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-black transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-black transition">
              Profile
            </Link>
          </li>
        </ul>

        {/* 🔹 Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
