// components/PositionDetails.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { normalizeMarkdown } from "./NormalizeMarkdown";
import jobs from "../data/Jobs";

const markdownComponents = {
  h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-medium mb-2">{children}</h3>
  ),
  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-white hover:text-blue-800 underline">
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
};

export default function PositionDetails({ refs }) {
  return (
    <section className="max-w-7xl text-left mx-auto pb-15">
      <div className="grid grid-cols-1 gap-10">
        {jobs.map((job) => (
          <div
            key={job.slug}
            ref={refs[job.slug]}
            id={job.slug}
            className=" rounded-xl transition-shadow duration-300 "
          >

            <img
              src={job.image2}
              className=" h-auto mb-5 rounded-lg"
              alt={job.title}
            />

            <h1 className="text-4xl text-[#ffd736] font-semibold mb-5 wrap-break-words">
              {job.title}
            </h1>

            <div>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {normalizeMarkdown(job.description)}
              </ReactMarkdown>
            </div>

            <a href="https://the.divd.academy/careers/apply" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#ffd736] cursor-pointer text-black mt-5 px-8 py-2 rounded-lg hover:bg-[#ffd736]/80 transition-colors duration-300">
                Apply here
              </button>
            </a>

            <div className="h-0.5 max-w-7xl bg-white my-10 mx-auto rounded"></div>

          </div>
        ))}
      </div>
    </section>
  );
}
