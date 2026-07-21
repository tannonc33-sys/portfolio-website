import Image from "next/image";
export default function Navbar() {
    return (
        <nav className="border-b border-[var(--chufos-brown)] bg-[var(--chufos-brown)]">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-0">
                <div className="text-lg font-semibold"><Image
                    src="/chufos_text_logo.svg"
                    alt="Chufo's Painting Logo"
                    width={190}
                    height={90}
                    priority
                /></div>

                <div className="hidden gap-6 md:flex">
                    <a href="#services" className="text-sm font-medium text-[var(--chufos-beige)] transition-colors duration-200 hover:text-[var(--chufos-orange)]">
                        Services
                    </a>

                    <a href="#testimonials" className="text-sm font-medium text-[var(--chufos-beige)] transition-colors duration-200 hover:text-[var(--chufos-orange)]">
                        Reviews
                    </a>

                    <a href="#why-us" className="text-sm font-medium text-[var(--chufos-beige)] transition-colors duration-200 hover:text-[var(--chufos-orange)]">
                        Why Us
                    </a>

                    <a href="#faq" className="text-sm font-medium text-[var(--chufos-beige)] transition-colors duration-200 hover:text-[var(--chufos-orange)]">
                        FAQ
                    </a>

                    <a href="#contact" className="text-sm font-medium text-[var(--chufos-beige)] transition-colors duration-200 hover:text-[var(--chufos-orange)]">
                        Contact
                    </a>
                </div>

                <a
                    href="#contact"
                    className="rounded-full bg-[var(--chufos-orange)] px-5 py-2.5 text-sm font-medium text-[var(--chufos-brown)] hover:bg-[var(--chufos-brown)] transition-colors duration-200 hover:text-white transition-colors duration-150"
                >
                    Get a Quote
                </a>
            </div>
        </nav>
    );
}