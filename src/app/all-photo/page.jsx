// import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  console.log(category);
  const res = await fetch("https://ass-08-b13.vercel.app/data.json");
  const photos = await res.json();

  const filteredPhotos = category
    ? photos.filter(
        (photo) => photo.category.toLowerCase() == category.toLowerCase(),
      )
    : photos;

  return (
    <div>
      <h1 className="text-2xl font-bold mt-16 m-4">All Product</h1>

      {/* <Category /> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 max-w-7xl mx-auto">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
