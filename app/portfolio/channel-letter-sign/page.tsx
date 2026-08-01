import Image from "next/image";
import Link from "next/link";

export default function ChannelLetterSignPage() {
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
            SIGNAGE DESIGN • CHANNEL LETTERS • STOREFRONT MOCKUP
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Channel Letter Storefront Sign
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            A custom illuminated storefront sign designed for a restaurant and
            saloon, combining bold typography, a distinctive western identity,
            and strong visibility for an exterior building application.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl bg-white">
            <Image
              src="/outlaws_official_size_first_adjustment.jpg"
              alt="Outlaws Restaurant and Saloon channel letter storefront sign"
              width={1600}
              height={900}
              priority
              unoptimized
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">The Challenge</h2>

            <p className="mt-4 leading-7">
              The project required a large exterior sign that would establish a
              strong western identity while remaining clear and recognizable
              from a distance. The design needed to balance the primary business
              name, supporting copy, decorative elements, and the technical
              requirements of an illuminated channel letter installation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">My Approach</h2>

            <p className="mt-4 leading-7">
              I developed a bold storefront composition centered around the
              Outlaws name, using strong typography and a longhorn symbol to
              reinforce the restaurant&apos;s character. The supporting text and
              horizontal accents were arranged to create hierarchy, balance,
              and visibility across the building facade.
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
                Build the Sign Layout
              </h3>

              <p className="mt-3 leading-7">
                I organized the business name, longhorn mark, decorative lines,
                and supporting copy into a clear storefront composition with a
                strong central focus.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">02</p>

              <h3 className="mt-3 text-xl font-semibold">
                Refine Scale and Visibility
              </h3>

              <p className="mt-3 leading-7">
                The artwork was adjusted to fit the available building space
                while maintaining readable proportions and a balanced presence
                across the exterior facade.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">03</p>

              <h3 className="mt-3 text-xl font-semibold">
                Create the Presentation Mockup
              </h3>

              <p className="mt-3 leading-7">
                I produced a realistic storefront mockup to communicate the
                proposed scale, placement, illumination, and overall appearance
                of the finished sign.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">The Result</h2>

          <p className="mt-4 max-w-3xl leading-7">
            The completed concept delivers a bold and recognizable storefront
            identity with strong nighttime visibility and clear visual
            hierarchy. The project demonstrates experience designing signage at
            architectural scale and presenting production concepts through
            realistic client-facing mockups.
          </p>
        </div>
      </section>
    </main>
  );
}