import { useRef } from "react";
import jobs from "../data/Jobs";

import OpenPositions from "../components/OpenPositions";
import PositionDetails from "../components/PositionsDetails";

export default function Careers() {
  const refs = jobs.reduce((acc, job) => {
    acc[job.slug] = useRef(null);
    return acc;
  }, {});

  return (
    <div className="w-full">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-bold text-[#ffd736] tracking-tight">
          Careers
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join the mission. Help secure the digital world.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-5 py-1 flex flex-col md:flex-row gap-12 items-center">
        <img
          src="/images/oppertunity.png"
          alt="Opportunity"
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
        />

        <div className="md:w-1/2">
          <h2 className="text-4xl text-[#ffd736] text-left font-bold mb-4">
            Opportunity Knocks
          </h2>
          <p className="text-lg text-left leading-relaxed">
            At DIVD.Academy, we are always looking for passionate and talented
            individuals to join our team. Our organization offers a variety of
            positions in areas such as cybersecurity research, software
            development, education, and community engagement. We seek candidates
            who are dedicated to making the digital world safer and more secure.
            By joining DIVD.Academy, you will be part of a dynamic and
            innovative team that is committed to excellence and continuous
            learning. Explore our available positions today and find out how you
            can contribute to a safer cyber environment while advancing your
            career with us.
          </p>
        </div>
      </section>

      <div className="h-0.5 max-w-7xl bg-white my-15 mx-auto rounded"></div>

      <OpenPositions refs={refs} />

      <section className="max-w-7xl mx-auto px-6 md:flex-row gap-12 items-center">
        <p className="text-lg text-left leading-relaxed">
          At DIVD.Academy, our mission is to enhance knowledge, skills, and
          ethical awareness in cybersecurity while fostering inclusivity and
          connecting young talent. We provide a safe and collaborative
          environment for both novice and experienced researchers to learn from
          each other, creating a unique niche in 21st-century IT education,
          research, and security. Recognizing the growing interest in
          cybersecurity and the need for proper training, we aim to guide young
          talent who may lack digital boundaries and ethical understanding. Our
          strategy focuses on training the next generation of hackers and
          raising cybersecurity awareness, ensuring they are well-prepared for
          the digital world while promoting a culture of inclusivity and
          diversity.
        </p>
      </section>

      <div className="h-0.5 max-w-7xl bg-white my-15 mx-auto rounded"></div>

      <section className="max-w-7xl mx-auto px-5 md:flex-row gap-12 items-center">
        <div
          className="career-card group relative overflow-hidden gap-12 flex flex-col md:flex-row 
               p-6 rounded-xl bg-[#161615] border border-gray-700 
               shadow-lg hover:shadow-2xl transition-all duration-500 
               hover:border-[#ffd736] transform hover:-translate-y-2 mb-10"
        >
          {/* Hover Glow Overlay */}
          <div
            className="absolute inset-0 bg-linear-to-br from-[#ffd736]/10 to-transparent 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-6">
            <img
              src="/images/career6.png"
              className="w-full md:w-1/3 h-auto rounded-lg mb-4 
                   transform group-hover:scale-105 transition-transform duration-500"
              alt=""
            />

            <div className="flex-1">
              <li
                className="text-xl text-left font-semibold mb-2 list-none underline cursor-pointer text-[#ffd736]
                     transform group-hover:scale-100 transition-transform duration-300"
              >
                Ethics committee
              </li>

              <p className="text-gray-300 text-lg text-left leading-relaxed">
                As a member of the Ethics Committee at the DIVD Academy
                foundation, you actively contribute to promoting ethical
                standards and values in the broad domain of digital security,
                preventing the abuse of vulnerabilities, and safeguarding the
                Code of Conduct. Your role is essential in assessing ethical
                issues related to digital vulnerabilities, disclosure, and
                research practices, as well as understanding the synergy between
                ethics and cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-0.5 max-w-7xl bg-white my-15 mx-auto rounded"></div>

      <PositionDetails refs={refs} />
    </div>
  );
}
