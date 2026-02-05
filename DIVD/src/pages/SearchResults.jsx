import React from "react";
import { useLocation, Link } from "react-router-dom";

// All searchable site pages
const siteContent = [
  { id: 1, type: "Page", title: "Home", link: "/" },
  { id: 2, type: "News", title: "News", link: "/News" },
  { id: 3, type: "Page", title: "About Us", link: "/AboutUs" },
  { id: 4, type: "FAQ", title: "FAQ", link: "/FAQ" },
  { id: 5, type: "Careers", title: "Careers", link: "/Careers" },
  { id: 6, type: "Courses", title: "Courses", link: "/Courses" },
  { id: 7, type: "Course", title: "React Basics", link: "/Courses" },
  { id: 8, type: "Course", title: "JavaScript Advanced", link: "/Courses" },
  { id: 9, type: "Course", title: "DIVD Academy Courses", link: "/Courses" },
  { id: 10, type: "News", title: "News Updates", link: "/News" },
  { id: 11, type: "Career", title: "Career at DIVD", link: "/Careers" },
];

export default function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q") || "";

  // Filter site content by query
  const results = siteContent.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Results for <span className="text-indigo-600">"{query}"</span>
      </h2>

      {results.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <ul className="space-y-2">
          {results.map(item => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="block p-4 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-200"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{item.title}</span>
                  <span className="text-sm text-white">{item.type}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
