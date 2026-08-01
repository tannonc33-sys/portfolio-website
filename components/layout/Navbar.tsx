import Image from "next/image";
export default function Navbar() {
    return (
        <nav className="border-b border-[var(--color-primary)] bg-[var(--color-primary)]">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-0">
                <div className="text-lg font-semibold"><Image
                    src="/Tannon_Website_Name.svg"
                    alt="Tannon Cearley"
                    width={190}
                    height={90}
                    priority
                /></div>

                <div className="hidden gap-6 md:flex">
                </div>

                <a
                    href="#contact"
                    className="rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-surface)] hover:bg-[var(--color-primary)] transition-colors duration-200 hover:text-white transition-colors duration-150"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}