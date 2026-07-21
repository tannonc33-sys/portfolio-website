export default function WhyUs() {
    return (
        <section id="why-us" className="border-t border-[var(--chufos-brown)] bg-[var(--chufos-beige)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chufos-brown)]">
                        Why Choose Us
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Painting done with care, professionalism, and attention to detail.
                    </h2>
                    <p className="text-base leading-7 text-zinc-600">
                        Chufo&apos;s Painting is committed to clean work, dependable service, and results that
                        make your home or business look its best. From interiors and exteriors to cabinets and
                        staining, every project is handled with pride and attention to detail.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-3xl bg-zinc-50 border border-[var(--chufos-brown)] p-6">
                        <h3 className="text-lg font-semibold">Clean, Professional Results</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Careful prep work and detailed finishing help deliver smooth, polished results that
                            improve the look of your space.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-zinc-50 border border-[var(--chufos-brown)] p-6">
                        <h3 className="text-lg font-semibold">Dependable Service</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Clear communication, reliable scheduling, and consistent work help make the process
                            easy from start to finish.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-zinc-50 border border-[var(--chufos-brown)] p-6">
                        <h3 className="text-lg font-semibold">Interior & Exterior Experience</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Whether the job is inside or outside, each project is approached with the same level
                            of care and attention to detail.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-zinc-50 border border-[var(--chufos-brown)] p-6">
                        <h3 className="text-lg font-semibold">Cabinets, Staining & More</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            In addition to painting, Chufo&apos;s Painting also offers cabinet painting, staining,
                            and other finishing services to help complete the job.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}