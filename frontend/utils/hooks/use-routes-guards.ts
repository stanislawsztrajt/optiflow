// import { usePathname, useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { useUser } from ".";
import { user } from "../constans/user";

const loggedInRoutes = ["dashboard", "create", "chat"];
const notLoggedInRoutes = ["auth"];

export const isLoggedIn = () => {
  const isLoggedInRoute = loggedInRoutes.some((route) =>
    window.location.href.includes(route)
  );

  if (isLoggedInRoute && !user) {
    window.location.href = "/auth/login";
  }
}

export const isNotLoggedInRoute = () => {
  const isNotLoggedInRoute = notLoggedInRoutes.some((route) =>
    window.location.href.includes(route)
  );

  if (isNotLoggedInRoute && user) {
    window.location.href = "/dashboard";
  }
}

// export const useRoutesGuards = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { user } = useUser();

//   useEffect(() => {
//     const isLoggedInRoute = loggedInRoutes.some((route) =>
//       pathname?.includes(route)
//     );
//     const isNotLoggedInRoute = notLoggedInRoutes.some((route) =>
//       pathname?.includes(route)
//     );

//     if (isLoggedInRoute && !user) {
//       router.push("/auth/login");
//     }

//     if (isNotLoggedInRoute && user) {
//       router.push("/dashboard");
//     }
//   }, [pathname]);
// };
