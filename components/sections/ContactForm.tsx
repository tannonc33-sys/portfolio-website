"use client";

import { useState } from "react";
export default function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [website, setWebsite] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                service,
                message,
                website,
            }),
        });

        if (res.ok) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setService("");
            setMessage("");
            setStatus("success");
        } else {
            setStatus("error");
        }
    };
    return (
        <section id="contact" className="bg-[var(--background)] border-t border-[var(--color-primary)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chufos-brown)]">
                        Contact
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl">Let's Work Together</h2>
                    <p className="max-w-xl text-base leading-7 text-zinc-600">
                        Have a project in mind, a job oppurtunity, or a question about my work? Send me a
                        message and I'll get back to you as soon as I can.
                    </p>

                    <div className="space-y-3 pt-4 text-sm text-zinc-600">
                        {/*<p>Fast response times</p>*/}
                        <p>Available for full-time opportunities</p>
                        <p>Open to freelance projects</p>
                    </div>
                </div>

                <div className="rounded-[2rem] border border-[var(--color-primary)] bg-white p-6 shadow-sm sm:p-8">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="hidden">
                            <label htmlFor="website">Website</label>
                            <input
                                id="website"
                                type="text"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>
                        
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-medium text-zinc-900">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="John"
                                    className="w-full rounded-2xl border border-[var(--color-primary)] px-4 py-3 text-sm outline-none transition focus:border-zinc-900"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-medium text-zinc-900">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Smith"
                                    className="w-full rounded-2xl border border-[var(--color-primary)] px-4 py-3 text-sm outline-none transition focus:border-zinc-900"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-900">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-2xl border border-[var(--color-primary)] px-4 py-3 text-sm outline-none transition focus:border-zinc-900"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-zinc-900">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="(555) 555-5555"
                                    className="w-full rounded-2xl border border-[var(--color-primary)] px-4 py-3 text-sm outline-none transition focus:border-zinc-900"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium text-zinc-900">
                                Subject
                            </label>
                            <input
                                id="service"
                                type="text"
                                placeholder="Job opportunity, freelance project, question..."
                                className="w-full rounded-2xl border border-[var(--color-primary)] px-4 py-3 text-sm outline-none transition focus:border-zinc-900"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-zinc-900">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Tell me about your project, role, or how I can help."
                                className="w-full rounded-2xl border border-[var(--color-primary)] px-4 py-3 text-sm outline-none transition focus:border-zinc-900"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-surface)] transition hover:bg-[var(--color-primary)] transition-colors duration-200 hover:text-white transition-colors duration-150"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                                Thanks! Your request was sent successfully. We&apos;ll follow up soon.
                            </p>
                        )}

                        {status === "error" && (
                            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                Something went wrong. Please try again or call us directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}