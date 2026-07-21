"use client";

import { useState } from "react";

type CreatePaymentButtonProps = {
    leadId: number;
    customerName: string;
    customerEmail: string;
    service: string;
};

export default function CreatePaymentButton({
    leadId,
    customerName,
    customerEmail,
    service,
}: CreatePaymentButtonProps) {
    const [amount, setAmount] = useState("");
    const [paymentUrl, setPaymentUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    async function handleCreatePayment() {
        setIsLoading(true);
        setPaymentUrl("");

        const amountInCents = Math.round(Number(amount) * 100);

        const res = await fetch("/api/payments/create-checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                leadId,
                amount: amountInCents,
                customerEmail,
                customerName,
                description: `${service} - Chufo's Painting`,
            }),
        });

        const data = await res.json();

        if (data.url) {
            setPaymentUrl(data.url);
        } else {
            alert("Could not create payment link.");
        }

        setIsLoading(false);
    }

    return (
        <div className="mt-5 rounded-2xl border border-[var(--chufos-brown)] bg-[var(--chufos-beige)] p-4">
            <p className="text-sm font-semibold text-zinc-900">Create Payment Link</p>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount, ex: 500"
                    className="w-full rounded-full border border-orange-200 bg-white px-4 py-2 text-sm outline-none focus:border-[var(--chufos-brown)]"
                />

                <button
                    type="button"
                    onClick={handleCreatePayment}
                    disabled={isLoading || !amount}
                    className="rounded-full bg-[var(--chufos-brown)] px-5 py-2 text-sm font-medium text-white hover:bg-[var(--chufos-orange)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isLoading ? "Creating..." : "Create Link"}
                </button>
            </div>

            {paymentUrl && (
                <div className="mt-4 rounded-xl bg-white p-3 text-sm">
                    <p className="font-medium text-zinc-900">Payment link created:</p>

                    <a
                        href={paymentUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block break-all text-orange-700 underline"
                    >
                        {paymentUrl}
                    </a>

                    <button
                        type="button"
                        onClick={() => {
                            navigator.clipboard.writeText(paymentUrl);
                            setCopied(true);

                            setTimeout(() => {
                                setCopied(false);
                            }, 2000);
                        }}
                        className="mt-3 rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-700"
                    >
                        {copied ? "Copied!" : "Copy Link"}
                    </button>
                </div>
            )}
        </div>
    );
}