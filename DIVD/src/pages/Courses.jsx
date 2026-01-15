function Courses() {
  // Cyber Security links
  const courseLinks = [
    { name: "CertifiedSecure: Veilig Internet", link: "https://www.certifiedsecure.com/certification/view/39" },
    { name: "CertifiedSecure: Veilig Internet plus", link: "https://www.certifiedsecure.com/certification/view/45" },
    { name: "Introduction to Cybersecurity", link: "https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=db409acd-a6a3-4b51-812e-fa247d5a6bcb" },
    { name: "Cyber Security Essentials", link: "https://www.netacad.com/courses/industrial-cybersecurity?courseLang=en-US&instance_id=ab4d49e5-9b9e-45d5-935d-5092383f11d8" },
    { name: "CertifiedSecure: Essential Security", link: "https://www.certifiedsecure.com/certification/view/35" },
    { name: "CertifiedSecure: Essential Specialties", link: "https://www.certifiedsecure.com/certification/view/37" },
    { name: "CertifiedSecure: Security specialist", link: "https://www.certifiedsecure.com/certification/view/38" },
    { name: "CertifiedSecure: Web Security Specialist", link: "https://www.certifiedsecure.com/certification/view/39" },
    { name: "Ethical Hacking", link: "https://www.netacad.com/courses/ethical-hacker?courseLang=en-US&instance_id=d3f01636-77e7-4312-b1b6-8eebdd65f9b4" },
    { name: "OWASP API Security Top 10 and Beyond | APIsec University", link: "https://www.apisecuniversity.com/courses/owasp-api-security-top-10-and-beyond" },
    { name: "API penetration testing | APIsec University", link: "https://www.apisecuniversity.com/courses/api-penetration-testing" },
    { name: "Security Framework: ATT&CK Training | MITRE ATT&CK®", link: "https://attack.mitre.org/resources/learn-more-about-attack/training/cti/" },
  ];

  // Development links
  const devLinks = [
    { name: "C++ Essentials 1", link: "https://www.netacad.com/courses/c-plus-plus-essentials-1?courseLang=en-US&instance_id=08faa51e-ec5c-48cd-8666-6ce77ae292dd" },
    { name: "C++ Essentials 2", link: "https://www.netacad.com/courses/c-plus-plus-essentials-2?courseLang=en-US&instance_id=1881927d-4b40-4226-b1f6-266f41d9ca93" },
    { name: "C++ Advanced", link: "https://www.netacad.com/courses/c-plus-plus-advanced?courseLang=en-US&instance_id=e7a885b8-dcb6-4e1e-8da0-eb66fff1143c" },
    { name: "Learning Rust", link: "https://rustlings.rust-lang.org/" },
  ];

  // Afbeeldingen
  const courseImages = [
    { image: "/images/stockphoto1.jpg" },
    { image: "/images/stockphoto2.jpg" },
    { image: "/images/stockphoto3.jpg" },
    { image: "/images/stockphoto4.jpg" },
  ];

  return (
    <div>
      {/* Titel */}
      <h1 className="page-title">Courses</h1>

      <div className="courses-container">

        
        <div className="course-links">

          
          <div className="course-subtitle">Cyber Security</div>

          
          {courseLinks.map((course, idx) => (
            <a
              key={idx}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {course.name}
            </a>
          ))}

          {/* Development */}
          <div className="course-subtitle" style={{ marginTop: '16px' }}>Development</div>

          {devLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Afbeeldingen */}
        <div className="course-images">
          {courseImages.map((course, idx) => (
            <div key={idx} className="course-card">
              <img src={course.image} alt={`Course ${idx + 1}`} />
            </div>
          ))}
        </div>

      </div>

      {/* Streep */}
      <div className="footer-line"></div>
    </div>
  );
}

export default Courses;
