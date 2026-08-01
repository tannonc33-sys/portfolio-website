import Image from "next/image";
import Link from "next/link";

export default function LargeFormatPrintPage() {
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
                        LARGE FORMAT PRINT • PRODUCTION • VEHICLE GRAPHICS
                    </p>

                    <h1 className="text-4xl font-bold md:text-6xl">
                        Large Format Print Production
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8">
                        A large-format vehicle magnet designed and prepared for production,
                        demonstrating print-ready artwork, clear visual hierarchy, and
                        durable graphics intended for real-world business advertising.
                    </p>
                </div>
            </section>

            <section className="px-6 py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto w-fit overflow-hidden rounded-2xl bg-white p-6">
                        <Image
                            src="/ice_cream_truck_menu.jpg"
                            alt="Large format vehicle magnet designed for an ice cream truck"
                            width={900}
                            height={1275}
                            priority
                            className="h-auto max-h-[800px] w-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-20">
                <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold">The Challenge</h2>

                        <p className="mt-4 leading-7">
                            The project required creating a large-format magnet for an ice
                            cream truck that would remain clear and visually engaging while
                            being viewed from a distance. The artwork needed to balance
                            readability, branding, and production requirements while
                            maintaining a clean appearance on a moving vehicle.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">My Approach</h2>

                        <p className="mt-4 leading-7">
                            I developed the layout with large-format visibility in mind,
                            organizing the information into a clear visual hierarchy while
                            preparing the artwork for professional printing. Careful attention
                            was given to spacing, typography, and overall composition to
                            ensure the finished magnet remained effective in a real-world
                            environment.
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
                                Develop the Layout
                            </h3>

                            <p className="mt-3 leading-7">
                                I organized the content to create a balanced composition that
                                would remain easy to read while displayed on the vehicle. The
                                layout emphasized clarity and strong visual communication from a
                                distance.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold tracking-[0.2em]">02</p>

                            <h3 className="mt-3 text-xl font-semibold">
                                Prepare for Production
                            </h3>

                            <p className="mt-3 leading-7">
                                The artwork was built with large-format printing requirements in
                                mind, ensuring clean vector graphics, accurate sizing, and
                                print-ready files suitable for professional production.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold tracking-[0.2em]">03</p>

                            <h3 className="mt-3 text-xl font-semibold">
                                Deliver the Final Product
                            </h3>

                            <p className="mt-3 leading-7">
                                The completed vehicle magnet provided a durable and professional
                                advertising solution while maintaining strong visual impact and
                                production quality in a real-world application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold">The Result</h2>

                    <p className="mt-4 max-w-3xl leading-7">
                        The finished vehicle magnet successfully translated the design from
                        screen to print, producing a clean and professional large-format
                        graphic suitable for everyday commercial use. The project
                        demonstrates experience preparing production-ready artwork while
                        maintaining strong readability and visual balance at scale.
                    </p>
                </div>
            </section>
        </main>
    );
}