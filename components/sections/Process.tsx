export default function Process() {
    return (
        <section className="border-t border-[var(--chufos-brown)] bg-[var(--chufos-beige)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chufos-brown)]">
                        Process
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl">A simple process you can trust</h2>
                    {/*<p className="text-base leading-7 text-zinc-600">
                        This section makes the business feel organized, professional, and easy to work with.
                    </p>*/}
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <p className="text-sm font-semibold text-[var(--chufos-brown)]">01</p>
                        <h3 className="mt-3 text-xl font-semibold">Request a Quote</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            The customer reaches out through the site, call button, or contact form.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <p className="text-sm font-semibold text-[var(--chufos-brown)]">02</p>
                        <h3 className="mt-3 text-xl font-semibold">Review the Job</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            The business reviews the project scope and recommends the right service solution.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-[var(--chufos-brown)] bg-white p-6">
                        <p className="text-sm font-semibold text-[var(--chufos-brown)]">03</p>
                        <h3 className="mt-3 text-xl font-semibold">Deliver the Work</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            The customer gets reliable service, clear communication, and a finished result.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}