function Courses() {
  
  const courseLinks = Array.from({ length: 12 }, (_, i) => ({
    name: `Course ${i + 1}`,
    link: "#"
  }));

  // afbeeldingen 
  const courseImages = [
    { image: "/images/stockphoto1.jpg" },
    { image: "/images/stockphoto2.jpg" },
    { image: "/images/stockphoto3.jpg" },
    { image: "/images/stockphoto4.jpg" },
  ];

  return (
    <div>
      {/* Titel bovenin */}
      <h1 className="page-title">Courses</h1>

      {/* Container voor links + afbeeldingen */}
      <div className="courses-container">
        {/* Links */}
        <div className="course-links">
          {courseLinks.map((course, idx) => (
            <a key={idx} href={course.link}>{course.name}</a>
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

      {/* streep onder content*/}
      <div className="footer-line"></div>
    </div>
  );
}

export default Courses;
