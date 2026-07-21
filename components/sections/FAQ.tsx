export default function FAQ() {
    return (
        <section id="faq" className="bg-[var(--chufos-beige)] border-t border-[var(--chufos-brown)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="space-y-4 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chufos-brown)]">
                        FAQ
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Common questions about our painting services
                    </h2>

                    <p className="text-base leading-7 text-zinc-600">
                        Here are answers to some of the most common questions customers have before getting started.
                    </p>
                </div>

                <div className="mt-10 space-y-4">
                    <div className="bg-zinc-50 rounded-3xl border border-[var(--chufos-brown)] p-6">
                        <h3 className="text-lg font-semibold">
                            How do I request a quote?
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            You can request a quote by filling out the contact form or calling directly. We will
                            review your project details and provide the next steps.
                        </p>
                    </div>

                    <div className="bg-zinc-50 rounded-3xl border border-[var(--chufos-brown)] p-6">
                        <h3 className="text-lg font-semibold">
                            Do you offer both interior and exterior painting?
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Yes, Chufo&apos;s Painting provides both interior and exterior painting services for
                            residential and commercial properties.
                        </p>
                    </div>

                    <div className="bg-zinc-50 rounded-3xl border border-[var(--chufos-brown)] p-6">
                        <h3 className="text-lg font-semibold">
                            Do you paint cabinets or provide staining services?
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Yes, cabinet painting and staining services are available to help update kitchens,
                            bathrooms, and other areas with a clean, modern look.
                        </p>
                    </div>

                    <div className="bg-zinc-50 rounded-3xl border border-[var(--chufos-brown)] p-6">
                        <h3 className="text-lg font-semibold">
                            How long does a painting project usually take?
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Project timelines vary depending on size and scope, but we aim to complete work
                            efficiently while maintaining quality results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}