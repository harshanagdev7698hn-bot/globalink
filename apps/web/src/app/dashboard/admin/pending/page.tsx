import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

type UserRow = {
  id: string;
  name: string | null;
  email: string;
  role: string;
  status: string;
};

async function updateUserStatus(formData: FormData) {
  "use server";

  const userId = formData.get("userId");
  const status = formData.get("status");

  if (
    typeof userId !== "string" ||
    typeof status !== "string" ||
    !["VERIFIED", "REJECTED"].includes(status)
  ) {
    return;
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      status,
    },
  });

  revalidatePath("/dashboard/admin/pending");
  revalidatePath("/dashboard/admin/verified");
  revalidatePath("/dashboard/admin/rejected");
}

export default async function PendingReviewPage() {
  const users = (await prisma.user.findMany({
    where: {
      status: "PENDING",
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
    },
  })) as UserRow[];

  return (
    <section className="space-y-8">
      <div className="rounded-[28px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#5B86B6]">
          Admin Review
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-[#000F22]">
          Pending Review
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#6B7280]">
          Approve or reject users waiting for verification.
        </p>
      </div>

      <div className="rounded-[24px] border border-[#D6E2F0] bg-white shadow-sm">
        {users.length === 0 ? (
          <div className="p-6 text-sm font-medium text-[#6B7280]">
            No pending users found.
          </div>
        ) : (
          <div className="divide-y divide-[#D6E2F0]">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h2 className="text-lg font-extrabold text-[#000F22]">
                    {user.name || "Unnamed User"}
                  </h2>
                  <p className="mt-1 text-sm text-[#6B7280]">{user.email}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#5B86B6]">
                    {user.role}
                  </p>
                </div>

                <div className="flex gap-3">
                  <form action={updateUserStatus}>
                    <input type="hidden" name="userId" value={user.id} />
                    <input type="hidden" name="status" value="VERIFIED" />
                    <button
                      type="submit"
                      className="rounded-xl bg-[#1B3554] px-5 py-3 text-sm font-bold text-white hover:bg-[#000F22]"
                    >
                      Approve
                    </button>
                  </form>

                  <form action={updateUserStatus}>
                    <input type="hidden" name="userId" value={user.id} />
                    <input type="hidden" name="status" value="REJECTED" />
                    <button
                      type="submit"
                      className="rounded-xl border border-[#D6E2F0] px-5 py-3 text-sm font-bold text-[#1B3554] hover:bg-[#EEF7FF]"
                    >
                      Reject
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}