import Image from "next/image";
import Link from "next/link";

export default function LogoRecreationPage() {
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
            LOGO RECREATION • VECTOR ARTWORK • PRODUCTION DESIGN
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Logo Recreation &amp; Vectorization
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            A production-ready logo graphic rebuilt as clean, scalable vector
            artwork for professional printing and large-format use.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-white">
            <Image
              src="/Boat_Decal_Reconstruction.jpg"
              alt="RTK Enterprise logo recreation and production artwork"
              fill
              priority
              className="object-contain p-6"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">The Challenge</h2>

            <p className="mt-4 leading-7">
              The project required a bold logo graphic that could be reproduced
              clearly at different sizes and prepared for professional print
              production. The typography, outlines, Texas silhouette, contact
              information, and QR code all needed to work together within one
              compact composition.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">My Approach</h2>

            <p className="mt-4 leading-7">
              I rebuilt and refined the artwork using scalable vector shapes,
              adjusted the typography and spacing, developed the layered stroke
              treatment, and integrated the Texas graphic and QR code into a
              balanced production-ready layout.
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
                Rebuild the Artwork
              </h3>

              <p className="mt-3 leading-7">
                I recreated the logo using clean vector shapes so the artwork
                could remain sharp and consistent at both small and large
                production sizes.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">02</p>

              <h3 className="mt-3 text-xl font-semibold">
                Refine the Composition
              </h3>

              <p className="mt-3 leading-7">
                I adjusted the typography, spacing, outlines, hierarchy, and
                supporting elements to create a stronger and more unified final
                layout.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">03</p>

              <h3 className="mt-3 text-xl font-semibold">
                Prepare for Production
              </h3>

              <p className="mt-3 leading-7">
                The final artwork was organized and prepared for professional
                printing, with scalable graphics and clear visual separation
                between each production element.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">The Result</h2>

          <p className="mt-4 max-w-3xl leading-7">
            The completed graphic delivers a bold and recognizable identity
            while remaining clean, scalable, and ready for production. The
            project demonstrates the ability to turn complex source material
            into polished vector artwork suitable for decals, signage, and
            other large-format applications.
          </p>
        </div>
      </section>
    </main>
  );
}