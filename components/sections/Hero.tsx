export default function Hero() {
    return (
        <section className="bg-[var(--background)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chufos-brown)]">
                        GRAPHIC DESIGNER • WEB DESIGNER
                    </p>

                    <h1 className="max-w-lg text-3xl font-bold leading-tight sm:text-5xl">
                        Design that creates a lasting first impression.
                    </h1>

                    <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
                        I create clean, modern branding, websites, and print designs that
                        help businesses stand out. From logos and signage to repsonsive websites,
                        I focus on thoughtful design that is both functional and memorable.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                        <a
                            href="#portfolio"
                            className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-[var(--color-surface)] hover:bg-[var(--color-accent)] transition-colors duration-200 hover:text-white transition-colors duration-150"
                        >
                            View My Work
                        </a>

                        <a
                            href="#contact"
                            className="bg-zinc-50 rounded-full border border-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-accent)] hover:bg-[var(--color-primary)] transition-colors duration-200 hover:text-white transition-colors duration-150 hover:border-white"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <img
                        src="/Mockup_Image.jpg"
                        alt="Professional Mockup Laptop Website and Business Cards That Match the Website"
                        className="h-[390px] w-full rounded-2xl object-cover object-[center_46%]"
                    />

                    <div className="absolute inset-0 rounded-2xl" />
                </div>
            </div>
        </section>
    );
}