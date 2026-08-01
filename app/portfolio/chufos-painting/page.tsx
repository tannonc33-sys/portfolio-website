import Image from "next/image";
import Link from "next/link";

export default function ChufosPaintingPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-[var(--color-primary)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#portfolio"
            className="mb-8 inline-block text-sm font-medium"
          >
            ← Back to Portfolio
          </Link>

          <p className="mb-3 text-sm font-semibold tracking-[0.25em]">
            BRAND IDENTITY • WEB DESIGN • PRINT DESIGN
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Chufos Painting
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            A complete visual identity and website system created for a local
            painting company, designed to establish trust, improve consistency,
            and give the business a more professional presence.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src="/Mockup_Image.jpg"
              alt="Chufos Painting website and business card mockup"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">The Challenge</h2>

            <p className="mt-4 leading-7">
              Chufos Painting needed a consistent visual system that could work
              across both print and digital materials. The goal was to create a
              professional identity while keeping the brand approachable and
              connected to the company&apos;s existing character.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">My Approach</h2>

            <p className="mt-4 leading-7">
              I developed a unified color palette, refined the logo system,
              designed printed business cards, and built a responsive website
              around the same visual language. Each piece was created to feel
              connected while still serving its own practical purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Design Process</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">01</p>

              <h3 className="mt-3 text-xl font-semibold">
                Establish the Brand
              </h3>

              <p className="mt-3 leading-7">
                I defined a consistent brown, cream, and orange palette and used
                it to create a recognizable visual foundation.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">02</p>

              <h3 className="mt-3 text-xl font-semibold">
                Build the Website
              </h3>

              <p className="mt-3 leading-7">
                I designed and developed a responsive service website focused on
                clear information, trust, and simple contact options.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">03</p>

              <h3 className="mt-3 text-xl font-semibold">
                Extend the System
              </h3>

              <p className="mt-3 leading-7">
                The same identity was applied to print materials so the business
                would feel consistent wherever customers encountered it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">The Result</h2>

          <p className="mt-4 max-w-3xl leading-7">
            The completed system gave Chufos Painting a cohesive and
            professional presence across both digital and printed materials.
            The project also became the foundation for a reusable website system
            that can be adapted for other service businesses.
          </p>
        </div>
      </section>
    </main>
  );
}