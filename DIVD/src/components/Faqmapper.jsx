import { useState } from 'react';
import faqdata from '../faqdata';

export default function FAQList({ selectedCategory }) {
  const [query, setQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredFaqs = faqdata.filter((faq) => {
    const matchesQuery =
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      !selectedCategory || faq.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="max-w-3xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search your question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-6 px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="space-y-4">
        {filteredFaqs.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-md bg-gray-900 overflow-hidden"
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
            >
              <h3 className="text-white text-lg font-semibold">{item.question}</h3>
              <span className="text-white font-bold">
                {expandedIndex === index ? '-' : '+'}
              </span>
            </button>

            {expandedIndex === index && (
              <div className="p-4 border-t border-gray-700 whitespace-pre-wrap text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <p className="text-gray-400 text-center">No FAQs match your search.</p>
        )}
      </div>
    </div>
  );
}


