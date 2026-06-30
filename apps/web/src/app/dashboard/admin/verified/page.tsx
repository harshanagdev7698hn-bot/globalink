import { VerificationStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
type UserRow = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export default async function VerifiedUsersPage() {
  const users = await prisma.$queryRaw<UserRow[]>`
    SELECT "id", "name", "email", "role"
    FROM "User"
    WHERE "status"::text = 'VERIFIED'
    ORDER BY "createdAt" DESC
  `;

  return (
    <section className="space-y-8">
      <div className="rounded-[28px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#5B86B6]">
          Admin Users
        </p>

        <h1 className="mt-4 text-4xl font-extrabold text-[#000F22]">
          Verified Users
        </h1>
      </div>

      <div className="rounded-[24px] border border-[#D6E2F0] bg-white shadow-sm">
        {users.length === 0 ? (
          <div className="p-6 text-sm font-medium text-[#6B7280]">
            No verified users found.
          </div>
        ) : (
          <div className="divide-y divide-[#D6E2F0]">
            {users.map((user) => (
              <div key={user.id} className="p-6">
                <h2 className="text-lg font-extrabold text-[#000F22]">
                  {user.name}
                </h2>
                <p className="mt-1 text-sm text-[#6B7280]">{user.email}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#5B86B6]">
                  {user.role}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}