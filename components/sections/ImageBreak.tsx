export default function ImageBreak() {
    return (
        <section className="relative h-[360px] w-full overflow-hidden">
            <img
                src="/green_front_oppo.jpeg"
                alt="Finished interior painting project by Chufo's Painting"
                className="absolute inset-0 h-full w-full object-cover object-[center_63%]"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
                <div className="max-w-xl space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                        
                    </p>

                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                        Proudly serving Lubbock and the 806
                    </h2>

                    <p className="text-sm leading-7 text-white/90 sm:text-base">
                        Quality workmanship, dependable service, and attention to detail on every project.
                    </p>
                </div>
            </div>
        </section>
    );
}