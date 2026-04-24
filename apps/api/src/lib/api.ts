// apps/web/src/lib/api.ts

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

// optional: tumhare purane code ke liye compatible naam
export const apiBase = API_URL;

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_URL}${path.startsWith("/") ? path : `/${path}`}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include", // important for cookies
    ...options,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message =
      (data &&
        ((data as any).message ||
          (data as any).error ||
          JSON.stringify(data))) ||
      `Request failed with status ${res.status}`;

    throw new Error(message);
  }

  return data as T;
}
// apps/web/src/lib/api.ts

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

// optional: tumhare purane code ke liye compatible naam
export const apiBase = API_URL;

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_URL}${path.startsWith("/") ? path : `/${path}`}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include", // important for cookies
    ...options,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message =
      (data &&
        ((data as any).message ||
          (data as any).error ||
          JSON.stringify(data))) ||
      `Request failed with status ${res.status}`;

    throw new Error(message);
  }

  return data as T;
}
