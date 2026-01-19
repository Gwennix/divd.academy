import { useState } from "react";
import faqdata from '../faqdata';
import faqdataEn from '../faqdata-en';

export default function FAQList({ selectedCategory, language }) {
  const [query, setQuery] = useState("");

  const data = language === "en" ? faqdataEn : faqdata;

  const categoryFiltered = selectedCategory
    ? data.filter(faq => faq.category === selectedCategory)
    : data;

  const searchFiltered = categoryFiltered.filter(faq => {
    const search = query.toLowerCase();
    return (
      faq.question.toLowerCase().includes(search) ||
      faq.answer.toLowerCase().includes(search)
    );
  });

  return (
    <div className="w-full max-w-4xl">

      <input
        type="text"
        placeholder={
          language === "en"
            ? "Search questions or answers..."
            : "Zoek in vragen of antwoorden..."
        }
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-6 px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600"
      />

      <div className="space-y-4">
        {searchFiltered.length === 0 && (
          <p className="text-gray-400">
            {language === "en"
              ? "No results found."
              : "Geen resultaten gevonden."}
          </p>
        )}

        {searchFiltered.map((faq, index) => (
          <details
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-md p-4"
          >
            <summary className="cursor-pointer font-semibold text-white">
              {faq.question}
            </summary>

            <p className="mt-3 text-gray-300 whitespace-pre-wrap">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}




