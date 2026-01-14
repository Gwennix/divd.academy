import { useEffect, useState } from "react";

const RSSFeed = ({ feedUrl, maxItems = 6 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(feedUrl);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        const latestItems = (data.items || []).slice(0, maxItems);

        const mappedPosts = latestItems.map((item) => {
          const imageUrlMatch = item.content.match(/<img src="([^"]+)"/);
          return {
            title: item.title,
            subtitle: item.description || "No subtitle provided",
            link: item.link,
            imageUrl: imageUrlMatch ? imageUrlMatch[1] : "",
          };
        });

        setPosts(mappedPosts);
      } catch (err) {
        console.error("Failed to fetch RSS feed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [feedUrl, maxItems]);

  if (loading) return <p>Loading latest posts...</p>;
  if (error) return <p className="text-red-500">Failed to load the latest posts.</p>;
  if (!posts.length) return <p>No posts available.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <a
          key={index}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
        >
          {post.imageUrl && (
            <div>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-24 object-cover"
              />
            </div>
          )}
          <div className="p-5 post_meta_data">
            <h3 className="text-lg text-amber-300 font-semibold mb-2">{post.title}</h3>
            <p className="text-white text-sm">{post.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RSSFeed;






