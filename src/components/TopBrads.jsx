"use client";

const TopBrands = () => {
  const brands = [
    {
      name: "Ray-Ban",
      logo: "RB",
      color: "group-hover:text-red-500",
      glow: "group-hover:shadow-red-500/20",
    },
    {
      name: "Quiksilver",
      logo: "QS",
      color: "group-hover:text-cyan-500",
      glow: "group-hover:shadow-cyan-500/20",
    },
    {
      name: "Oakley",
      logo: "OK",
      color: "group-hover:text-yellow-500",
      glow: "group-hover:shadow-yellow-500/20",
    },
    {
      name: "Nike",
      logo: "NK",
      color: "group-hover:text-orange-500",
      glow: "group-hover:shadow-orange-500/20",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900">
          🏷️ Top Brands
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-400 text-xs uppercase tracking-[0.4em] font-black">
          Official Summer Partners
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`group relative h-40 flex flex-col items-center justify-center bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl ${brand.glow}`}
          >
            {/* Background Accent on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] -z-10 group-hover:from-white group-hover:to-slate-100 transition-all"></div>

            {/* Brand Logo/Text */}
            <span
              className={`text-4xl font-black text-slate-200 transition-all duration-500 tracking-tighter ${brand.color}`}
            >
              {brand.logo}
            </span>

            {/* Brand Name Tag */}
            <div className="mt-4 overflow-hidden h-6">
              <span className="block text-[11px] font-black text-slate-400 uppercase tracking-widest translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {brand.name}
              </span>
            </div>

            {/* Decorative Dot */}
            <div
              className={`absolute bottom-6 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:scale-150 transition-all duration-500 ${brand.color.replace("text", "bg")}`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBrands;
