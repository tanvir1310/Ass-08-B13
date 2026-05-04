import Image from "next/image";
import Link from "next/link";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  // ডাটা ফেচিং
  const res = await fetch("https://ass-08-b13.vercel.app/data.json", {
    next: { revalidate: 3600 },
  });
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);

  if (!photo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Link href="/" className="mt-4 text-orange-600 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 capitalize">{photo.category}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* --- Left: Image Gallery --- */}
          <div className="flex-1">
            <div className="sticky top-10">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100">
                <Image
                  src={photo.image || photo.imageUrl}
                  alt={photo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* --- Right: Product Info --- */}
          <div className="flex-1 py-4">
            {/* Header */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 text-xs font-black uppercase tracking-widest rounded-full">
                Summer Collection 2026
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {photo.name || photo.title}
              </h1>

              <div className="flex items-center gap-4">
                <p className="text-3xl font-black text-slate-900">
                  ${photo.price}
                </p>
                <div className="h-6 w-[1.5px] bg-slate-200"></div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <span className="text-lg">⭐</span>
                  <span className="font-bold">{photo.rating}</span>
                  <span className="text-slate-400 text-sm font-medium">
                    (48 Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-10 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Product Overview
              </h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                {photo.description ||
                  photo.prompt ||
                  "Elevate your summer style with this premium essential. Crafted with high-quality materials to ensure comfort and durability throughout the sunny season."}
              </p>
            </div>

            {/* Selection (Size/Color) Placeholder */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-4 border-2 border-slate-900 rounded-2xl">
                <p className="text-[10px] font-black text-slate-400 uppercase">
                  Selected Color
                </p>
                <p className="font-bold text-slate-900">Ocean Blue</p>
              </div>
              <div className="p-4 border-2 border-slate-100 rounded-2xl">
                <p className="text-[10px] font-black text-slate-400 uppercase">
                  Size
                </p>
                <p className="font-bold text-slate-900">Standard</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button className="flex-[3] bg-slate-900 text-white font-black py-6 rounded-2xl hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-slate-900/10 active:scale-[0.98]">
                Add to Shopping Cart
              </button>
              <button className="flex-1 border-2 border-slate-100 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-colors group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:text-red-500 transition-colors"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 border-t border-slate-100 pt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-xl">
                  📦
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-900 tracking-tight">
                    Free Shipping
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    On orders over $100
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-xl">
                  ♻️
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-900 tracking-tight">
                    Easy Returns
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    30-day return policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
