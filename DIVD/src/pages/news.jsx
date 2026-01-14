import images from "../images";
import RSSFeed from "../components/RSSFeed";

export default function News() {
  const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fastrido.substack.com%2Ffeed`;

  return (
    <div className="page-container p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">News</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.imageSrc}
                alt={img.name}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
          <RSSFeed feedUrl={feedUrl} maxItems={3} />
        </div>
      </div>
    </div>
  );
}

