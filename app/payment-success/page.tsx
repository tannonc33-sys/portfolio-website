export default function PaymentSuccessPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-orange-50 px-4 text-zinc-900">
            <div className="max-w-xl rounded-[2rem] border border-orange-200 bg-white p-8 text-center shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                    Payment Received
                </p>

                <h1 className="mt-4 text-3xl font-bold">Thank you for your payment.</h1>

                <p className="mt-4 leading-7 text-zinc-600">
                    Your payment was completed successfully. Chufo&apos;s Painting will follow up with the next steps.
                </p>

                <a
                    href="/"
                    className="mt-6 inline-block rounded-full bg-orange-600 px-6 py-3 text-sm font-medium text-white hover:bg-orange-700"
                >
                    Back to Home
                </a>
            </div>
        </main>
    );
}