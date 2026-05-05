import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://ass-08-b13.vercel.app",
});
export const { signin, signup } = createAuthClient();
