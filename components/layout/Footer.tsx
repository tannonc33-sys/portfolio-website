export default function Footer() {
    return (
        <footer className="bg-[var(--chufos-brown)] border-t border-[var(--chufos-brown)] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--chufos-beige)] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1">
                    <p className="font-medium">Chufos Painting</p>

                    <p>(806) 705-0403</p>

                    <p>bear.martinez@chufospainting.com</p>

                    <p className="text-xs">
                        © 2026 Chufos Painting. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-4">
                    <a href="#" className="text-[var(--chufos-beige)] hover:text-[var(--chufos-orange)]">
                        Privacy
                    </a>
                    <a href="#" className="text-[var(--chufos-beige)] hover:text-[var(--chufos-orange)]">
                        Terms
                    </a>
                    <a href="#contact" className="text-[var(--chufos-beige)] hover:text-[var(--chufos-orange)]">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}