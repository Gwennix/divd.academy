import RSSFeed from "../components/RSSFeed";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className=" py-20 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Welcome to <span className="text-[#ffd736]">DIVD Academy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master cybersecurity, ethical hacking, and cutting-edge IT skills in
            a collaborative environment designed for aspiring researchers and
            tech innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/AboutUs"
              className="bg-[#ffd736] text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              About us
            </a>
            <a
              href="https://divd.community/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#ffd736] text-[#ffd736] px-8 py-3 rounded-lg font-semibold hover:bg-[#ffd736] hover:text-black transition-colors text-center"
            >
              Join Community
            </a>
          </div>
        </div>
        <div className=" inset-0 bg-[url('/images/cyber-bg.jpg')] bg-cover bg-center opacity-10"></div>
      </section>

      <div className="h-0.5 max-w-7xl bg-white my-15 mx-auto rounded"></div>

      {/* Statistics */}
      <section className=" py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#ffd736]">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Courses Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Free Education</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-0.5 max-w-7xl bg-white my-15 mx-auto rounded"></div>
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4 text-[#ffd736]">
              {" "}
              Are you interested?
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=db409acd-a6a3-4b51-812e-fa247d5a6bcb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ffd736] underline"
                >
                  Introduction to Cybersecurity
                </a>
              </li>
              <li>
                <a
                  href="https://www.netacad.com/courses/ethical-hacker?courseLang=en-US&instance_id=d3f01636-77e7-4312-b1b6-8eebdd65f9b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ffd736] underline"
                >
                  Ethical Hacking
                </a>
              </li>
              <li>
                <a
                  href="https://www.netacad.com/courses/industrial-cybersecurity?courseLang=en-US&instance_id=ab4d49e5-9b9e-45d5-935d-5092383f11d8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ffd736] underline"
                >
                  Cyber Security Essentials
                </a>
              </li>
              <div className="text-left mt-5">
                <a
                  href="/Courses"
                  className="text-[#ffd736] hover:text-white transition-colors duration-300 text-lg font-medium"
                >
                  Show more courses →
                </a>
              </div>
            </ul>
          </div>
          <div className="text-left">
            <p className="text-gray-300 leading-relaxed mb-6">
              Are you interested in cybersecurity and would you like to come
              take a look? Feel free to come talk to the{" "}
              <a
                href="https://divd.community/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffd736] hover:text-white underline"
              >
                DIVD Community
              </a>
              .
            </p>
            <p className="text-gray-300 leading-relaxed">
              The platform provides a comprehensive range of free courses and
              training materials covering fundamental IT education, networking,
              Kubernetes, security, automation, programming in various languages
              like JavaScript, Python, and PHP, DevOps skills, GitHub
              operations, code security, and data science essentials. This
              diverse curriculum caters to beginners starting their careers,
              offering basic IT education, networking, cybersecurity training,
              ethical hacking, automation, programming and data analytics.
            </p>
          </div>
        </div>
      </section>

      <div className="h-0.5 max-w-7xl bg-white my-15 mx-auto rounded"></div>

      {/* News */}
      <section className="max-w-7xl mx-auto px-5 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#ffd736]">
          Latest News
        </h2>
        <RSSFeed
          feedUrl={`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fastrido.substack.com%2Ffeed`}
          maxItems={3}
        />
        <div className="text-center mt-8">
          <a
            href="/News"
            className="text-[#ffd736] hover:text-white transition-colors duration-300 text-lg font-medium"
          >
            Show more news →
          </a>
        </div>
      </section>

      <div className="h-0.5 max-w-7xl bg-white my-15 mx-auto rounded"></div>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#ffd736]">
          Why Choose DIVD Academy?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden p-8 rounded-xl bg-linear-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-[#ffd736] transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-linear-to-br from-[#ffd736]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                🛡️
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#ffd736]">
                Expert Cybersecurity Training
              </h3>
              <p className="text-gray-300">
                Master real-world security skills through hands-on learning
                paths designed by industry professionals.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden p-8 rounded-xl bg-linear-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-[#ffd736] transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-linear-to-br from-[#ffd736]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#ffd736]">
                Ethical Hacking Mastery
              </h3>
              <p className="text-gray-300">
                Learn to identify vulnerabilities, understand exploit chains,
                and practice responsible disclosure techniques.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden p-8 rounded-xl bg-linear-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-[#ffd736] transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-linear-to-br from-[#ffd736]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#ffd736]">
                Research-Driven Growth
              </h3>
              <p className="text-gray-300">
                Transform from beginner to junior researcher with personalized
                mentorship and collaborative projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-0.5 max-w-7xl bg-white my-15 mx-auto rounded"></div>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-6 text-[#ffd736]">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              DIVD Academy is a learning school to increase knowledge, skills,
              and ethical awareness and connects young talent. In addition, DIVD
              Academy is a safe place where both novice and experienced
              researchers can join to learn from each other, a 21st-century
              niche in the field of IT education, research, and security.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-[#ffd736]">
              Vision
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              We signal several developments. For example, we see a growing
              group of interested parties who want to know and learn more about
              cyber security, perhaps want to make it their profession, and
              often already possess several basic skills but are still looking
              for the proper appropriate training.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Another development we observe is the young talent in the
              Netherlands who hack freely, only sometimes know the digital
              boundaries, do not know when they go wrong, and where the digital
              ethical compass is only developed to a limited extent.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-[#ffd736]">
              Strategy
            </h3>
            <p className="text-gray-300 leading-relaxed">
              The DIVD Academy is an innovative hacker initiative committed to
              two goals, (1) training a new generation of hackers and (2)
              raising awareness about cybersecurity. The DIVD Academy is a
              training ground for increasing this knowledge, skills, and ethical
              insight among young talent.
            </p>
          </div>

          <div className="text-left">
            <h2 className="text-3xl font-bold mb-6 text-[#ffd736]">
              What is the DIVD Academy?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              The DIVD Academy is an innovative hub, dedicated to nurturing a
              fresh generation of cybersecurity experts and amplifying awareness
              about online security. It stands as a catalyst for fostering
              knowledge, skills, and ethical awareness among aspiring talents.
              Through tailored micro-training, DIVD empowers emerging hackers to
              evolve into junior security researchers, offering them practical
              experience and a path toward ethical professional growth within
              the organization.
            </p>

            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Cybersecurity Mission"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <div className="h-0.5 max-w-7xl bg-white my-15 mx-auto rounded"></div>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#ffd736]">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="group relative overflow-hidden p-6 rounded-xl bg-linear-to-br from-gray-800 to-gray-900 
                 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 
                 hover:border-[#ffd736] transform hover:-translate-y-2"
          >
            {/* Glow Overlay */}
            <div
              className="absolute inset-0 bg-linear-to-br from-[#ffd736]/10 to-transparent 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div className="relative z-10">
              <div className="text-yellow-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                ★★★★★
              </div>
              <p className="text-gray-300 mb-4 italic">
                "DIVD Academy transformed my understanding of cybersecurity. The
                hands-on approach and supportive community made learning
                enjoyable and effective."
              </p>
              <div className="text-[#ffd736] font-semibold">
                - Alex M., Security Analyst
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="group relative overflow-hidden p-6 rounded-xl bg-linear-to-br from-gray-800 to-gray-900 
                 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 
                 hover:border-[#ffd736] transform hover:-translate-y-2"
          >
            <div
              className="absolute inset-0 bg-linear-to-br from-[#ffd736]/10 to-transparent 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div className="relative z-10">
              <div className="text-yellow-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                ★★★★★
              </div>
              <p className="text-gray-300 mb-4 italic">
                "From beginner to confident ethical hacker - the journey at DIVD
                Academy was incredible. The mentors are knowledgeable and always
                willing to help."
              </p>
              <div className="text-[#ffd736] font-semibold">
                - Sarah K., Junior Researcher
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="group relative overflow-hidden p-6 rounded-xl bg-linear-to-br from-gray-800 to-gray-900 
                 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 
                 hover:border-[#ffd736] transform hover:-translate-y-2"
          >
            <div
              className="absolute inset-0 bg-linear-to-br from-[#ffd736]/10 to-transparent 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div className="relative z-10">
              <div className="text-yellow-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                ★★★★★
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The ethical focus and real-world applications make DIVD Academy
                stand out. I've gained skills that directly apply to my career
                in cybersecurity."
              </p>
              <div className="text-[#ffd736] font-semibold">
                - Mike R., IT Security Specialist
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-0.5 max-w-7xl bg-white my-15 mx-auto rounded"></div>

      <footer className=" text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-3x1 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#ffd736]">
                HQ Office
              </h3>
              <p className="text-gray-300 mb-4">
                Maanweg 174
                <br />
                2516 AB Den Haag
                <br />
                Tel.: (+31) 70 41 90 309
              </p>
              <h4 className="text-xl font-semibold mb-2 text-[#ffd736]">
                Questions? Contact us
              </h4>
              <p className="text-gray-300 mb-4">
                The quickest way to reach us—faster than even a phone call—is
                through the{" "}
                <a
                  href="https://divd.community/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffd736] hover:text-white underline"
                >
                  DIVD Community
                </a>{" "}
                Slack #divd-academy.
              </p>
              <a
                href="https://form.jotform.com/250156580720048"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#ffd736] text-black rounded-lg hover:bg-[#ffd736]/80 transition-colors duration-300"
              >
                Contact Form
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#ffd736]">
                Location Map
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.8!2d4.293!3d52.078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b653499b0f4d%3A0xa562357cf26c3c5!2sMaanweg%20174%2C%202516%20AB%20Den%20Haag%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1609459200000!5m2!1sen!2snl"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="HQ Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
