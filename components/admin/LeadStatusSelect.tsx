"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type LeadStatusSelectProps = {
    leadId: number;
    currentStatus: string;
};

export default function LeadStatusSelect({
    leadId,
    currentStatus,
}: LeadStatusSelectProps) {
    const router = useRouter();
    const [status, setStatus] = useState(currentStatus);
    const [isSaving, setIsSaving] = useState(false);

    async function handleChange(newStatus: string) {
        setStatus(newStatus);
        setIsSaving(true);

        const res = await fetch("/api/leads/status", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: leadId,
                status: newStatus,
            }),
        });

        if (!res.ok) {
            alert("Failed to update status.");
            setStatus(currentStatus);
        }

        setIsSaving(false);
        router.refresh();
    }

    return (
        <div className="flex flex-col items-end gap-2">
            <select
                value={status}
                onChange={(e) => handleChange(e.target.value)}
                disabled={isSaving}
                className="rounded-full border border-[var(--chufos-brown)] bg-[var(--chufos-beige)] px-3 py-1 text-sm font-medium outline-none disabled:opacity-60"
            >
                <option value="new">new</option>
                <option value="contacted">contacted</option>
                <option value="quoted">quoted</option>
                <option value="closed">closed</option>
            </select>

            {isSaving && <p className="text-xs text-zinc-500">Saving...</p>}
        </div>
    );
}