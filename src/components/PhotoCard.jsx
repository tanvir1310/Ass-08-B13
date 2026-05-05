"use client";

import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const PhotoCard = ({ photo }) => {
  //
  if (!photo) return null;

  return (
    <Card className="border-none bg-white/80 backdrop-blur-md shadow-sm rounded-3xl p-4 hover:shadow-xl transition-all duration-300 group">
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={photo.image || photo.imageUrl || "/placeholder.jpg"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={photo.name || "Product"}
          className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
        />
        <Chip
          size="sm"
          className="absolute right-2 top-2 bg-white/90 font-bold border-none z-10"
        >
          {photo.category || "Summer"}
        </Chip>
      </div>

      <div className="px-1 py-4 space-y-2">
        <h2 className="font-bold text-slate-900 text-lg line-clamp-1">
          {photo.name}
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FACC15"
              stroke="#FACC15"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-sm font-bold text-slate-600">
              {photo.rating || "0.0"}
            </span>
          </div>

          <div className="w-[1px] h-4 bg-slate-200" />

          <span className="text-lg font-black text-orange-600">
            ${photo.price}
          </span>
        </div>
      </div>

      <Link href={`/all-photo/${photo.id}`} className="w-full block">
        <Button className="w-full bg-slate-950 text-white font-bold rounded-xl py-6 hover:bg-orange-600 transition-colors">
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default PhotoCard;
