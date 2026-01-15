export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white px-6 py-10 flex flex-col items-center">
      
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
          DIVD Academy is dedicated to teaching cybersecurity skills through hands-on, practical courses. 
          Our mission is to help learners protect systems, networks, and data in a safe and ethical way.
        </p>
        <p>
          We provide a mix of beginner-friendly and advanced courses designed by experienced professionals.
        </p>
        <p>
          DIVD Academy is a safe place where both novice and experienced researchers can connect to learn from each other.
        </p>
      </div>

      {/* Highlighted Employees*/}
      <div className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold text-[#FFD736] mb-8 text-center">
          Highlighted Employees
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Victor.jpg"
              alt="Employee 1"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="font-semibold text-white">Victor Gevers</p>
            <p className="text-gray-400 text-sm">CTO</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Astrid.jpg"
              alt="Employee 2"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="font-semibold text-white">Astrid Oosenbrug</p>
            <p className="text-gray-400 text-sm">Co-Founder & CEO</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ronald.jpg"
              alt="Employee 3"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="font-semibold text-white">Ronald Stienstra</p>
            <p className="text-gray-400 text-sm">CFO</p>
          </div>

          

        </div>
      </div>

      {/* The benefits of joining DIVD */}
      <div className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-bold text-[#FFD736] mb-6 text-center">
          Benefits of joining
        </h2>

        <ul className="list-disc list-inside text-gray-200 text-lg space-y-3">
          <li>Acquire and enhance essential hard and soft skills vital for a career in cybersecurity.</li>
          <li>Gain practical experience working within an international organization.</li>
          <li>Receive a certificate upon successful completion of the program.</li>
          <li>Connect with a network of motivated and like-minded individuals worldwide.</li>
          <li>Improve your English proficiency in a professional setting.</li>
        </ul>
      </div>

      {/* Contact info */}
      <div className="max-w-4xl text-gray-400 text-lg space-y-2 text-center mb-10">
        <p>📍 Address: DIVD Academy, Maanweg 174, 2516AB Den Haag, Netherlands</p>
        <p>📞 Phone: 070 419 0309</p>
      </div>

      {/* Streep */}
      <div className="footer-line"></div>
    </div>
  );
}
