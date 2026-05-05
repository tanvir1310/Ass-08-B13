"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "@heroui/react";
import { ShoppingBag, ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-16 sm:py-24 lg:py-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-200 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 border border-orange-200 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-wider">
                Summer Essentials 2026
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Shine Bright with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                SunCart Deals
              </span>
            </h1>

            <p className="text-lg text-slate-600 font-medium max-w-xl mx-auto lg:mx-0">
              Discover the hottest trends this season. From premium gadgets to
              summer essentials, we bring the sun to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-orange-500 text-white font-bold h-14 px-8 rounded-2xl shadow-xl shadow-orange-200 hover:bg-orange-600 hover:-translate-y-1 transition-all active:scale-95"
              >
                <ShoppingBag size={20} className="mr-2" />
                Shop Now
              </Button>

              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-slate-200 font-bold h-14 px-8 rounded-2xl hover:bg-slate-50 transition-all"
              >
                Learn More
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 border-t border-slate-100">
              <div>
                <p className="text-2xl font-black text-slate-900">50k+</p>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Happy Users
                </p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-black text-slate-900">4.9/5</p>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Ratings
                </p>
              </div>
            </div>
          </div>

          {/* Right Animation (Lottie) */}
          <div className="relative flex justify-center items-center animate-in zoom-in duration-1000">
            <div className="w-full max-w-[500px] h-full relative z-10">
              <DotLottieReact
                src="https://lottie.host/8e317075-87cc-44df-91bd-386008892305/D0D7R0rVfX.lottie" // এনিমেটেড শপিং কার্ট/সান থিম
                loop
                autoplay
              />
            </div>

            {/* Background Circle Decor */}
            <div className="absolute w-[80%] h-[80%] border-2 border-dashed border-orange-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
