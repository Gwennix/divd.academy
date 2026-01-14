import RSSFeed from "../components/RSSFeed";

export default function News() {
  const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fastrido.substack.com%2Ffeed`;

  return (
    <div className="page-container p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">News</h1>

      <div className="">
        <div>
          <RSSFeed feedUrl={feedUrl} maxItems={6} />
        </div>
      </div>
    </div>
  );
}

