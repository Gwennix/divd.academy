// components/OpenPositions.jsx
import jobs from "../data/Jobs";
import { scroller } from "react-scroll";

export default function OpenPositions({ refs }) {
  return (
    <section className="max-w-7xl mx-auto pb-15">
      <h2 className="text-3xl font-bold mb-10 text-[#ffd736] text-center">
        Open Positions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="group relative overflow-hidden p-1 rounded-xl bg-[#161615] border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-[#ffd736] transform hover:-translate-y-2"
          >
            {" "}
            {/* Hover Glow Overlay */}{" "}
            <div className="absolute inset-0 bg-linear-to-br from-[#ffd736]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>{" "}
            <div className="relative z-10 p-4">
              {" "}
              <img
                src={job.image}
                className="w-full h-auto rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-500"
                alt=""
              />{" "}
              <li
                className="text-xl font-semibold mb-2 list-none underline cursor-pointer text-[#ffd736] transform group-hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  scroller.scrollTo(job.slug, {
                    smooth: true,
                    offset: -50,
                    duration: 500,
                  });
                }}
              >
                {" "}
                {job.title}{" "}
              </li>{" "}
              <p className="text-gray-300">{job.text}</p>{" "}
            </div>{" "}
          </div>
        ))}
      </div>
    </section>
  );
}
