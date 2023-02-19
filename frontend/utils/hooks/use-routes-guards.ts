import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from ".";

const loggedInRoutes = ["dashboard", "create", "chat"];
const notLoggedInRoutes = ["auth"];

export const useRoutesGuards = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUser();

  useEffect(() => {
    const isLoggedInRoute = loggedInRoutes.some((route) =>
      pathname?.includes(route)
    );
    const isNotLoggedInRoute = notLoggedInRoutes.some((route) =>
      pathname?.includes(route)
    );

    if (isLoggedInRoute && !user) {
      router.push("/auth/login");
    }

    if (isNotLoggedInRoute && user) {
      router.push("/dashboard");
    }
  }, [pathname]);
};
