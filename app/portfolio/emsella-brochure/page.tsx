import Image from "next/image";
import Link from "next/link";

export default function EmsellaBrochurePage() {
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
            EDITORIAL DESIGN • PRINT DESIGN
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            EMSELLA Brochure
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            A six-panel marketing brochure designed to explain the EMSELLA
            treatment experience through clear information, strong visual
            hierarchy, and a polished wellness-focused presentation.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src="/emsella_brochure.jpg"
              alt="EMSELLA tri-fold brochure mockup"
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
              The brochure needed to communicate a large amount of treatment
              information without becoming overwhelming. It also needed to
              present the service professionally while remaining approachable
              and easy for prospective clients to understand.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">My Approach</h2>

            <p className="mt-4 leading-7">
              I organized the content into focused sections and used typography,
              imagery, color, and spacing to create a clear reading path across
              all six panels. The layout balances educational information with
              visual moments that reinforce the treatment&apos;s benefits and
              brand identity.
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
                Organize the Content
              </h3>

              <p className="mt-3 leading-7">
                I separated the treatment details, benefits, wellness
                information, and contact content into clearly defined sections
                that fit naturally within the brochure&apos;s six-panel format.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">02</p>

              <h3 className="mt-3 text-xl font-semibold">
                Build the Visual Hierarchy
              </h3>

              <p className="mt-3 leading-7">
                Headings, supporting copy, icons, photography, and calls to
                action were arranged to guide the reader through the brochure
                while keeping dense information easy to scan.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">03</p>

              <h3 className="mt-3 text-xl font-semibold">
                Prepare for Print
              </h3>

              <p className="mt-3 leading-7">
                I refined the panel alignment, folds, margins, image placement,
                and production setup so the finished artwork could be delivered
                as a cohesive print-ready brochure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">The Result</h2>

          <p className="mt-4 max-w-3xl leading-7">
            The final brochure presents EMSELLA and the surrounding wellness
            services in a polished, informative format. The completed design
            gives readers a clear understanding of the treatment while
            maintaining a consistent and professional visual experience across
            every panel.
          </p>
        </div>
      </section>
    </main>
  );
}