export default function PaymentCancelledPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 text-zinc-900">
            <div className="max-w-xl rounded-[2rem] border border-zinc-200 bg-white p-8 text-center shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Payment Cancelled
                </p>

                <h1 className="mt-4 text-3xl font-bold">No payment was completed.</h1>

                <p className="mt-4 leading-7 text-zinc-600">
                    Your payment was cancelled. You can return home or contact Chufo&apos;s Painting if you need help.
                </p>

                <a
                    href="/"
                    className="mt-6 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700"
                >
                    Back to Home
                </a>
            </div>
        </main>
    );
}