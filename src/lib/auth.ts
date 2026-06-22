import { cookies } from "next/headers";

const ADMIN_COOKIE = "stradip_admin_session";

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "stradip2025";
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE);
  return session?.value === getAdminPassword();
}

export function createAdminSessionValue(): string {
  return getAdminPassword();
}

export { ADMIN_COOKIE };
