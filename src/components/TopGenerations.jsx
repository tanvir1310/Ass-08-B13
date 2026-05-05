import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://ass-08-b13.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 3);

  return (
    <div>
      <h1 className="text-2xl font-bold mt-12">Top Product</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 max-w-7xl mx-auto">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
