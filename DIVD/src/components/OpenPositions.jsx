// components/OpenPositions.jsx
import jobs from "../data/Jobs";

export default function OpenPositions({ refs }) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-15">
      <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 gap-10">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-1 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 bg-[#1C1C1C]"
          >
            <img
              src={job.image}
              className="w-full h-auto rounded-lg mb-4 flex items-center justify-center"
              alt=""
            />
            <li className="text-xl font-semibold mb-2 list-none underline cursor-pointer"
             onClick={() =>
              refs[job.slug].current.scrollIntoView({ behavior: "smooth" })
            }
            >
              {job.title}
            </li>
            <p className="text-white-600">{job.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
