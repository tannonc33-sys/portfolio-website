export default function Services() {
    return (
        <section id="services" className="border-t border-[var(--chufos-brown)] bg-[var(--chufos-beige)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chufos-brown)]">
                    Services
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl">
                    Professional painting services for homes and businesses
                </h2>

                <p className="text-base leading-7 text-zinc-600">
                    Chufo&apos;s Painting offers dependable interior and exterior painting, cabinet painting,
                    staining, and more with attention to detail and clean results.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <h3 className="text-xl font-semibold">Interior Painting</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Clean, detailed interior painting that refreshes your space and improves the look of your home.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <h3 className="text-xl font-semibold">Exterior Painting</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Quality exterior painting that protects your home and improves curb appeal.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <h3 className="text-xl font-semibold">Cabinet Painting</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Professional cabinet painting that gives kitchens and bathrooms a clean, updated look.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <h3 className="text-xl font-semibold">Staining</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Staining services that enhance and protect wood surfaces while bringing out a rich, finished look.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <h3 className="text-xl font-semibold">Commercial Painting</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Painting services for commercial spaces that need clean results and dependable turnaround.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <h3 className="text-xl font-semibold">Surface Prep & Minor Repairs</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Prep work and minor drywall or texture touch-ups to help create a smoother finished result.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}