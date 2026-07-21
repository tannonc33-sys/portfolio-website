export default function CTA() {
    return (
        <section className="border-t border-[var(--chufos-brown)] bg-[var(--chufos-beige)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--chufos-brown)] bg-white px-6 py-12 sm:px-10 sm:py-16">
                <div className="mx-auto max-w-3xl space-y-6 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chufos-brown)]">
                        Ready for a Fresh Look?
                    </p>

                    <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                        Let&apos;s bring clean, professional color to your next project.
                    </h2>

                    <p className="text-base leading-7 text-zinc-600">
                        From interior and exterior painting to cabinets, staining, and commercial work,
                        Chufo&apos;s Painting is ready to help homeowners and businesses in the 806.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href="#contact"
                            className="rounded-full bg-[var(--chufos-orange)] px-6 py-3 text-sm font-medium text-[var(--chufos-brown)] hover:bg-[var(--chufos-brown)] transition-colors duration-200 hover:text-white transition-colors duration-150"
                        >
                            Request a Quote
                        </a>

                        <a
                            href="tel:555-555-5555"
                            className="rounded-full border border-[var(--chufos-brown)] px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-[var(--chufos-beige)] transition-colors duration-200"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}