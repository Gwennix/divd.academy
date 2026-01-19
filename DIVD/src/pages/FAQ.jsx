import { useState } from 'react';
import faq1 from '../assets/faq1.png';
import faq2 from '../assets/faq2.png';
import faq3 from '../assets/faq3.png';
import FAQList from '../components/Faqmapper';

export default function FAQ() {
  const [category, setCategory] = useState(null);
  const [language, setLanguage] = useState("nl");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "nl" ? "en" : "nl"));
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <div className="flex items-center justify-between w-full max-w-6xl mb-10">
        <div className='font-bold text-xl'>Frequently Asked Questions</div>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {language === "nl" ? "Switch to English" : "Switch to Dutch"}
        </button>
      </div>

      <div className="flex gap-10 mb-12">
        <div
          className="w-72 h-40 bg-yellow-700 flex items-center justify-center rounded-md cursor-pointer"
          onClick={() => setCategory("academy")}
        >
          <img src={faq1} alt="Academy" className="max-h-full max-w-full" />
        </div>

        <div
          className="w-72 h-40 bg-indigo-500 flex items-center justify-center rounded-md cursor-pointer"
          onClick={() => setCategory("internship")}
        >
          <img src={faq2} alt="Internship" className="max-h-full max-w-full" />
        </div>

        <div
          className="w-72 h-40 bg-green-600 flex items-center justify-center rounded-md cursor-pointer"
          onClick={() => setCategory("partnership")}
        >
          <img src={faq3} alt="Partnership" className="scale-120 max-h-full max-w-full" />
        </div>
      </div>

      <FAQList selectedCategory={category} language={language} />

    </div>
  );
}


