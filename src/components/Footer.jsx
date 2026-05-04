import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-gray-100 bg-white text-gray-600">
      {/* 🔹 Soft Ambient Glow (Light Version) */}
      <div className="absolute top-0 right-1/4 -z-10 h-64 w-64 rounded-full bg-orange-500/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* 1. Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-orange-500 p-2 shadow-lg shadow-orange-500/20">
                {/* Sun SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </div>
              <h2 className="text-2xl font-black tracking-tighter text-slate-900">
                Sun<span className="text-orange-500">Cart</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed font-medium text-slate-500">
              Your premium destination for summer eyewear and tropical apparel.
              Designed for those who seek the sun.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-900">
              Shop
            </h3>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <Link
                  href="/"
                  className="transition-all hover:text-orange-500 hover:pl-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="transition-all hover:text-orange-500 hover:pl-1"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/offers"
                  className="transition-all hover:text-orange-500 hover:pl-1"
                >
                  Exclusive Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact Details */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-900">
              Contact
            </h3>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Beach Road 12, Cox's Bazar, BD</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-orange-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+880 123 456 789</span>
              </li>
            </ul>
          </div>

          {/* 4. Support */}
          <div>
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-900">
              Help
            </h3>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <Link
                  href="/privacy"
                  className="transition-all hover:text-orange-500 hover:pl-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-all hover:text-orange-500 hover:pl-1"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-all hover:text-orange-500 hover:pl-1"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔹 Bottom Section */}
        <div className="mt-16 border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              © {currentYear} <span className="text-slate-900">SunCart</span>.
              All rights reserved.
            </p>

            {/* Secure Payments Mockup */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mr-2">
                Secure Payments
              </span>
              <div className="flex gap-1.5 opacity-60">
                <div className="h-6 w-9 rounded-md bg-slate-100 border border-slate-200" />
                <div className="h-6 w-9 rounded-md bg-slate-100 border border-slate-200" />
                <div className="h-6 w-9 rounded-md bg-slate-100 border border-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
