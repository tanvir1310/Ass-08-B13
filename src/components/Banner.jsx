import { Button } from "@heroui/react";
import Link from "next/link";
import { ShoppingBag, Sparkles, Sun, Timer } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[600px] md:h-auto overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] group mx-auto">
      {/* 🔹 Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1506466010722-395aa2bef877?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-110" />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      {/* 🔹 Content Area */}
      <div className="relative z-10 min-h-[600px] md:h-[75vh] flex items-center px-6 sm:px-12 md:px-20 max-w-7xl mx-auto py-16 md:py-0">
        <div className="max-w-3xl text-white space-y-6 md:space-y-8 text-center md:text-left">
          {/* Badge - Mobile-এ সেন্টারে আনার জন্য mx-auto */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-orange-500/10 border border-orange-500/20 backdrop-blur-xl mx-auto md:mx-0">
            <div className="bg-orange-500 p-1 rounded-full animate-pulse">
              <Sun size={14} className="text-white fill-current" />
            </div>
            <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-orange-400">
              Midnight Summer Series
            </span>
          </div>

          {/* Main Headline - Font Size Responsive করা হয়েছে */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.1] md:leading-none tracking-tighter uppercase">
              Beyond the <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-200 to-orange-500">
                Horizon
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm md:text-xl text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
            Explore premium summer essentials designed for the bold. Shop our
            latest collection of luxury eyewear and tropical apparel.
          </p>

          {/* 🔹 CTA Buttons - Mobile-এ ফুল উইডথ বাটন */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-5 pt-4">
            <Link href="/products" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-black h-14 md:h-16 px-10 rounded-2xl shadow-[0_15px_30px_-5px_rgba(249,115,22,0.4)] group/btn text-md border-none"
                endContent={
                  <ShoppingBag
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                }
              >
                Shop Now
              </Button>
            </Link>

            <Link href="/offers" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="bordered"
                className="w-full sm:w-auto border-white/20 text-white font-bold h-14 md:h-16 px-10 rounded-2xl backdrop-blur-md hover:bg-white hover:text-black transition-all text-md"
                startContent={<Sparkles size={20} />}
              >
                View Offers
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Floating Dark Promo Card - Mobile এবং Tab-এ হাইড করা হয়েছে (Space বাঁচানোর জন্য) */}
      <div className="absolute bottom-8 right-8 hidden xl:flex items-center gap-5 bg-black/40 backdrop-blur-3xl p-6 rounded-[2rem] border border-white/5 shadow-2xl transition-all duration-500 hover:border-orange-500/30 hover:-translate-y-2">
        <div className="h-14 w-14 bg-orange-600/20 rounded-2xl flex items-center justify-center border border-orange-500/30">
          <Timer className="text-orange-500" size={32} />
        </div>
        <div>
          <p className="text-white font-black text-2xl leading-none">50% OFF</p>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
            Limited Night Sale
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
