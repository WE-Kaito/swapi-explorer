import { SWAPI_BASE_URL } from "@/services/swapi/config";

// https://swapi.dev/api/starships/12/ → /starships/12
export function extractResourcePath(url: string): string {
  const path = url.substring(SWAPI_BASE_URL.length);

  if (!path.length) throw new Error(`Could not extract resource path from URL: ${url}`);

  return path;
}
