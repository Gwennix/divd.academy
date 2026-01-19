import { useState } from "react";

export default function AboutUs() {
  // a few of DIVD partners
  const partners = [
    {
      id: "Hackshield",
      name: "Hackshield",
      description:
        "You have probably heard about this, discussed it with your friends or family or seen something on the news",
      more: "The numbers of victims of cyber criminals is rising. That is why these victims need somebody who can protect them, somebody like YOU! We bet you know even more about the internet than some adults do? Have you gotwhat it takes to protect yourself and others around you and do you want to learn everything about hacking and safe internet practices? Than you are the Cyber Agent we're looking for! In HackShield you learn about everything you can do as Cyber Agent to protect your father, mother, siblings and grandparents against cyber criminals.",
    },
    {
      id: "Stichtingcyberbrein",
      name: "Cyberbrein.nl",
      description:
        "You are incredibly skilled with computers, and the online world is your world.",
      more: "You feel completely at home in Roblox and can’t wait to start up the computer. Programming in, for example, Python fascinates you, and you love diving into the code. Then you might have a cyber brain.",
    },
    {
      id: "cisconetworking",
      name: "Cisco Networking Academy",
      description:
        "Cisco Networking Academy is one of the longest-standing IT skills-to-jobs programs in the world.",
      more: "Our goal is to transform the lives of learners, educators, and communities through the power of technology, education, and career opportunities, creating an inclusive future for all. We work to bridge digital divides for underrepresented communities, opening doors to a world of opportunities in the evolving digital economy.",
    },
    {
      id: "nationalpoliceforce",
      name: "National Police Force",
      description:
        "There is one national police force in the Netherlands, lead by one Commissioner.",
      more: "The force consists of ten Regional Units and one Central Unit, each with its own Chief Constable.",
    },

    {
      id: "themuncipalityofthehague",
      name: "The municipality Of The Hague",
      description: "The municipality of The Hague has many faces",
      more: "international city of peace and justice, Royal residence, European city and multicultural hub.",
    },

    {
      id: "eset",
      name: "ESET",
      description:
        "For three decades and counting, ESET and its founding engineers have facilitated cutting-edge innovation across the digital security sector.",
      more: "Staying privately owned allows us to maintain our independence and focus on our primary goal—providing exemplary digital life protection for home and business. ",
    },

    {
      id: "sidnfonds",
      name: "SIDN Fonds",
      description:
        "A strong internet for all. That's what SIDN Fund stands for.",
      more: "We invest in bold projects with added societal value that contribute to a strong internet, strong internet users, or that focus on the internet's significance for public values and society.",
    },

    {
      id: "bitacedmy",
      name: "Bit Academy",
      description:
        "The IT program for students who want a real challenge at the vocational level (MBO).",
      more: "Working with the latest tech and choosing your own study direction. Learning by actively engaging, completing individual assignments, or collaborating in teams.",
    },
    {
      id: "ecp",
      name: "ECP",
      description:
        "For three decades and counting, ESET and its founding engineers have facilitated cutting-edge innovation across the digital security sector.",
      more: "Staying privately owned allows us to maintain our independence and focus on our primary goal—providing exemplary digital life protection for home and business. ",
    },

    {
      id: "government",
      name: "Government Of The Netherlands",
      description: "The Government Of The Netherlands",
      more: "The Government Of The Netherlands",
    },
  ];

  // Voor de uitbreiding partner partner
  const [expandedPartner, setExpandedPartner] = useState(null);

  return (
    <div className="min-h-screen text-white px-6 py-10 flex flex-col items-center">
      {/* Titel */}
      <h1 className="text-5xl font-bold text-[#FFD736] mb-6 text-center">
        About Us
      </h1>

      {/* Afbeelding */}
      <div className="w-full max-w-4xl mb-8">
        <img
          src="/images/divdacedamy.png"
          alt="About DIVD"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* DIVD Info */}
      <div className="max-w-4xl text-gray-200 text-lg space-y-4 mb-12">
        <p>
          DIVD Academy is dedicated to teaching cybersecurity skills through
          hands-on, practical courses. Our mission is to help learners protect
          systems, networks, and data in a safe and ethical way.
        </p>
        <p>
          We provide a mix of beginner-friendly and advanced courses designed by
          experienced professionals.
        </p>
        <p>
          DIVD Academy is a safe place where both novice and experienced
          researchers can connect to learn from each other.
        </p>
      </div>

      {/* Highlighted Employees */}
      <div className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold text-[#FFD736] mb-8 text-center">
          Highlighted Employees
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Victor.jpg"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="font-semibold">Victor Gevers</p>
            <p className="text-gray-400 text-sm">CTO</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Astrid.jpg"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="font-semibold">Astrid Oosenbrug</p>
            <p className="text-gray-400 text-sm">Co-Founder & CEO</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ronald.jpg"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="font-semibold">Ronald Stienstra</p>
            <p className="text-gray-400 text-sm">CFO</p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-bold text-[#FFD736] mb-6 text-center">
          Benefits of joining
        </h2>

        <ul className="list-disc list-inside text-gray-200 text-lg space-y-3">
          <li>
            Acquire and enhance essential hard and soft skills vital for a
            career in cybersecurity.
          </li>
          <li>
            Gain practical experience working within an international
            organization.
          </li>
          <li>
            Receive a certificate upon successful completion of the program.
          </li>
          <li>
            Connect with a network of motivated and like-minded individuals
            worldwide.
          </li>
          <li>Improve your English proficiency in a professional setting.</li>
        </ul>
      </div>

      {/* Our  DIVD Partners */}
      <div className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold text-[#FFD736] mb-8 text-center">
          Our Partners
        </h2>
        {/* partners uitwerking */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="border border-white/10 rounded-lg p-6 hover:border-[#FFD736] transition cursor-pointer"
              onClick={() =>
                setExpandedPartner(
                  expandedPartner === partner.id ? null : partner.id,
                )
              }
            >
              {/* Partner beschrijving */}
              <h3 className="text-xl font-semibold text-[#FFD736] mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-300">{partner.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Click here to read more →
              </p>

              {/* Uitgebreide details van de partners */}
              {expandedPartner === partner.id && (
                <div className="mt-4 p-4 bg-white/5 rounded text-gray-200 text-sm transition-all duration-300">
                  {partner.more}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact info */}
      <div className="max-w-4xl text-gray-400 text-lg text-center mb-10">
        <p>📍 Maanweg 174, 2516AB Den Haag, Netherlands</p>
        <p>📞 070 419 0309</p>
      </div>

      {/* Routebeschrijving*/}
      <div className="max-w-4xl text-gray-200 text-lg text-center mb-10">
        <h2 className="text-2xl font-bold text-[#FFD736] mb-4">
          Wanna Visit us?
        </h2>
        <p>
          Plan your route to DIVD Academy now! click the link below to find out
          how to get to our location:
        </p>
        <a
          href="https://www.google.com/maps/dir/Schiedamseweg+245,+Schiedam/Maanweg+174,+2516+AB+Den+Haag/@51.9957834,4.209198,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c4355c7dc5b3cb:0x6658c91aee1bf9c2!2m2!1d4.3838406!2d51.9238104!1m5!1m1!1s0x47c5b653499b0f4d:0xa562357cf26c3c5!2m2!1d4.3533434!2d52.0679866?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFD736] underline mt-2 inline-block"
        >
          Open in Google Maps
        </a>
      </div>

      {/* Streep */}
      <div className="footer-line"></div>
    </div>
  );
}
