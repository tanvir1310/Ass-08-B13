import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "https://ass-08-b13.vercel.app",
  // baseURL: "https://ass-08-b13.vercel.app",
});
export const { signin, signup } = createAuthClient();
