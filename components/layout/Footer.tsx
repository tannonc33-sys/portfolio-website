export default function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] border-t border-[var(--color-primary)] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--color-surface)] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1">
                    <p className="font-medium">Tannon Cearley</p>

                    <p>Graphic Designer • Web Designer</p>

                    <p></p>

                    <p className="text-xs">
                        © 2026 Tannon Cearley. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-4">
                    <a href="#contact" className="text-[var(--color-surface)] hover:text-[var(--color-accent)]">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}