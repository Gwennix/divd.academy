function CourseCard({ title, image, link }) {
  return (
    <a
      href={link}
      className="group block bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden 
                 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
    >
      {/* Image */}
      <div className="relative h-40 sm:h-44 md:h-48">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:brightness-100 transition"
        />
      </div>

      {/* Info //*/}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Click to view details
        </p>
      </div>
    </a>
  );
}

export default CourseCard;
