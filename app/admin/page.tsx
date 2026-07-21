import CreatePaymentButton from "../../components/admin/CreatePaymentButton";
import LeadStatusSelect from "../../components/admin/LeadStatusSelect";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function getStatusStyles(status: string) {
  switch (status) {
    case "contacted":
      return "bg-blue-50 text-blue-700";
    case "quoted":
      return "bg-yellow-50 text-yellow-700";
    case "closed":
      return "bg-green-50 text-green-700";
    default:
      return "bg-orange-50 text-orange-700";
  }
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("admin_auth")?.value === "true";

  if (!isAuthed) {
    redirect("/admin/login");
  }

  const { data: leads, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-50 px-4 py-12 text-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold">Leads Dashboard</h1>
          <p className="mt-4 text-red-600">Failed to load leads.</p>
        </div>
      </main>
    );
  }

  const totalLeads = leads?.length ?? 0;
  const newLeads = leads?.filter((lead) => lead.status === "new").length ?? 0;
  const contactedLeads =
    leads?.filter((lead) => lead.status === "contacted").length ?? 0;
  const quotedLeads =
    leads?.filter((lead) => lead.status === "quoted").length ?? 0;
  const closedLeads =
    leads?.filter((lead) => lead.status === "closed").length ?? 0;

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-12 text-zinc-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <img
            src="/chufos_text_logo.svg"
            alt="Chufo's Painting"
            className="h-8 w-auto"
          />
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Leads Dashboard
          </h1>
          <p className="mt-3 text-zinc-600">
            Track quote requests submitted through the website.
          </p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-3xl border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Total Leads</p>
            <p className="mt-2 text-3xl font-bold">{totalLeads}</p>
          </div>

          <div className="rounded-3xl border border-orange-200 bg-white p-5">
            <p className="text-sm text-zinc-500">New</p>
            <p className="mt-2 text-3xl font-bold text-orange-600">
              {newLeads}
            </p>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Contacted</p>
            <p className="mt-2 text-3xl font-bold text-blue-600">
              {contactedLeads}
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Quoted</p>
            <p className="mt-2 text-3xl font-bold text-yellow-600">
              {quotedLeads}
            </p>
          </div>

          <div className="rounded-3xl border border-green-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Closed</p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {closedLeads}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {leads?.length === 0 && (
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-zinc-600">No leads yet.</p>
            </div>
          )}

          {leads?.map((lead) => (
            <div
              key={lead.id}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    {lead.first_name} {lead.last_name}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Submitted {new Date(lead.created_at).toLocaleString()}
                  </p>
                </div>

                <LeadStatusSelect leadId={lead.id} currentStatus={lead.status} />
              </div>

              <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <p className="font-medium text-zinc-900">Email</p>
                  <p className="mt-1 text-zinc-600">{lead.email}</p>
                </div>

                <div>
                  <p className="font-medium text-zinc-900">Phone</p>
                  <p className="mt-1 text-zinc-600">{lead.phone}</p>
                </div>

                <div>
                  <p className="font-medium text-zinc-900">Service</p>
                  <p className="mt-1 text-zinc-600">{lead.service}</p>
                </div>
              </div>

              <div className="mt-5">
                <p className="font-medium text-zinc-900">Message</p>
                <p className="mt-2 leading-7 text-zinc-600">{lead.message}</p>
              </div>

              {lead.payment_amount && (
                <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm">
                  <p className="font-medium text-zinc-900">Payment Info</p>

                  <p className="mt-2 text-zinc-700">
                    Amount: ${(lead.payment_amount / 100).toFixed(2)}
                  </p>

                  <p className="text-zinc-700">
                    Status: {lead.payment_status}
                  </p>

                  {lead.payment_link && (
                    <a
                      href={lead.payment_link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-green-700 underline"
                    >
                      View Payment Link
                    </a>
                  )}
                </div>
              )}

              <CreatePaymentButton
                leadId={lead.id}
                customerName={`${lead.first_name} ${lead.last_name}`}
                customerEmail={lead.email}
                service={lead.service}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}