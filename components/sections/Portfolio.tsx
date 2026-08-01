import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Chufos Painting",
    category: "Brand Identity • Web Design • Print Design",
    href: "/portfolio/chufos-painting",
    image: "/Mockup_Image.jpg"
  },
  {
    title: "EMSELLA Brochure",
    category: "Editorial Design • Print Design",
    href: "/portfolio/emsella-brochure",
    image: "/emsella_brochure.jpg"
  },
  {
    title: "Logo Recreation & Vectorization",
    category: "Logo Design • Branding",
    href: "/portfolio/logo-recreation-and-vectorization",
    image: "/Side_Boat.jpg"
  },
  {
    title: "Large Format Project",
    category: "Signage • Production Design",
    href: "/portfolio/large-format",
    image: "/ice_cream_truck_menu.jpg"
  },
  {
    title: "Channel Letter Sign",
    category: "Signage • Production Design",
    href: "/portfolio/channel-letter-sign",
    image: "/store_front_logo_measurements.jpg"
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[var(--background)] border-t border-[var(--color-primary)] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold tracking-[0.25em]">
            SELECTED WORK
          </p>

          <h2 className="text-4xl font-bold">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-black/60">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}