export default function AdminLoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
            <form
                action="/api/admin/login"
                method="POST"
                className="w-full max-w-md rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm"
            >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chufos-orange)]">
                    Admin Login
                </p>

                <h1 className="mt-3 text-3xl font-bold text-zinc-900">
                    Chufo&apos;s Painting Dashboard
                </h1>

                <label className="mt-6 block text-sm font-medium text-zinc-900">
                    Password
                </label>

                <input
                    name="password"
                    type="password"
                    required
                    className="mt-2 w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-[var(--chufos-orange)]"
                />

                <button
                    type="submit"
                    className="mt-6 w-full rounded-full bg-[var(--chufos-brown)] px-6 py-3 text-sm font-medium text-white hover:brightness-95"
                >
                    Login
                </button>
            </form>
        </main>
    );
}