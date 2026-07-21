export default function Hero() {
    return (
        <section className="bg-[var(--chufos-beige)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chufos-brown)]">
                        Interior & Exterior Painting
                    </p>

                    <h1 className="max-w-lg text-3xl font-bold leading-tight sm:text-5xl">
                        Quality painting that makes your home look its best.
                    </h1>

                    <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
                        806 Painting! Interior painting, exterior painting, cabinet painting,
                        and more. Serving Lubbock and the 806 for over a decade. Clean, professional,
                        dependable painting. Chufo&apos;s Painting.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                        <a
                            href="#contact"
                            className="rounded-full bg-[var(--chufos-orange)] px-6 py-3 text-sm font-medium text-[var(--chufos-brown)] hover:bg-[var(--chufos-brown)] transition-colors duration-200 hover:text-white transition-colors duration-150"
                        >
                            Get Started
                        </a>

                        <a
                            href="#services"
                            className="bg-zinc-50 rounded-full border border-[var(--chufos-brown)] px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-[var(--chufos-beige)] transition-colors duration-200"
                        >
                            View Services
                        </a>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <img
                        src="/green_front.jpeg"
                        alt="Professional painter spraying green panel interior entrance"
                        className="h-[550px] w-full rounded-2xl object-cover object-[center_46%]"
                    />

                    <div className="absolute inset-0 rounded-2xl" />
                </div>
            </div>
        </section>
    );
}