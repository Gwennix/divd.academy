export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white px-6 py-10 flex flex-col items-center">
      
      {/* HOOFDTITEL */}
      <h1 className="text-5xl font-bold text-[#FFD736] mb-6 text-center">About Us</h1>

      {/* Afbeelding */}
      <div className="w-full max-w-4xl mb-8">
        <img
          src="/images/divdacedamy.png" 
          alt="About DIVD"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* DIVD Info */}
      <div className="max-w-4xl text-gray-200 text-lg space-y-4 mb-8">
        <p>
          DIVD Academy is dedicated to teaching cybersecurity skills through hands-on, practical courses. 
          Our mission is to help learners protect systems, networks, and data in a safe and ethical way.
        </p>
        <p>
          We provide a mix of beginner-friendly and advanced courses designed by experienced professionals.
        </p>
        <p>
          Students learn real-world skills in a structured, practical environment.
        </p>
      </div>

      {/* Informatie*/}
      <div className="max-w-4xl text-gray-400 text-lg space-y-2 text-center mb-10">
        <p>📍 Address: DIVD Academy, Maanweg 174, 2516AB Den Haag, Netherlands</p>
        <p>📞 Phone: 070 419 0309</p>
      </div>

      {/* Streep */}
      <div className="footer-line"></div>
    </div>

    
  );
}
