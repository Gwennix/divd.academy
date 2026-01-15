function CoursesSidebar() {
  const tracks = [
    { name: "Web Security", icon: "/icons/web.svg", link: "/courses/web-security" },
    { name: "Ethical Hacking", icon: "/icons/hacking.svg", link: "/courses/ethical-hacking" },
    { name: "Blue Team", icon: "/icons/blue.svg", link: "/courses/blue-team" },
  ];

  return (
    <aside className="space-y-12 text-sm md:text-base">
      <div>
        <h3 className="text-xl font-bold text-yellow-400 mb-4">Course Tracks</h3>
        <ul className="space-y-4">
          {tracks.map(track => (
            <li key={track.name}>
              <a
                href={track.link}
                className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-[#222] px-2 py-2 rounded-lg transition"
              >
                <img
                  src={track.icon}
                  alt={track.name}
                  className="w-6 h-6 opacity-90"
                />
                {track.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default CoursesSidebar;
