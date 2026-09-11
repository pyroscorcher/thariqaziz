const projects = [
  {
    title: "SITABA",
    description: "Disaster reporting and management system",
    year: "2026",
    image: "/images/sitaba.jpg",
  },
  {
    title: "Phonify",
    description: "Mobile application concept",
    year: "2026",
    image: "/images/phonify.jpg",
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="py-24">
      <div className="mb-12">
        <h2 className="font-popins text-4xl font-semibold text-gray-900 md:text-6xl">
          Selected Work
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="group">
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5 flex items-start justify-between gap-6">
              <div>
                <h3 className="font-popins text-2xl font-medium text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {project.description}
                </p>
              </div>

              <span className="text-sm text-gray-500">
                {project.year}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}