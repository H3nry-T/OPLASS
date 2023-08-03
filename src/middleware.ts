import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  matcher: [
    "/dashboard/home",
    "/(api|trpc)(.*)",
    "/dashboard/analytics",
    "/dashboard/settings",
  ],
};
