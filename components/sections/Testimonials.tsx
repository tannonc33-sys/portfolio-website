export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="bg-[var(--chufos-beige)] border-t border-[var(--chufos-brown)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chufos-brown)]">
                        Testimonials
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Customers appreciate quality work and reliable service
                    </h2>

                    <p className="text-base leading-7 text-zinc-600">
                        Chufo&apos;s Painting takes pride in delivering clean results and a smooth experience
                        from start to finish.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <p className="text-sm leading-6 text-zinc-600">
                            “Great attention to detail and very professional. The interior paint job made our
                            home feel completely refreshed.”
                        </p>

                        <p className="mt-4 text-sm font-semibold">Homeowner</p>
                    </div>

                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <p className="text-sm leading-6 text-zinc-600">
                            “Showed up on time, communicated clearly, and the final result looked great. Very
                            happy with the exterior painting.”
                        </p>

                        <p className="mt-4 text-sm font-semibold">Customer</p>
                    </div>

                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <p className="text-sm leading-6 text-zinc-600">
                            “Cabinets came out looking brand new. The finish was smooth and everything was kept
                            clean during the project.”
                        </p>

                        <p className="mt-4 text-sm font-semibold">Client</p>
                    </div>
                </div>
            </div>
        </section>
    );
}